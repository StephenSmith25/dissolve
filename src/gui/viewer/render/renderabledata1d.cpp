/*
	*** Renderable - Data1D
	*** src/gui/viewer/render/renderabledata1d.cpp
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

#include "gui/viewer/render/renderabledata1d.h"
#include "gui/viewer/render/renderablegroupmanager.h"
#include "gui/viewer/render/view.h"
#include "base/lineparser.h"

// Constructor
RenderableData1D::RenderableData1D(const Data1D* source, const char* objectTag) : Renderable(Renderable::Data1DRenderable, objectTag), source_(source)
{
	// Set style defaults
	displayStyle_ = LinesStyle;

	// Create primitive
	dataPrimitive_ = createPrimitive();
}

// Destructor
RenderableData1D::~RenderableData1D()
{
}

/*
 * Data
 */

// Return whether a valid data source is available (attempting to set it if not)
bool RenderableData1D::validateDataSource()
{
	// If there is no valid source set, attempt to set it now...
	if (!source_) source_ = Data1D::findObject(objectTag_);

	return source_;
}

// Return version of data
int RenderableData1D::dataVersion() const
{
	return (source_ ? source_->version() : -99);
}

/*
 * Transform / Limits
 */

// Transform data according to current settings
void RenderableData1D::transformData()
{
	// If the transformed data are already up-to-date, no need to do anything
	if (transformDataVersion_ == dataVersion()) return;

	// Copy original data and transform now. We do this even if the transformers are disabled, since they may have previously been active
	if (!validateDataSource()) transformedData_.clear();
	else transformedData_ = *source_;
	Transformer::transform1D(transformedData_, transforms_[0], transforms_[1]);

	transformMin_ = 0.0;
	transformMax_ = 0.0;
	axisTransformMinPositive_ = 0.1;
	axisTransformMaxPositive_ = 0.0;
	
	// Set initial limits if we can
	if (transformedData_.nValues() > 0)
	{
		transformMin_.set(transformedData_.constXAxis().firstValue(), transformedData_.minValue(), 0.0);
		transformMax_.set(transformedData_.constXAxis().lastValue(), transformedData_.maxValue(), 0.0);
	}

	// Now determine minimum positive limits - loop over points in data, searching for first positive, non-zero value
	for (int n=0; n<transformedData_.nValues(); ++n)
	{
		// X
		if (transformedData_.constXAxis(n) > 0.0)
		{
			if (transformedData_.constXAxis(n) < axisTransformMinPositive_.x) axisTransformMinPositive_.x = transformedData_.constXAxis(n);
			if (transformedData_.constXAxis(n) > axisTransformMaxPositive_.x) axisTransformMaxPositive_.x = transformedData_.constXAxis(n);
		}
		// Y
		if (transformedData_.constValue(n) > 0.0)
		{
			if (transformedData_.constValue(n) < axisTransformMinPositive_.y) axisTransformMinPositive_.y = transformedData_.constValue(n);
			if (transformedData_.constValue(n) > axisTransformMaxPositive_.y) axisTransformMaxPositive_.y = transformedData_.constValue(n);
		}
	}
	
	axisTransformMinPositive_.z = 1.0;
	axisTransformMaxPositive_.z = 1.0;

	// Check maximum positive values (since all datapoints might have been negative
	if (axisTransformMaxPositive_.x < 0.0) axisTransformMaxPositive_.x = 1.0;
	if (axisTransformMaxPositive_.y < 0.0) axisTransformMaxPositive_.y = 1.0;
	if (axisTransformMaxPositive_.z < 0.0) axisTransformMaxPositive_.z = 1.0;

	// Update the transformed data 'version'
	transformDataVersion_ = dataVersion();
}

// Return reference to transformed data
const Data1D& RenderableData1D::transformedData()
{
	// Check that we have a valid source
	if (!validateDataSource()) return transformedData_;

	// If no transforms are enabled, just return the original data
	if ((!transforms_[0].enabled()) && (!transforms_[1].enabled())) return *source_;

	// Make sure the transformed data is up-to-date
	transformData();

	return transformedData_;
}

// Calculate min/max y value over specified x range (if possible in the underlying data)
bool RenderableData1D::yRangeOverX(double xMin, double xMax, double& yMin, double& yMax)
{
	// Ensure transformed data is up-to-date
	transformData();

	// Grab reference to transformed data
	const Data1D& data = transformedData();

	for (int n=0; n<data.nValues(); ++n)
	{
		if (data.constXAxis(n) < xMin) continue;
		else if (data.constXAxis(n) > xMax) break;

		if (n == 0)
		{
			yMin = data.constValue(n);
			yMax = yMin;
		}
		else
		{
			if (data.constValue(n) < yMin) yMin = data.constValue(n);
			else if (data.constValue(n) > yMax) yMax = data.constValue(n);
		}
	}

	return true;
}

/*
 * Rendering Primitives
 */

// Recreate necessary primitives / primitive assemblies for the data
void RenderableData1D::recreatePrimitives(const View& view, const ColourDefinition& colourDefinition)
{	
	dataPrimitive_->initialise(GL_LINE_STRIP, true);

	constructLineXY(transformedData().constXAxis(), transformedData().constValues(), dataPrimitive_, view.constAxes(), colourDefinition);
}

// Send primitives for rendering
const void RenderableData1D::sendToGL(const double pixelScaling)
{
	// Apply the LineStyle of the Renderable
	lineStyle_.sendToGL(pixelScaling);

	// Disable lighting
	glDisable(GL_LIGHTING);

	dataPrimitive_->sendToGL();

	// Reset LineStyle back to defaults
	LineStyle().sendToGL();
}

