/*
	*** Rendering View
	*** src/gui/viewer/render/view.cpp
	Copyright T. Youngs 2013-2019

	This file is part of Dissolve.

	Dissolve is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	Dissolve is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with Dissolve.  If not, see <http://www.gnu.org/licenses/>.
*/

#include "gui/viewer/render/view.h"
#include "gui/viewer/render/renderable.h"
#include "math/cuboid.h"
#include <algorithm>
#include <cmath>

// Static Members
const double View::zOffset_ = -10.0;

// Constructor
View::View(const List<Renderable>& renderables, FontInstance& fontInstance) : fontInstance_(fontInstance), renderables_(renderables), axes_(*this, fontInstance)
{
	clear();

	// Set GL primitive styles
	interactionPrimitive_.setNoInstances();
	interactionBoxPrimitive_.setNoInstances();
	boundingBoxPrimitive_.setNoInstances();
}

// Destructor
View::~View()
{
}

// Clear view, resetting to defaults
void View::clear()
{
	// Geometry / position
	xOffset_ = 0;
	yOffset_ = 0;
	xScale_ = 1.0;
	yScale_ = 1.0;
	aspectRatio_ = 1.0;

	// Projection / view
	hasPerspective_ = false;
	perspectiveFieldOfView_ = 20.0;
	viewportMatrix_[0] = 0;
	viewportMatrix_[1] = 0;
	viewportMatrix_[2] = 0;
	viewportMatrix_[3] = 0;
	viewportVersion_ = 0;
	viewTranslation_.set(0.0, 0.0, zOffset_);
	viewViewportUsedAt_ = -1;
	viewAxesUsedAt_ = -1;
	viewRotationPoint_ = 0;
	viewRotationInversePoint_ = -1;

	// Role
	viewType_ = View::AutoStretchedView;
	autoFollowType_ = View::NoAutoFollow;

	// Style
	boundingBox_ = View::NoBox;
	boundingBoxPlaneY_ = 0.0;
	labelPointSize_ = 16.0;
	titlePointSize_ = 18.0;
	textZScale_ = -1.0;
	flatLabelsIn3D_ = false;
}

/*
 * Geometry
 */

// Set pixel offsets and scales for view
void View::setOffsetAndScale(int xOffset, int yOffset, double xScale, double yScale)
{
	xOffset_ = xOffset;
	yOffset_ = yOffset;
	xScale_ = xScale;
	yScale_ = yScale;
}

// Recalculate viewport matrix based on pixel dimensions provided
void View::recalculateViewport(int width, int height)
{
	viewportMatrix_[0] = xOffset_;
	viewportMatrix_[1] = yOffset_;
	viewportMatrix_[2] = width * xScale_;
	viewportMatrix_[3] = height * yScale_;
	aspectRatio_ = double(viewportMatrix_[2]) / double(viewportMatrix_[3]);
	++viewportVersion_;

	// Recalculate projection matrix
	if ((viewType_ == View::NormalView) || (viewType_ == View::AutoStretchedView))
	{
		projectionMatrix_ = calculateProjectionMatrix(hasPerspective_, zOffset_);
	}
	else projectionMatrix_ = calculateProjectionMatrix(false, zOffset_);

	calculateFontScaling();
}

// Translate viewport by specified pixel amounts
void View::translateViewport(int deltaX, int deltaY)
{
	viewportMatrix_[0] += deltaX;
	viewportMatrix_[1] += deltaY;
}

// Return viewport matrix
const GLuint* View::viewportMatrix() const
{
	return viewportMatrix_;
}

/*
 * Projection / View
 */

// View types
const char* ViewTypeKeywords[View::nViewTypes] = { "Normal", "AutoStretched", "FlatXY", "FlatXZ", "FlatZY", "Linked" };

// Convert text string to ViewType
View::ViewType View::viewType(const char* s)
{
	for (int n=0; n<View::nViewTypes; ++n) if (DissolveSys::sameString(s, ViewTypeKeywords[n])) return (View::ViewType) n;
	return View::nViewTypes;
}

// Convert ViewType to text string
const char* View::viewType(View::ViewType vt)
{
	return ViewTypeKeywords[vt];
}

// AutoFollow types
const char* AutoFollowTypeKeywords[View::nAutoFollowTypes] = { "None", "All", "X" };

// Convert text string to AutoFollowType
View::AutoFollowType View::autoFollowType(const char* s)
{
	for (int n=0; n<View::nAutoFollowTypes; ++n) if (DissolveSys::sameString(s, AutoFollowTypeKeywords[n])) return (View::AutoFollowType) n;
	return View::nAutoFollowTypes;
}

// Convert AutoFollowType to text string
const char* View::autoFollowType(View::AutoFollowType aft)
{
	return AutoFollowTypeKeywords[aft];
}

// Return calculated projection matrix
Matrix4 View::calculateProjectionMatrix(bool hasPerspective, double orthoZoom) const
{
	Matrix4 result;

	GLdouble top, bottom, right, left;
	GLdouble nearClip = 0.5, farClip = 2000.0;

	if (hasPerspective)
	{
		// Use reversed top and bottom values so we get y-axis (0,1,0) pointing up
		top = tan(perspectiveFieldOfView_ / DEGRAD) * 0.5;
		bottom = -top;
		left = -aspectRatio_*top;
		right = aspectRatio_*top;
		result.setColumn(0, (nearClip*2.0) / (right-left), 0.0, 0.0, 0.0);
		result.setColumn(1, 0.0, (nearClip*2.0) / (top-bottom), 0.0, 0.0);
		result.setColumn(2, (right+left)/(right-left), (top+bottom)/(top-bottom), -(farClip+nearClip)/(farClip-nearClip), -1.0);
		result.setColumn(3, 0.0, 0.0, -(2.0*nearClip*farClip) / (farClip-nearClip), 0.0);
		// Equivalent to the following code:
		// glMatrixMode(GL_PROJECTION);
		// glLoadIdentity();
		// top = tan(prefs.perspectiveFov() / DEGRAD) * prefs.clipNear();
		// bottom = -top;
		// glFrustum(aspect*bottom, aspect*top, bottom, top, prefs.clipNear(), prefs.clipFar());
		// glGetDoublev(GL_PROJECTION_MATRIX, modelProjectionMatrix_.matrix());
	}
	else
	{
		top = -tan(perspectiveFieldOfView_ / DEGRAD) * orthoZoom;
		bottom = -top;
		left = -aspectRatio_*top;
		right = aspectRatio_*top;

		result.setColumn(0, 2.0 / (right-left), 0.0, 0.0, (right+left)/(right-left));
		result.setColumn(1, 0.0, 2.0 / (top-bottom), 0.0, (top+bottom)/(top-bottom));
		result.setColumn(2, 0.0, 0.0, -1.0/farClip, 0.0);
		result.setColumn(3, 0.0, 0.0, 0.0, 1.0);
		// Equivalent to the following code:
		// glMatrixMode(GL_PROJECTION);
		// glLoadIdentity();
		// top = tan(prefs.perspectiveFov() / DEGRAD) * prefs.clipNear();
		// bottom = -top;
		// glOrtho(aspect*top, aspect*bottom, top, bottom, -prefs.clipFar(), prefs.clipFar());
		// glGetDoublev(GL_PROJECTION_MATRIX, modelProjectionMatrix_.matrix());
	}

	return result;
}

