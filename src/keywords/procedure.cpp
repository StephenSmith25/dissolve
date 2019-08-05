/*
	*** Keyword - Procedure
	*** src/keywords/procedure.cpp
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

#include "keywords/procedure.h"
#include "classes/configuration.h"
#include "classes/species.h"
#include "base/lineparser.h"
#include "genericitems/listhelper.h"

// Constructor
ProcedureModuleKeyword::ProcedureModuleKeyword(Procedure& procedure) : ModuleKeywordData<Procedure&>(ModuleKeywordBase::ProcedureData, procedure)
{
}

// Destructor
ProcedureModuleKeyword::~ProcedureModuleKeyword()
{
}

/*
 * Arguments
 */

// Return minimum number of arguments accepted
int ProcedureModuleKeyword::minArguments()
{
	return 0;
}

// Return maximum number of arguments accepted
int ProcedureModuleKeyword::maxArguments()
{
	return 0;
}

// Parse arguments from supplied LineParser, starting at given argument offset, utilising specified ProcessPool if required
bool ProcedureModuleKeyword::read(LineParser& parser, int startArg, const CoreData& coreData, ProcessPool& procPool)
{
	if (!data_.read(parser, coreData)) return false;

	set_ = true;

	return true;
}

// Write keyword data to specified LineParser
bool ProcedureModuleKeyword::write(LineParser& parser, const char* prefix)
{
	return data_.write(parser, prefix);
}
