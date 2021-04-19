// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2021 Team Dissolve and contributors

#pragma once

#include "gui/keywordwidgets/base.h"
#include "gui/keywordwidgets/dropdown.h"
#include "gui/keywordwidgets/ui_speciesreflist.h"
#include "keywords/speciesreflist.h"
#include <QWidget>

// Forward Declarations
class Species;

class SpeciesRefListKeywordWidget : public KeywordDropDown, public KeywordWidgetBase
{
    // All Qt declarations must include this macro
    Q_OBJECT

    public:
    SpeciesRefListKeywordWidget(QWidget *parent, KeywordBase *keyword, const CoreData &coreData);

    /*
     * Keyword
     */
    private:
    // Associated keyword
    SpeciesRefListKeyword *keyword_;

    /*
     * Widgets
     */
    private:
    // Main form declaration
    Ui::SpeciesRefListWidget ui_;

    private:
    // Selection list update function
    void updateSelectionRow(int row, Species *sp, bool createItem);

    private slots:
    // List item changed
    void itemChanged(QListWidgetItem *item);

    signals:
    // Keyword value changed
    void keywordValueChanged(int flags);

    /*
     * Update
     */
    public:
    // Update value displayed in widget
    void updateValue();
    // Update widget values data based on keyword data
    void updateWidgetValues(const CoreData &coreData);
    // Update keyword data based on widget values
    void updateKeywordData();
    // Update summary text
    void updateSummaryText();
};