// Set view type
void View::setViewType(View::ViewType vt)
{
	viewType_ = vt;

	// Forcibly turn off perspective if this is a flat view
	if ((viewType_ >= View::FlatXYView) && (viewType_ <= View::FlatZYView)) setHasPerspective(false);
}

// Return view type
View::ViewType View::viewType() const
{
	return viewType_;
}

// Return whether view type is flat
bool View::isFlatView() const
{
	return ((viewType_ >= View::FlatXYView) && (viewType_ <= View::FlatZYView));
}

// Return projection matrix
Matrix4 View::projectionMatrix() const
{
	return projectionMatrix_;
}

// Set whether the view uses perspective
void View::setHasPerspective(bool perspective)
{
	hasPerspective_ = perspective;

	projectionMatrix_ = calculateProjectionMatrix(hasPerspective_, viewTranslation_.z);

	calculateFontScaling();
}

// Return whether the view uses perspective
bool View::hasPerspective() const
{
	return hasPerspective_;
}

// Update transformation (view) matrix
void View::setViewRotation(Matrix4& mat)
{
	// If this is a two-dimensional or linked view, ignore the request
	if ((viewType_ != View::NormalView) && (viewType_ != View::AutoStretchedView)) return;

	viewRotation_ = mat;

	++viewRotationPoint_;
}

// Update single column of view matrix
void View::setViewRotationColumn(int column, double x, double y, double z)
{
	// If this is a two-dimensional or linked view, ignore the request
	if ((viewType_ != View::NormalView) && (viewType_ != View::AutoStretchedView)) return;
	
	viewRotation_.setColumn(column, x, y, z, 0.0);

	++viewRotationPoint_;
}

// Rotate view matrix about x and y by amounts specified
void View::rotateView(double dx, double dy)
{
	// If this is a two-dimensional or linked view, ignore the request
	if ((viewType_ != View::NormalView) && (viewType_ != View::AutoStretchedView)) return;

	Matrix4 A;
	A.createRotationXY(dx, dy);	// TODO Create Matrix4::applyPreRotationXY() function.
	viewRotation_.preMultiply(A);

	++viewRotationPoint_;
}

// Return view rotation
Matrix4 View::viewRotation() const
{
	return viewRotation_;
}

// Return view rotation inverse
Matrix4 View::viewRotationInverse()
{
	if (viewRotationPoint_ != viewRotationInversePoint_)
	{
		viewRotationInverse_ = viewRotation_;
		viewRotationInverse_.invert();
		
		viewRotationInversePoint_ = viewRotationPoint_;
	}

	return viewRotationInverse_;
}

// Set view translation
void View::setViewTranslation(double x, double y, double z)
{
	viewTranslation_.set(x, y, z);
	if (!hasPerspective_) projectionMatrix_ = calculateProjectionMatrix(false, viewTranslation_.z);
	calculateFontScaling();
}

// Translate view matrix by amounts specified
void View::translateView(double dx, double dy, double dz)
{
	// If this is a two-dimensional or linked view, ignore the request
	if ((viewType_ != View::NormalView) && (viewType_ != View::AutoStretchedView)) return;

	viewTranslation_.add(dx, dy, dz);
	if ((!hasPerspective_) && (fabs(dz) > 1.0e-4)) projectionMatrix_ = calculateProjectionMatrix(false, viewTranslation_.z);
	calculateFontScaling();
}

// Return current view translation
Vec3<double> View::viewTranslation() const
{
	return viewTranslation_;
}

// Return full view matrix (rotation + translation)
Matrix4 View::viewMatrix()
{
	Matrix4 viewMatrix;

	// Apply translation to centre of axes coordinates
	viewMatrix.createTranslation(-axes_.coordCentre());

	// Apply rotation matrix about this local centre
	viewMatrix.preMultiply(viewRotation_);

	// Apply translation to apply view shift and zoom (the latter only if using perspective)
	viewMatrix.applyPreTranslation(viewTranslation_.x, viewTranslation_.y, hasPerspective_ ? viewTranslation_.z : 0.0 );

	return viewMatrix;
}

// Project given model coordinates into world coordinates
Vec3<double> View::modelToWorld(Vec3<double> modelr)
{
	Vec3<double> worldr;
	Matrix4 vmat;
	Vec4<double> pos, temp;

	// Projection formula is : worldr = P x M x modelr
	pos.set(modelr, 1.0);
	// Get the world coordinates of the atom - Multiply by modelview matrix 'view'
	vmat = viewMatrix();
	temp = vmat * pos;
	worldr.set(temp.x, temp.y, temp.z);

	return worldr;
}

