/*
	*** ModuleChart Module Block Widget - Functions
	*** src/gui/modulechartmoduleblock_funcs.cpp
	Copyright T. Youngs 2012-2018

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

#include "gui/modulechartmoduleblock.h"
#include "gui/gui.h"
#include "gui/keywordwidgets.h"
#include "main/dissolve.h"
#include "classes/configuration.h"
#include <QPainter>

// Constructor
ModuleChartModuleBlock::ModuleChartModuleBlock(QWidget* parent, DissolveWindow* dissolveWindow, ModuleReference* modRef) : QWidget(parent), ModuleChartBlock(dissolveWindow, dissolveWindow->dissolve())
{
	// Set up user interface
	ui.setupUi(this);

	setAutoFillBackground(true);
	ui.KeywordsControlFrame->setVisible(false);

	moduleReference_ = modRef;

	module_ = moduleReference_ ? moduleReference_->module() : NULL;

	initialiseWindow(module_);

	updateControls();
}

ModuleChartModuleBlock::~ModuleChartModuleBlock()
{
}

// Initialise window
void ModuleChartModuleBlock::initialiseWindow(Module* module)
{
	// Set information panel contents
	if (module)
	{
		CharString topText("%s (%s)", module->name(), module->uniqueName());
		ui.TopLabel->setText(topText.get());
		CharString bottomText("Runs @ %s", module->frequencyDetails(dissolve_.iteration()));
		ui.BottomLabel->setText(bottomText.get());
	}
	else
	{
		ui.TopLabel->setText("? (?) @ ?");
		ui.BottomLabel->setText("Runs @ ");
	}

	// Set up our keywords widget
	ui.KeywordsWidget->setUp(dissolveWindow_, module_);
}

/*
 * Module / Reference Data
 */

// Return reference for associated Module
ModuleReference* ModuleChartModuleBlock::moduleReference()
{
	return moduleReference_;
}

/*
 * QWidget Reimplementations
 */

// Paint event
void ModuleChartModuleBlock::paintEvent(QPaintEvent* event)
{
	if (!module_) return;

	QPainter painter(this);

	const int* colour = module_->colour();
	QColor blockColour(colour[0], colour[1], colour[2], 50);

	QLinearGradient linearGrad(QPointF(0, 0), QPointF(100, 50));
	linearGrad.setColorAt(0, blockColour);
	linearGrad.setColorAt(1, QColor(0,0,0,0));
	painter.fillRect(QRect(0, 0, width(), height()), linearGrad);
}

/*
 * Block Type
 */

// Return type of this block
ModuleChartBlock::ModuleChartBlockType ModuleChartModuleBlock::blockType()
{
	return ModuleChartBlock::ModuleBlockType;
}

/*
 * Widget Functions
 */

// Return underlying widget
QWidget* ModuleChartModuleBlock::widget()
{
	return this;
}

// Update controls within widget
void ModuleChartModuleBlock::updateControls()
{
	if (!module_) return;

	// Make sure tooltip on HeaderFrame is up-to-date
	CharString toolTip("Targets: ");
	RefListIterator<Configuration,bool> configIterator(module_->targetConfigurations());
	while (Configuration* cfg = configIterator.iterate())
	{
		if (configIterator.first()) toolTip.strcatf("%s", cfg->name());
		else toolTip.strcatf(", %s", cfg->name());
	}
	ui.HeaderFrame->setToolTip(toolTip.get());

	// Set button status
	ui.EnabledButton->setChecked(module_->enabled());

	// Update keywords
	ui.KeywordsWidget->updateControls();
}

// Disable sensitive controls, ready for main code to run
void ModuleChartModuleBlock::disableSensitiveControls()
{
	ui.KeywordsControlFrame->setEnabled(false);
	ui.RunButton->setEnabled(false);
	ui.EnabledButton->setEnabled(false);
	ui.RemoveButton->setEnabled(false);
}

// Enable sensitive controls, ready for main code to run
void ModuleChartModuleBlock::enableSensitiveControls()
{
	ui.KeywordsControlFrame->setEnabled(true);
	ui.RunButton->setEnabled(true);
	ui.EnabledButton->setEnabled(true);
	ui.RemoveButton->setEnabled(true);
}

void ModuleChartModuleBlock::on_ToggleKeywordsButton_clicked(bool checked)
{
	ui.KeywordsControlFrame->setVisible(checked);

	adjustSize();
	updateGeometry();

	emit(settingsToggled());
}

void ModuleChartModuleBlock::on_RemoveButton_clicked(bool checked)
{
	emit (removeModule(moduleReference_));
}

void ModuleChartModuleBlock::on_RunButton_clicked(bool checked)
{
	if (!module_) return;

	module_->executeMainProcessing(dissolve_, dissolve_.worldPool());

	updateControls();

	emit moduleRun();
}

void ModuleChartModuleBlock::on_EnabledButton_clicked(bool checked)
{
	if (refreshing_) return;

	if (!module_) return;

	module_->setEnabled(checked);

	dissolveWindow_->setModified();
}

/*
 * Geometry
 */

// Return width of underlying widget
int ModuleChartModuleBlock::widgetWidth() const
{
	return minimumSize().width();
}

// Return height of underlying widget
int ModuleChartModuleBlock::widgetHeight() const
{
	return minimumSize().height();
}

// Set underlying widget geometry
void ModuleChartModuleBlock::setWidgetGeometry(int left, int top, int width, int height)
{
	setGeometry(left, top, width, height);
}

// Return right-hand-side flow anchor point
QPoint ModuleChartModuleBlock::globalRightHandWidgetAnchor() const
{
	QPoint X = mapToGlobal(rect().topRight() + QPoint(1, 0));
	QPoint Y = mapToGlobal(ui.HeaderFrame->rect().topRight()) + QPoint(0, ui.HeaderFrame->height()/2);
	return QPoint(X.x(), Y.y());
}

// Return left-hand-side flow anchor point
QPoint ModuleChartModuleBlock::globalLeftHandWidgetAnchor() const
{
	QPoint X = mapToGlobal(rect().topLeft() + QPoint(-1, 0));
	QPoint Y = mapToGlobal(ui.HeaderFrame->rect().topLeft()) + QPoint(0, ui.HeaderFrame->height()/2);
	return QPoint(X.x(), Y.y());
}