// Create line strip primitive
void RenderableData1D::constructLineXY(const Array<double>& displayAbscissa, const Array<double>& displayValues, Primitive* primitive, const Axes& axes, const ColourDefinition& colourDefinition, double zCoordinate)
{
	// Copy and transform abscissa values (still in data space) into axes coordinates
	Array<double> x = displayAbscissa;
	axes.transformX(x);
	int nX = x.nItems();
	if (nX < 2) return;

	// Get some values from axes so we can calculate colours properly
	bool yLogarithmic = axes.logarithmic(1);
	double yStretch = axes.stretch(1);

	// Temporary variables
	GLfloat colour[4];
	Vec3<double> nrm(0.0, 1.0, 0.0);

	// Create lines for slices
	int vertexA, vertexB;
	// Grab y and z values
	Array<double> y = displayValues;
	axes.transformY(y);
	double z = axes.transformZ(zCoordinate);

	// Set vertexA to -1 so we don't draw a line at n=0
	vertexA = -1;

	// Check for a single colour style in the colourDefinition - use optimised case in that eventuality
	if (colourDefinition.style() == ColourDefinition::SingleColourStyle)
	{
		// Get the single colour
		colourDefinition.colour(0.0, colour);

		// Loop over x values
		for (int n=0; n<nX; ++n)
		{
			vertexB = primitive->defineVertex(x.constAt(n), y.constAt(n), z, nrm, colour);

			// If both vertices are valid, plot a line
			if (vertexA != -1) primitive->defineIndices(vertexA, vertexB);

			vertexA = vertexB;
		}
	}
	else
	{
		// Loop over x values
		for (int n=0; n<nX; ++n)
		{
			colourDefinition.colour(yLogarithmic ? pow(10.0, y.constAt(n) / yStretch) : y.constAt(n) / yStretch, colour);
			vertexB = primitive->defineVertex(x.constAt(n), y.constAt(n), z, nrm, colour);

			// If both vertices are valid, plot a line
			if (vertexA != -1) primitive->defineIndices(vertexA, vertexB);

			vertexA = vertexB;
		}
	}
}

/*
 * Style
 */

// Return EnumOptions for Data1DDisplayStyle
EnumOptions<RenderableData1D::Data1DDisplayStyle> RenderableData1D::data1DDisplayStyles()
{
	static EnumOptionsList Style1DOptions = EnumOptionsList() <<
		EnumOption(RenderableData1D::LinesStyle,	"Lines");

	static EnumOptions<RenderableData1D::Data1DDisplayStyle> options("Data1DDisplayStyle", Style1DOptions);

	return options;
}

// Set display style for renderable
void RenderableData1D::setDisplayStyle(Data1DDisplayStyle displayStyle)
{
	displayStyle_ = displayStyle;

	++styleVersion_;
}

// Return display style for the renderable
RenderableData1D::Data1DDisplayStyle RenderableData1D::displayStyle() const
{
	return displayStyle_;
}

/*
 * Style I/O
 */

// Return enum option info for RenderableKeyword
EnumOptions<RenderableData1D::Data1DStyleKeyword> RenderableData1D::data1DStyleKeywords()
{
	static EnumOptionsList StyleKeywords = EnumOptionsList() <<
		EnumOption(RenderableData1D::DisplayKeyword,	"Display") <<
		EnumOption(RenderableData1D::EndStyleKeyword,	"EndStyle");

	static EnumOptions<RenderableData1D::Data1DStyleKeyword> options("Data1DStyleKeyword", StyleKeywords);

	return options;
}

// Write style information
bool RenderableData1D::writeStyleBlock(LineParser& parser, int indentLevel) const
{
	// Construct indent string
	char* indent = new char[indentLevel*2+1];
	for (int n=0; n<indentLevel*2; ++n) indent[n] = ' ';
	indent[indentLevel*2] = '\0';

	if (!parser.writeLineF("%s%s  %s\n", indent, data1DStyleKeywords().keyword(RenderableData1D::DisplayKeyword), data1DDisplayStyles().keyword(displayStyle_))) return false;

	return true;
}

// Read style information
bool RenderableData1D::readStyleBlock(LineParser& parser)
{
	while (!parser.eofOrBlank())
	{
		// Get line from file
		if (parser.getArgsDelim(LineParser::SemiColonLineBreaks) != LineParser::Success) return false;

		// Do we recognise this keyword and, if so, do we have the appropriate number of arguments?
		if (!data1DStyleKeywords().isValid(parser.argc(0))) return data1DStyleKeywords().errorAndPrintValid(parser.argc(0));
		Data1DStyleKeyword kwd = data1DStyleKeywords().enumeration(parser.argc(0));
		if (!data1DStyleKeywords().validNArgs(kwd, parser.nArgs()-1)) return false;

		// All OK, so process the keyword
		switch (kwd)
		{
			// Display style
			case (RenderableData1D::DisplayKeyword):
				if (!data1DDisplayStyles().isValid(parser.argc(1))) return data1DDisplayStyles().errorAndPrintValid(parser.argc(1));
				displayStyle_ = data1DDisplayStyles().enumeration(parser.argc(1));
				break;
			// Unrecognised Keyword
			default:
				Messenger::warn("Unrecognised display style keyword for RenderableData1D: %s\n", parser.argc(0));
				return false;
				break;
		}
	}

	return true;
}