// Project given model coordinates into screen coordinates
Vec3<double> View::modelToScreen(Vec3<double> modelr)
{
	Vec4<double> screenr, tempscreen;
	Vec4<double> worldr;
	Matrix4 vmat;
	Vec4<double> pos;

	// Projection formula is : worldr = P x M x modelr
	pos.set(modelr, 1.0);

	// Get the world coordinates of the point - Multiply by modelview matrix 'view'
	vmat = viewMatrix();
	worldr = vmat * pos;
	screenr = projectionMatrix_ * worldr;
	screenr.x /= screenr.w;
	screenr.y /= screenr.w;
	screenr.x = viewportMatrix_[0] + viewportMatrix_[2]*(screenr.x+1)*0.5;
	screenr.y = viewportMatrix_[1] + viewportMatrix_[3]*(screenr.y+1)*0.5;
	screenr.z = screenr.z / screenr.w;

	return Vec3<double>(screenr.x, screenr.y, screenr.z);
}

// Project given model coordinates into screen coordinates using supplied projection matrix, rotation matrix and translation vector
Vec3<double> View::modelToScreen(Vec3<double> modelr, Matrix4 projectionMatrix, Matrix4 rotationMatrix, Vec3<double> translation)
{
	Vec4<double> screenr, tempscreen;
	Vec4<double> worldr;
	Matrix4 vmat;
	Vec4<double> pos;

	// Projection formula is : worldr = P x M x modelr
	pos.set(modelr, 1.0);

	// Get the world coordinates of the point - Multiply by modelview matrix 'view'
	vmat = rotationMatrix;
	vmat.applyPreTranslation(translation);
	worldr = vmat * pos;
	screenr = projectionMatrix * worldr;
	screenr.x /= screenr.w;
	screenr.y /= screenr.w;
	screenr.x = viewportMatrix_[0] + viewportMatrix_[2]*(screenr.x+1)*0.5;
	screenr.y = viewportMatrix_[1] + viewportMatrix_[3]*(screenr.y+1)*0.5;
	screenr.z = screenr.z / screenr.w;

	return Vec3<double>(screenr.x, screenr.y, screenr.z);
}

// Return z translation necessary to display coordinates supplied, assuming the identity view matrix
double View::calculateRequiredZoom(double xMax, double yMax, double fraction)
{
	// The supplied x and y extents should indicate the number of units in those directions
	// from the origin that are to be displaye on-screen. The 'fraction' indicates how much of the
	// available range on-screen to use, allowing a margin to be added. A value of '1.0' would
	// put the extent with the highest units on the very edge of the display.

	Matrix4 viewMatrix, projectionMatrix = calculateProjectionMatrix(hasPerspective_, zOffset_);
	Vec4<double> rScreen, rWorld, rModel(xMax, yMax, 0.0, 1.0);
	Vec3<double> translation(0.0, 0.0, -1.0);

	// Sanity check
	if (viewportMatrix_[2] == 0) return 1.0;
	if (viewportMatrix_[3] == 0) return 1.0;

	// Calculate target screen coordinate
	int targetX = viewportMatrix_[0] + (1.0 + fraction) * viewportMatrix_[2] * 0.5;
	int targetY = viewportMatrix_[1] + (1.0 + fraction) * viewportMatrix_[3] * 0.5;

	int count = 0;
	do
	{
		// If not using perspective, must recalculate the projection matrix
		if (!hasPerspective_) projectionMatrix = calculateProjectionMatrix(false, translation.z);

		// Project the point : worldr = P x M x modelr
		viewMatrix.setIdentity();
		viewMatrix.applyPreTranslation(translation);
		rWorld = viewMatrix * rModel;
		rScreen = projectionMatrix * rWorld;
		rScreen.x /= rScreen.w;
		rScreen.y /= rScreen.w;
		rScreen.x = viewportMatrix_[0] + viewportMatrix_[2]*(rScreen.x+1)*0.5;
		rScreen.y = viewportMatrix_[1] + viewportMatrix_[3]*(rScreen.y+1)*0.5;
		rScreen.z = rScreen.z / rScreen.w;

		// Increase zoom distance
		translation.z -= std::max( std::max(rScreen.x / targetX, rScreen.y / targetY), 1.0);

		// Limit the number of iterations so we can never get into an infinite loop
		if (++count == 1000) break;

	} while ((rScreen.x > targetX) || (rScreen.y > targetY));

	return translation.z;
}

// Convert screen coordinates into model space coordinates
Vec3<double> View::screenToModel(int x, int y, double z)
{
	static Vec3<double> modelr;
	Vec4<double> temp, worldr;
	int newx, newy;
	double dx, dy;

	// Grab full transformation matrix (not just rotation matrix) and invert
	Matrix4 itransform = viewMatrix();
	itransform.invert();

	// Project points at guide z-position and two other points along literal x and y to get scaling factors for screen coordinates
	worldr.set(0.0,0.0,z, 1.0);
	temp = projectionMatrix_ * worldr;
	newx = viewportMatrix_[0] + viewportMatrix_[2]*(temp.x / temp.w + 1.0)*0.5;
	newy = viewportMatrix_[1] + viewportMatrix_[3]*(temp.y / temp.w + 1.0)*0.5;

	for (int n=0; n<10; ++n)
	{
		// Determine new (better) coordinate from a yardstick centred at current world coordinates
		temp = projectionMatrix_ * Vec4<double>(worldr.x+1.0, worldr.y+1.0, worldr.z, worldr.w);
		dx = viewportMatrix_[0] + viewportMatrix_[2]*(temp.x / temp.w + 1.0)*0.5 - newx;
		dy = viewportMatrix_[1] + viewportMatrix_[3]*(temp.y / temp.w + 1.0)*0.5 - newy;

		worldr.add((x-newx)/dx, (y-newy)/dy, 0.0, 0.0);
// 		printf ("N=%i", n); worldr.print();
		temp = projectionMatrix_ * worldr;
		newx = viewportMatrix_[0] + viewportMatrix_[2]*(temp.x / temp.w + 1.0)*0.5;
		newy = viewportMatrix_[1] + viewportMatrix_[3]*(temp.y / temp.w + 1.0)*0.5;
// 		printf("NEW dx = %f, dy = %f, wantedxy = %f, %f\n", newx, newy, x, y);
		if ((x == newx) && (y == newy)) break;
	}

	// Finally, invert to model coordinates
	modelr = itransform * Vec3<double>(worldr.x, worldr.y, worldr.z);

	return modelr;
}

