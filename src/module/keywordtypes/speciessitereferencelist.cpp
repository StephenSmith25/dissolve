/*
	*** Module Keyword - SpeciesSite Reference List
	*** src/modules/keywordtypes/speciessitereferencelist.cpp
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

#include "module/keywordtypes/speciessitereferencelist.h"
#include "classes/configuration.h"
#include "classes/species.h"
#include "classes/coredata.h"
#include "base/lineparser.h"

// Constructor
SpeciesSiteReferenceListModuleKeyword::SpeciesSiteReferenceListModuleKeyword(RefList<SpeciesSite>& references) : ModuleKeywordData< RefList<SpeciesSite>& >(ModuleKeywordData::SpeciesSiteReferenceListData, references)
{
}

// Destructor
SpeciesSiteReferenceListModuleKeyword::~SpeciesSiteReferenceListModuleKeyword()
{
}

/*
 * Arguments
 */

// Return minimum number of arguments accepted
int SpeciesSiteReferenceListModuleKeyword::minArguments()
{
	return 2;
}

// Return maximum number of arguments accepted
int SpeciesSiteReferenceListModuleKeyword::maxArguments()
{
	return 99;
}

// Parse arguments from supplied LineParser, starting at given argument offset, utilising specified ProcessPool if required
bool SpeciesSiteReferenceListModuleKeyword::read(LineParser& parser, int startArg, const CoreData& coreData, ProcessPool& procPool)
{
	// Loop over arguments
	for (int n=startArg; n<parser.nArgs()-1; n += 2)
	{
		// Find target Species (first argument)
		Species* sp = coreData.findSpecies(parser.argc(n));
		if (!sp)
		{
			Messenger::error("Error adding SpeciesSite - no Species named '%s' exists.\n", parser.argc(startArg));
			return false;
		}

		// Find specified Site (second argument) in the Species
		SpeciesSite* site = sp->findSite(parser.argc(n+1));
		if (!site) return Messenger::error("Error setting SpeciesSite - no such site named '%s' exists in Species '%s'.\n", parser.argc(n+1), sp->name());

		// Add site to the list
		data_.append(site);
	}

	set_ = true;

	return true;
}

// Write keyword data to specified LineParser
bool SpeciesSiteReferenceListModuleKeyword::write(LineParser& parser, const char* prefix)
{
	// Loop over list of SpeciesSiteReferences
	CharString sites;
	RefListIterator<SpeciesSite> refIterator(data_);
	while (SpeciesSite* site = refIterator.iterate()) sites.strcatf("  '%s'  '%s'", site->parent()->name(), site->name());

	if (!parser.writeLineF("%s%s%s\n", prefix, keyword(), sites.get())) return false;

	return true;
}