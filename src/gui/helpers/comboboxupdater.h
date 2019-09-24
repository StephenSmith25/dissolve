/*
	*** QComboBox Updater
	*** src/gui/helpers/comboboxupdater.h
	Copyright T. Youngs 2012-2019

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

#include "templates/variantpointer.h"
#include "templates/list.h"
#include <QComboBox>

#ifndef DISSOLVE_COMBOBOXUPDATER_H
#define DISSOLVE_COMBOBOXUPDATER_H

// ComboBoxUpdater - Constructor-only template class to update items in a QComboBox, preserving original items as much as possible
template <class I> class ComboBoxUpdater
{
	public:
	// Update QComboBox from supplied List, assuming that class I implements a name() function for the item
	ComboBoxUpdater(QComboBox* comboBox, const List<I>& data, const I* currentItem)
	{
		int currentIndex = 0;

		ListIterator<I> dataIterator(data);
		while (I* dataItem = dataIterator.iterate())
		{
			/*
			 * If there is an item already on this row, check it
			 * If it represents the current pointer data, just update it and move on.
			 * Otherwise, delete it and check again.
			 */
			while (currentIndex < comboBox->count())
			{
				I* oldData = VariantPointer<I>(comboBox->itemData(currentIndex, Qt::UserRole));
				if (oldData == dataItem)
				{
					// Data pointer matches - make sure the text is up to date
					comboBox->setItemText(currentIndex, dataItem->name());

					break;
				}
				else
				{
					// Data pointer does not match - remove the offending item
					comboBox->removeItem(currentIndex);
				}
			}

			// If the current row index is (now) out of range, add a new row to the list
			if (currentIndex == comboBox->count())
			{
				// Create new item
				comboBox->addItem(dataItem->name(), VariantPointer<I>(dataItem));
			}

			// Select this item if it is the current one
			if (currentItem == dataItem) comboBox->setCurrentIndex(currentIndex);

			++currentIndex;
		}

		// If there are still rows remaining in the widget, delete them now
		while (currentIndex < comboBox->count()) comboBox->removeItem(currentIndex);

		// If there is no valid current item, make sure this is reflected in the combobox
		if (currentItem == NULL) comboBox->setCurrentIndex(-1);
	}

	// Update QComboBox from supplied List, assuming that class I implements a name() function for the item
	ComboBoxUpdater(QComboBox* comboBox, const RefList<I>& data, const I* currentItem)
	{
		int currentIndex = 0;

		RefListIterator<I> dataIterator(data);
		while (I* dataItem = dataIterator.iterate())
		{
			/*
			 * If there is an item already on this row, check it
			 * If it represents the current pointer data, just update it and move on.
			 * Otherwise, delete it and check again.
			 */
			while (currentIndex < comboBox->count())
			{
				I* oldData = VariantPointer<I>(comboBox->itemData(currentIndex, Qt::UserRole));
				if (oldData == dataItem)
				{
					// Data pointer matches - make sure the text is up to date
					comboBox->setItemText(currentIndex, dataItem->name());

					break;
				}
				else
				{
					// Data pointer does not match - remove the offending item
					comboBox->removeItem(currentIndex);
				}
			}

			// If the current row index is (now) out of range, add a new row to the list
			if (currentIndex == comboBox->count())
			{
				// Create new item
				comboBox->addItem(dataItem->name(), VariantPointer<I>(dataItem));
			}

			// Select this item if it is the current one
			if (currentItem == dataItem) comboBox->setCurrentIndex(currentIndex);

			++currentIndex;
		}

		// If there are still rows remaining in the widget, delete them now
		while (currentIndex < comboBox->count()) comboBox->removeItem(currentIndex);

		// If there is no valid current item, make sure this is reflected in the combobox
		if (currentItem == NULL) comboBox->setCurrentIndex(-1);
	}
};

#endif