// Calculate selection axis coordinate from supplied screen coordinates
double View::screenToAxis(int axis, int x, int y, bool clamp)
{
	// Check for a valid axis
	if (axis == -1) return 0.0;

// 	printf("Test: min=%f, max=%f\n", min_[0], max_[0]);
// 	rMouseLast_.print();
// 	axisCoordMin_[0].print();
	// Project axis coordinates to get a screen-based yardstick
	Vec3<double> axmin = modelToScreen(axes_.coordMin(axis));
	Vec3<double> axmax = modelToScreen(axes_.coordMax(axis));
// 	axmin.print();
// 	axmax.print();

	// Calculate vectors between axis minimum and mouse position (AM) and axis maximum (AB)
	Vec3<double> ab(axmax.x - axmin.x, axmax.y - axmin.y, 0.0);
	Vec3<double> am(x - axmin.x, y - axmin.y, 0.0);
	Vec3<double> amNorm = am, abNorm = ab;
	double ratio = am.magnitude() / ab.magnitude();
	abNorm.normalise();
	amNorm.normalise();
// 	double angle = acos(abNorm.dp(amNorm));
//	printf("Angle = %f, %f\n", angle, angle * DEGRAD);

	// Calculate slice axis value - no need to account for inverted axes here, since this is accounted for in the vectors axmin and axmax
	double axisValue;
	if (axes_.logarithmic(axis)) axisValue = pow(10, abNorm.dp(amNorm)*ratio * (log10(axes_.max(axis)) - log10(axes_.min(axis))) + log10(axes_.min(axis)));
	else axisValue = abNorm.dp(amNorm)*ratio * (axes_.max(axis) - axes_.min(axis)) + axes_.min(axis);
//	printf("slicevalue = %f (%f)\n", axisValue, abNorm.dp(amNorm)*ratio);

	// Clamp value to data range
	if (clamp)
	{
		if (axisValue < axes_.min(axis)) axisValue = axes_.min(axis);
		else if (axisValue > axes_.max(axis)) axisValue = axes_.max(axis);
	// 	printf("ACMAG = %f, X = %f\n", ratio, axisValue);
	}

	return axisValue;
}

