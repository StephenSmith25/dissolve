/*
	*** Guide for GuideWizard
	*** src/gui/guide.cpp
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

#include "gui/guide.h"
#include "base/sysfunc.h"
#include <QFile>
#include <QXmlStreamReader>

// Constructor / Destructor
Guide::Guide() : ListItem<Guide>()
{
	valid_ = false;
}

Guide::~Guide()
{
}

// Clear all data
void Guide::clear()
{
	valid_ = false;
	name_.clear();
	iconUrl_.clear();
	pages_.clear();
}

/*
 * Description
 */

// Return name of the guide
const char* Guide::name() const
{
	return name_.get();
}

// Return resource location for icon
const char* Guide::iconUrl() const
{
	return iconUrl_.get();
}

// Return whether an icon url has been set
bool Guide::hasIconUrl() const
{
	return (!iconUrl_.isEmpty());
}

// Return whether the guide is valid
bool Guide::isValid() const
{
	return valid_;
}

/*
 * Page Data
 */

// Return page index with supplied tag
int Guide::indexOfTag(const char* tag) const
{
	ListIterator<GuidePage> pageIterator(pages_);
	int count = 0;
	while (GuidePage* page = pageIterator.iterate())
	{
		if (DissolveSys::sameString(tag, page->tag())) return count;
		++count;
	}

	return -1;
}

// Return tag for start page
const char* Guide::startPageTag() const
{
	return startPageTag_.get();
}

// Return list of defined pages
const List<GuidePage>& Guide::pages() const
{
	return pages_;
}

/*
 * I/O
 */


// Load page data from specified resource
bool Guide::load(const char* resourceName)
{
	// Set up an XML stream reader on the supplied resource
	QFile guideFile(resourceName);
	if (!guideFile.open(QIODevice::ReadOnly | QIODevice::Text)) return Messenger::error("Couldn't open guide '%s'.\n", resourceName);
	QXmlStreamReader guideReader(&guideFile);

	// Check that we have a file with the correct root node
	if (!guideReader.readNextStartElement()) return Messenger::error("Failed to do initial read from guide xml.\n");
	if (guideReader.name() != "guide") return Messenger::error("Guide file has wrong root node type.\n");

	// Now loop over root node elements
	while (guideReader.readNextStartElement())
	{
		// Check the name of the root element
		QString token = guideReader.name().toString();

		if (token == "name") name_ = qPrintable(guideReader.readElementText());
		else if (token == "icon") iconUrl_= qPrintable(guideReader.readElementText());
		else if (token == "start") startPageTag_ = qPrintable(guideReader.readElementText());
		else if (token == "pages")
		{
			// Start of the pages set
			while (guideReader.readNextStartElement())
			{
				// Check that this is a <page>...
				if (guideReader.name() != "page")
				{
					Messenger::error("Encountered unrecognised token '%s' when we expected a <page>.\n", qPrintable(guideReader.name().toString()));
					guideReader.skipCurrentElement();
					continue;
				}

				// Create a new GuidePage object
				GuidePage* page = pages_.add();

				// Process the page's content
				while (guideReader.readNextStartElement())
				{
					QString pageToken = guideReader.name().toString();

					if (pageToken == "title") page->setTitle(qPrintable(guideReader.readElementText()));
					else if (pageToken == "tag") page->setTag(qPrintable(guideReader.readElementText()));
					else if (pageToken == "next") page->setNextPageTag(qPrintable(guideReader.readElementText()));
					else if (pageToken == "content") page->setRichTextContent(qPrintable(guideReader.readElementText()));
					else if (pageToken == "highlight")
					{
						GuidePageHighlight* highlight = page->addHighlight();
						int r = 0, g = 0, b = 0, a = 255;
						while (guideReader.readNextStartElement())
						{
							QString name = guideReader.name().toString();

							if (name == "widget") highlight->setWidgetName(qPrintable(guideReader.readElementText()));
							else if (name == "r") r = guideReader.readElementText().toInt();
							else if (name == "g") g = guideReader.readElementText().toInt();
							else if (name == "b") b = guideReader.readElementText().toInt();
							else if (name == "a") a = guideReader.readElementText().toInt();
						}
						highlight->setColour(r, g, b, a);
					}
					else
					{
						Messenger::error("Unrecognised token '%s' found in page definition.\n", qPrintable(pageToken));
						return false;
					}
				}

				Messenger::printVerbose("Found page '%s'\n", page->tag());
			}
		}
		else
		{
			Messenger::error("Unrecognised token '%s' found in guide definition.\n", qPrintable(token));
			return false;
		}
	}

	return true;
}