// Recalculate current view parameters (e.g. for 2D, autoStretched 3D etc.)
void View::recalculateView(bool force)
{
	// Check viewport size to try and avoid nan errors
	if ((viewportMatrix_[2] == 0) || (viewportMatrix_[3] == 0)) return;

	// If the view is neither flat nor autoStretched, there is nothing to do here...
	if (viewType_ == View::NormalView) return;

	// If we are already up-to-date (w.r.t. the associated axes) then we can also return now
	bool upToDate = true;
	if (force) upToDate = false;
	else if (viewAxesUsedAt_ != axes().axesVersion()) upToDate = false;
	else if (viewViewportUsedAt_ != viewportVersion_) upToDate = false;

	if (upToDate) return;

	int axis;

	// Calculate ourselves a 'standard' projection matrix
	if (viewType_ == View::AutoStretchedView) projectionMatrix_ = calculateProjectionMatrix(hasPerspective_, viewTranslation_.z);
	else projectionMatrix_ = calculateProjectionMatrix(false, zOffset_);

	// Create a temporary, orthographic projection matrix
	Matrix4 tempProjection = calculateProjectionMatrix(false, zOffset_);

	/*
	 * To begin, set the stretch factors to our best first estimate, dividing our width by the range of the axes
	 * Doing this first will allow us to get much better values for the pixel overlaps we need later on
	 */

	// -- Project a point one unit each along X and Y and subtract off the viewport centre coordinate in order to get literal 'pixels per unit' for (screen) X and Y
	Vec3<double> unit = modelToScreen(Vec3<double>(1.0, 1.0, 0.0), tempProjection, Matrix4());
	unit.x -= viewportMatrix_[0] + viewportMatrix_[2]/2.0;
	unit.y -= viewportMatrix_[1] + viewportMatrix_[3]/2.0;
	unit.z = unit.y;

	// Get axis min/max, accounting for logarithmic axes
	Vec3<double> axisMin, axisMax;
	for (axis=0; axis<3; ++axis)
	{
		axisMin[axis] = axes_.logarithmic(axis) ? log10(axes_.min(axis)) : axes_.min(axis);
		axisMax[axis] = axes_.logarithmic(axis) ? log10(axes_.max(axis)) : axes_.max(axis);
	}

	// Decide how we will set stretch factors for each axis (initially set to standard xyy)
	int axisX = 0, axisY = 1;
	Vec3<int> axisDir(0,1,1);
	if (viewType_ == View::FlatXZView) axisY = 2;
	else if (viewType_ == View::FlatZYView)
	{
		axisDir.set(1,1,0);
		axisX = 2;
	}

	// Set axis stretch factors to fill available pixel width/height
	for (axis=0; axis<3; ++axis)
	{
		axes_.setStretch(axis, viewportMatrix_[axisDir[axis]+2] / (unit[axisDir[axis]] * (axes_.realRange(axis))));
		if (!std::isnormal(axes_.stretch(axis))) axes_.setStretch(axis, 1.0);
	}

	const double margin = 10.0;
	Matrix4 viewMat, B, viewMatrixInverse;
	double tempMin, tempMax;
	Vec3<double> coordMin[3], coordMax[3], labelMin, labelMax, a, b, globalMin, globalMax;

	// Iterate for a few cycles
	for (int cycle = 0; cycle < 5; ++cycle)
	{
		// We will now calculate more accurate stretch factors to apply to the X and Y axes.
		// Project the axis limits on to the screen using the relevant viewmatrix + coordinate centre translation
		viewMat.createTranslation(-axes().coordCentre());
		if (viewType_ == View::FlatXZView) viewMat.applyPreRotationX(90.0);
		else if (viewType_ == View::FlatZYView) viewMat.applyPreRotationY(-90.0);

		// Calculate view rotation matrix inverse
		viewMatrixInverse = viewMat;
		viewMatrixInverse.removeTranslationAndScaling();
		viewMatrixInverse.invert();

		// Calculate coordinates and global extremes over axes and labels
		globalMin.set(1e9,1e9,1e9);
		globalMax = -globalMin;
		labelMin = globalMin;
		labelMax = -labelMin;
		for (axis=0; axis<3; ++axis)
		{
			// Skip third (i.e. 'z') axis
			if ((axis != axisX) && (axis != axisY)) continue;

			// Project axis min/max coordinates onto screen
			a = modelToScreen(axes_.coordMin(axis), tempProjection, viewMat);
			b = modelToScreen(axes_.coordMax(axis), tempProjection, viewMat);
			coordMin[axis].set(std::min(a.x,b.x), std::min(a.y,b.y),  std::min(a.z,b.z)); 
			coordMax[axis].set(std::max(a.x,b.x), std::max(a.y,b.y),  std::max(a.z,b.z)); 

			// Update global min/max
			for (int n=0; n<3; ++n)
			{
				if (coordMin[axis][n] < globalMin[n]) globalMin[n] = coordMin[axis][n];
				if (coordMax[axis][n] > globalMax[n]) globalMax[n] = coordMax[axis][n];
			}

			// Get bounding cuboid for axis text
			Cuboid cuboid;
			cuboid = axes_.labelPrimitive(axis).boundingCuboid(fontInstance_, viewMatrixInverse, textZScale_);
			cuboid = axes_.titlePrimitive(axis).boundingCuboid(fontInstance_, viewMatrixInverse, textZScale_, cuboid);

			// Project cuboid extremes and store projected coordinates
			a = modelToScreen(cuboid.minima(), tempProjection, viewMat);
			b = modelToScreen(cuboid.maxima(), tempProjection, viewMat);

			// Update global and label min/max
			for (int n=0; n<3; ++n)
			{
				tempMin = std::min(a[n],b[n]);
				tempMax = std::max(a[n],b[n]);
				if (tempMin < globalMin[n]) globalMin[n] = tempMin;
				if (tempMax > globalMax[n]) globalMax[n] = tempMax;
				if (tempMin < labelMin[n]) labelMin[n] = tempMin;
				if (tempMax > labelMax[n]) labelMax[n] = tempMax;
			}
		}

		// Now have screen coordinates of all necessary objects (axes and labels)
		// Calculate total width and height of objects as they are arranged
		double globalWidth = globalMax.x - globalMin.x;
		double globalHeight = globalMax.y - globalMin.y;
		axisPixelLength_[axisX] = coordMax[axisX].x - coordMin[axisX].x;
		axisPixelLength_[axisY] = coordMax[axisY].y - coordMin[axisY].y;
// 		double labelWidth = labelMax.x - labelMin.x;
// 		double labelHeight = labelMax.y - labelMin.y;

		// Now, we know the width and height of the axis on its own, and the extra 'added' by the labels, so work out how much we need to shrink the axis by
		double deltaWidth = (viewportMatrix_[2] - 2*margin) - globalWidth;
		double deltaHeight = (viewportMatrix_[3] - 2*margin) - globalHeight;

		// So, need to lose deltaWidth and deltaHeight pixels from the axis exents - we'll do this by scaling the stretchfactor
		double factor = axisPixelLength_[axisX] / (axisPixelLength_[axisX] - deltaWidth);
		axes_.setStretch(axisX, axes_.stretch(axisX) * factor);
		factor = axisPixelLength_[axisY] / (axisPixelLength_[axisY] - deltaHeight);
		axes_.setStretch(axisY, axes_.stretch(axisY) * factor);
	}
	
	// Set new rotation matrix and translation vector (if not AutoStretchedView)
	if (viewType_ > View::AutoStretchedView)
	{
		viewRotation_.setIdentity();
		if (viewType_ == View::FlatXZView) viewRotation_.applyPreRotationX(90.0);
		else if (viewType_ == View::FlatZYView) viewRotation_.applyPreRotationY(-90.0);

		// Set a translation in order to set the margins as requested
		// The viewTranslation_ is applied in 'normal' coordinate axes, so viewTranslation_.x is along screen x etc.
		viewTranslation_.zero();
		viewTranslation_[0] = (margin - (globalMin.x - viewportMatrix_[0])) / unit.x;
		viewTranslation_[1] = (margin - (globalMin.y - viewportMatrix_[1])) / unit.y;
	}

	// Recalculate font scaling
	calculateFontScaling();

	// Store new versions of view
	viewAxesUsedAt_ = axes().axesVersion();
	viewViewportUsedAt_ = viewportVersion_;
}

// Reset view
void View::resetViewMatrix()
{
	// Reset view matrix only if a normal or autostretched view
	if (viewType_ <= View::AutoStretchedView)
	{
		viewRotation_.setIdentity();
		viewTranslation_.set(0.0, 0.0, 0.0);

		// If a Normal view, reset the stretch factors
// 		if (viewType_ == View::NormalView)
// 		{
// 			axes_.setStretch(0, 1.0);
// 			axes_.setStretch(1, 1.0);
// 			axes_.setStretch(2, 1.0);
// 		}

		// Calculate zoom to show all data
		viewTranslation_.z = calculateRequiredZoom(axes_.realRange(0)*0.5*axes_.stretch(0), axes_.realRange(1)*0.5*axes_.stretch(1), 0.9);

		// Recalculate projection matrix
		projectionMatrix_ = calculateProjectionMatrix(hasPerspective_, viewTranslation_.z);
	}
	else
	{
		// Recalculate projection matrix
		projectionMatrix_ = calculateProjectionMatrix(false, zOffset_);
	}

	calculateFontScaling();
}

// Set display limits to show all available data
void View::showAllData(double xFrac, double yFrac, double zFrac)
{
	updateAxisLimits(xFrac, yFrac, zFrac);

	// Set axes limits to the extreme data values, making sure we have a sensible (i.e. non-zero range)
	for (int axis = 0; axis < 3; ++axis)
	{
		// Grab axis limits and make sure the limits are sensible, expanding only if the range is zero
		double limitMin = axes_.limitMin(axis);
		double limitMax = axes_.limitMax(axis);
		Axes::ensureSensibleRange(limitMin, limitMax, true);

		axes_.setRange(axis, limitMin, limitMax);
// 		axes_.setToLimit(axis, true);
// 		axes_.setToLimit(axis, false);
	}
}

// Zoom to specified region
void View::zoomTo(Vec3<double> limit1, Vec3<double> limit2)
{
	// The provided limits should be in local axis coordinates, and may not be in min/max order
	Vec3<double> newMin(std::min(limit1.x, limit2.x), std::min(limit1.y, limit2.y), std::min(limit1.z, limit2.z));
	Vec3<double> newMax(std::max(limit1.x, limit2.x), std::max(limit1.y, limit2.y), std::max(limit1.z, limit2.z));

	// Check the view type and set relevant coordinates
	if (isFlatView())
	{
		int axisX = 0, axisY = 1;
		if (viewType_ == View::FlatXZView) axisY = 2;
		else if (viewType_ == View::FlatZYView) axisX = 2;
		axes_.setRange(axisX, newMin.get(axisX), newMax.get(axisX));
		axes_.setRange(axisY, newMin.get(axisY), newMax.get(axisY));
	}
	else
	{
		// 3D view, so set all three axes
		for (int axis = 0; axis < 3; ++axis)
		{
			axes_.setMin(axis, newMin.get(axis));
			axes_.setMax(axis, newMax.get(axis));
		}
	}
}

// Set auto-follow type in effect
void View::setAutoFollowType(AutoFollowType aft)
{
	autoFollowType_ = aft;
}

// Cycle auto-follow type in effect
void View::cycleAutoFollowType()
{
	autoFollowType_ = (View::AutoFollowType) ((autoFollowType_+1)%nAutoFollowTypes);
}

// Auto-follow type in effect
View::AutoFollowType View::autoFollowType() const
{
	return autoFollowType_;
}

// Set axis limits based on current auto-follow type
void View::autoFollowData()
{
	if (autoFollowType_ == View::NoAutoFollow) return;
	else if (autoFollowType_ == View::AllAutoFollow) showAllData();
	else if (autoFollowType_ == View::XFollow)
	{
		// This is the window x 'width' we will follow
		const double width = 20.0;

		// Establish min / max limits on x axis
		double xMin = transformedDataMinima().x;
		double xMax = transformedDataMaxima().x;
		if ((xMax - xMin) > width) xMin = xMax - width;

		// Get y range over the horizontal range we've established
		bool first = true;
		double yMin, yMax, yMinTest, yMaxTest;
		for (Renderable* rend = renderables_.first(); rend != NULL; rend = rend->next)
		{
			// Get y limits for the this data
			rend->yRangeOverX(xMin, xMax, yMinTest, yMaxTest);
			if (first)
			{
				yMin = yMinTest;
				yMax = yMaxTest;
				first = false;
			}
			else
			{
				if (yMinTest < yMin) yMin = yMinTest;
				if (yMaxTest > yMax) yMax = yMaxTest;
			}
		}

		// If we didn't have any data to work with, return the current axis limits
		if (first)
		{
			yMax = axes_.limitMax(1);
			yMin = axes_.limitMin(1);
		}
		else
		{
			// Increase the range by 5% either way
			double yDelta = (yMax - yMin)*0.05;
			yMax += yDelta;
			yMin -= yDelta;
		}
	
		// Ensure a sensible range for the axes
		Axes::ensureSensibleRange(xMin, xMax, true);
		Axes::ensureSensibleRange(yMin, yMax, false);

		// Set new limits
		axes_.setRange(0, xMin, xMax);
		axes_.setRange(1, yMin, yMax);
	}
}

/*
 * Axes
 */

// Return absolute minimum transformed values over all displayed data
Vec3<double> View::transformedDataMinima()
{
	// If there are no Renderables, just return the current limits
	if (renderables_.nItems() == 0) return Vec3<double>(axes_.limitMin(0), axes_.limitMin(1), axes_.limitMin(2));

	int nCounted = 0;
	Vec3<double> v, minima;
	for (Renderable* rend = renderables_.first(); rend != NULL; rend = rend->next)
	{
		if (nCounted == 0) minima = rend->transformMin();
		else
		{
			v = rend->transformMin();
			if (v.x < minima.x) minima.x = v.x;
			if (v.y < minima.y) minima.y = v.y;
			if (v.z < minima.z) minima.z = v.z;
		}
		++nCounted;
	}

	return minima;
}

// Return absolute maximum transformed values over all associated collections
Vec3<double> View::transformedDataMaxima()
{
	// If there are no Renderables, just return the current limits
	if (renderables_.nItems() == 0) return Vec3<double>(axes_.limitMax(0), axes_.limitMax(1), axes_.limitMax(2));

	int nCounted = 0;
	Vec3<double> v, maxima;
	for (Renderable* rend = renderables_.first(); rend != NULL; rend = rend->next)
	{
		if (nCounted == 0) maxima = rend->transformMax();
		else
		{
			v = rend->transformMax();
			if (v.x > maxima.x) maxima.x = v.x;
			if (v.y > maxima.y) maxima.y = v.y;
			if (v.z > maxima.z) maxima.z = v.z;
		}
		++nCounted;
	}

	return maxima;
}

// Return absolute minimum positive transformed values over all associated collections
Vec3<double> View::transformedDataPositiveMinima()
{
	int nCounted = 0;
	Vec3<double> v, minima;
	for (Renderable* rend = renderables_.first(); rend != NULL; rend = rend->next)
	{
		if (nCounted == 0) minima = rend->transformMinPositive();
		else
		{
			v = rend->transformMinPositive();
			if (v.x < minima.x) minima.x = v.x;
			if (v.y < minima.y) minima.y = v.y;
			if (v.z < minima.z) minima.z = v.z;
		}
		++nCounted;
	}

	// If we didn't have any data to work with, return the current axis limits
	if (nCounted == 0) return Vec3<double>(axes_.limitMin(0), axes_.limitMin(1), axes_.limitMin(2));
	else return minima;
}

// Return absolute maximum positive transformed values over all associated collections
Vec3<double> View::transformedDataPositiveMaxima()
{
	int nCounted = 0;
	Vec3<double> v, maxima;
	for (Renderable* rend = renderables_.first(); rend != NULL; rend = rend->next)
	{
		if (nCounted == 0) maxima = rend->transformMaxPositive();
		else
		{
			v = rend->transformMaxPositive();
			if (v.x < maxima.x) maxima.x = v.x;
			if (v.y < maxima.y) maxima.y = v.y;
			if (v.z < maxima.z) maxima.z = v.z;
		}
		++nCounted;
	}

	// If we didn't have any data to work with, return the current axis limits
	if (nCounted == 0) return Vec3<double>(axes_.limitMax(0), axes_.limitMax(1), axes_.limitMax(2));
	else return maxima;
}

// Update axis limits to represent data extent of associated collections
void View::updateAxisLimits(double xFrac, double yFrac, double zFrac)
{
	// Get transformed data extents
	Vec3<double> dataMin = transformedDataMinima();
	Vec3<double> dataMax = transformedDataMaxima();
	Vec3<double> dataMinPositive = transformedDataPositiveMinima();
	Vec3<double> dataMaxPositive = transformedDataPositiveMaxima();

	// The fractional values we've been passed tell us how much of the 'data' to include in the limits
	// A positive value, 0.0 < f < 1.0, tells us to shrink the maximum limit.
	// A negative value, -1.0 < f < 0.0, tells us to increase the minimum limit

	// Store the fractional values in a temporary Vector to make things easier
	Vec3<double> fractions(xFrac, yFrac, zFrac);

	// Loop over axes
	for (int axis = 0; axis < 3; ++axis)
	{
		// Adjust limits
		if (fractions[axis] > 0.0)
		{
			dataMax[axis] = dataMin[axis] + (dataMax[axis] - dataMin[axis])*fractions[axis];
			dataMaxPositive[axis] = dataMinPositive[axis] + (dataMaxPositive[axis] - dataMinPositive[axis])*fractions[axis];
		}
		else
		{
			dataMin[axis] = dataMax[axis] - (dataMin[axis] - dataMax[axis])*fractions[axis];
			dataMinPositive[axis] = dataMaxPositive[axis] - (dataMinPositive[axis] - dataMaxPositive[axis])*fractions[axis];
		}

		// Set allowable range to avoid negative numbers if axis is now logarithmic
		if (axes_.logarithmic(axis))
		{
			axes_.setLimitMin(axis, dataMinPositive[axis]);
			axes_.setLimitMax(axis, dataMaxPositive[axis]);
		}
		else
		{
			axes_.setLimitMin(axis, dataMin[axis]);
			axes_.setLimitMax(axis, dataMax[axis]);
		}
	}

	recalculateView();
}

// Shift flat view axis limits by specified amounts
void View::shiftFlatAxisLimits(double deltaH, double deltaV)
{
	// If this is not a flat view, return now
	if (!isFlatView()) return;

	// Set indices for target axes
	int axes[2];
	axes[0] = 0;
	axes[1] = 1;
	if (viewType_ == View::FlatXZView) axes[1] = 2;
	else if (viewType_ == View::FlatZYView)
	{
		axes[0] = 1;
		axes[1] = 2;
	}

	// Loop over axis indices, and set new limits
	double deltas[2];
	deltas[0] = deltaH;
	deltas[1] = deltaV;
	for (int n=0; n<2; ++n)
	{
		double range = axes_.realRange(axes[n]);
		bool logarithmic = axes_.logarithmic(axes[n]);
		double ppUnit = axisPixelLength_[axes[n]] / range;

		// Flip sign of delta if the axis is inverted
		if (axes_.inverted(axes[n])) deltas[n] = -deltas[n];

		// Get adjusted min/max values
		double newMin, newMax;
		if (logarithmic)
		{
			newMin = pow(10, axes_.realMin(axes[n]) - deltas[n]/ppUnit);
			newMax = pow(10, axes_.realMax(axes[n]) - deltas[n]/ppUnit);
		}
		else
		{
			newMin = axes_.min(axes[n]) - deltas[n]/ppUnit;
			newMax = axes_.max(axes[n]) - deltas[n]/ppUnit;
		}

		axes_.setMin(axes[n], newMin);
		axes_.setMax(axes[n], newMax);
	}
}

// Shift flat view axis limits by specified fractional amounts
void View::shiftFlatAxisLimitsFractional(double fracH, double fracV)
{
	// Set indices for target axes
	int axes[2];
	axes[0] = 0;
	axes[1] = 1;
	if (viewType_ == View::FlatXZView) axes[1] = 2;
	else if (viewType_ == View::FlatZYView)
	{
		axes[0] = 1;
		axes[1] = 2;
	}

	// Determine deltas based on fractional amounts specified
	double deltaH = (axes_.max(axes[0]) - axes_.min(axes[0])) * fracH;
	double deltaV = (axes_.max(axes[1]) - axes_.min(axes[1])) * fracV;

	shiftFlatAxisLimits(deltaH, deltaV);
}

// Return axes for the view
Axes& View::axes()
{
	return axes_;
}

/*
 * Style
 */

// Calculate font scaling factor
void View::calculateFontScaling()
{
	// Calculate text scaling factor
	Vec3<double> translate(0.0, 0.0, zOffset_);
	if (hasPerspective_) translate.z = 0.5;
	Vec3<double> unit = modelToScreen(Vec3<double>(0.0, 1.0, viewTranslation_.z), projectionMatrix_, Matrix4(), translate);
	unit.y -= viewportMatrix_[1] + viewportMatrix_[3]*0.5;
	textZScale_ = unit.y;
}

// Set current bounding box type
void View::setBoundingBox(View::BoundingBox type)
{
	boundingBox_ = type;

	// Bounding boxes are generated as part of the axes primitives, so need to regenerate them
	// TODO regenerateAxes_ = true;
}

// Return current bounding box type
View::BoundingBox View::boundingBox()
{
	return boundingBox_;
}

// Set y intercept for plane bounding box
void View::setBoundingBoxPlaneY(double value)
{
	boundingBoxPlaneY_ = value;

	// Bounding boxes are generated as part of the axes primitives, so need to regenerate them
	// TODO 0regenerateAxes_ = true;
}

// Return y intercept for plane bounding box
double View::boundingBoxPlaneY()
{
	return boundingBoxPlaneY_;
}

// Set font point size for axis value labels
void View::setLabelPointSize(double value)
{
	labelPointSize_ = value;

	axes_.setPrimitivesInvalid();
}

// Return font point size for axis value labels
double View::labelPointSize()
{
	return labelPointSize_;
}

// Return font point size for titles
void View::setTitlePointSize(double value)
{
	titlePointSize_ = value;

	axes_.setPrimitivesInvalid();
}

// Return font point size for titles
double View::titlePointSize()
{
	return titlePointSize_;
}

// Return text z scaling factor
double View::textZScale()
{
	return textZScale_;
}

// Set whether axis text labels are drawn flat in 3D views
void View::setFlatLabelsIn3D(bool flat)
{
	flatLabelsIn3D_ = flat;

	axes_.setPrimitivesInvalid();
}

// Whether axis text labels are drawn flat in 3D views
bool View::flatLabelsIn3D()
{
	return flatLabelsIn3D_;
}

/*
 * Interaction
 */

// Return axis title at specified coordinates (if any)
int View::axisTitleAt(int screenX, int screenY)
{
	// Get view matrix inverse and FontInstance
	Matrix4 viewRotInverse = viewRotationInverse();

	Vec3<double> labelMin, labelMax;
	for (int axis=0; axis<3; ++axis)
	{
		// Reset bounding box extreme values
		labelMin.set(1e9,1e9,1e9);
		labelMax = -labelMin;

		// Calculate orthogonal bounding cuboid for this axis title (local coordinates)
		Cuboid cuboid = axes_.titlePrimitive(axis).boundingCuboid(fontInstance_, viewRotInverse, textZScale_);

		// Determine whether the screen point specified is within the projected cuboid
		if (cuboid.isPointWithinProjection(screenX, screenY, viewMatrix(), projectionMatrix_, viewportMatrix_)) return axis;
	}
	return -1;
}

/*
 * GL
 */

// Create bounding box
void View::createBoundingBox(int type, double planeY)
{
	boundingBoxPrimitive_.forgetAll();
	
	if (type == 0) return;
	else if (type == 1)
	{
		// Plane in XZ, spanning data range   // TODO
// 		boundingBoxPrimitive_.plotLine(Vec3<double>(axisCoordMin_[0].x, planeY, axisCoordMin_[2].z), Vec3<double>(axisCoordMin_[0].x, planeY, axisCoordMax_[2].z));
// 		boundingBoxPrimitive_.plotLine(Vec3<double>(axisCoordMin_[0].x, planeY, axisCoordMax_[2].z), Vec3<double>(axisCoordMax_[0].x, planeY, axisCoordMax_[2].z));
// 		boundingBoxPrimitive_.plotLine(Vec3<double>(axisCoordMax_[0].x, planeY, axisCoordMax_[2].z), Vec3<double>(axisCoordMax_[0].x, planeY, axisCoordMin_[2].z));
// 		boundingBoxPrimitive_.plotLine(Vec3<double>(axisCoordMax_[0].x, planeY, axisCoordMin_[2].z), Vec3<double>(axisCoordMin_[0].x, planeY, axisCoordMin_[2].z));
	}
}


// Update interaction primitive
void View::updateInteractionPrimitive(int axis)
{
	const int nPoints = 16;
	
	interactionPrimitive_.initialise(GL_TRIANGLES, false);
	interactionPrimitive_.forgetAll();
	interactionBoxPrimitive_.initialise(GL_LINES, false);
	interactionBoxPrimitive_.forgetAll();

	if (axis == -1) return;

	// Grab axes, and knock out values in the supplied vectors which correspond to the activated axis
	Vec3<double> axisMinA, axisMinB, axisMaxA, axisMaxB;
	axisMinA[(axis+1)%3] = axes_.coordMin((axis+1)%3)[(axis+1)%3];
	axisMaxA[(axis+1)%3] = axes_.coordMax((axis+1)%3)[(axis+1)%3];
	axisMinB[(axis+2)%3] = axes_.coordMin((axis+2)%3)[(axis+2)%3];
	axisMaxB[(axis+2)%3] = axes_.coordMax((axis+2)%3)[(axis+2)%3];
	axisMinA[axis] = 0.0;
	axisMaxA[axis] = 0.0;
	axisMinB[axis] = 0.0;
	axisMaxB[axis] = 0.0;

	// Create 'bounding box' for slice primitive
	Vec3<double> normal(0.0, 0.0, 1.0);
	
	interactionBoxPrimitive_.defineVertex(axisMinA + axisMinB, normal);
	interactionBoxPrimitive_.defineVertex(axisMinA + axisMaxB, normal);
	interactionBoxPrimitive_.defineVertex(axisMaxA + axisMaxB, normal);
	interactionBoxPrimitive_.defineVertex(axisMaxA + axisMinB, normal);
	interactionBoxPrimitive_.defineIndices(0,1);
	interactionBoxPrimitive_.defineIndices(1,2);
	interactionBoxPrimitive_.defineIndices(2,3);
	interactionBoxPrimitive_.defineIndices(3,0);

	// Work out deltas for each direction
	Vec3<double> deltaA, deltaB, pos;
	deltaA = (axisMaxA - axisMinA) / nPoints;
	deltaB = (axisMaxB - axisMinB) / nPoints;

	// Set normal
	normal.zero();
	normal[axis] = 1.0;

	// Construct plane
	GLuint a, b, c, d;
	for (int n=0; n<nPoints; ++n)
	{
		pos = axisMinA + axisMinB + deltaA*n;
		for (int m=0; m<nPoints; ++m)
		{
			a = interactionPrimitive_.defineVertex(pos, normal);
			b = interactionPrimitive_.defineVertex(pos + deltaA, normal);
			c = interactionPrimitive_.defineVertex(pos + deltaA + deltaB, normal);
			d = interactionPrimitive_.defineVertex(pos + deltaB, normal);
			interactionPrimitive_.defineIndices(a, b, c);
			interactionPrimitive_.defineIndices(c, d, a);
			pos += deltaB;
		}
	}
}

// Return interaction primitive
Primitive& View::interactionPrimitive()
{
	return interactionPrimitive_;
}

// Return interaction box primitive
Primitive& View::interactionBoxPrimitive()
{
	return interactionBoxPrimitive_;
}

// Return bounding box primitive
Primitive& View::boundingBoxPrimitive()
{
	return boundingBoxPrimitive_;
}