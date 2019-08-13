/*
	*** Keyword List
	*** src/module/keywordlist.h
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

#ifndef DISSOLVE_KEYWORDLIST_H
#define DISSOLVE_KEYWORDLIST_H

#include "keywords/base.h"
#include "keywords/data.h"
#include "base/enumoptions.h"
#include "templates/list.h"

// Forward Declarations
class Module;

// Keyword List
class KeywordList
{
	public:
	// Constructor / Destructor
	KeywordList();
	~KeywordList();


	/*
	 * Keyword List
	 */
	private:
	// List of defined keywords
	List<KeywordBase> keywords_;

	public:
	// Add keyword
	bool add(KeywordBase* object, const char* keyword, const char* description, int genericItemFlags = 0);
	// Add keyword
	bool add(KeywordBase* object, const char* keyword, const char* description, const char* arguments, int genericItemFlags = 0);
	// Find named keyword
	KeywordBase* find(const char* keyword) const;
	// Return keywords list
	List<KeywordBase>& keywords();


	/*
	 * Set / Get
	 */
	public:
	// Retrieve named item from specified list as template-guided type
	template <class T> T& retrieve(const char* name, T defaultValue = T(), bool* found = NULL)
	{
		// Find item in the list
		KeywordBase* item = find(name);
		if (!item)
		{
			Messenger::printVerbose("No item named '%s' in the keyword list - default value item will be returned.\n", name);
			static T dummy;
			dummy = defaultValue;
			if (found != NULL) (*found) = false;
			return dummy;
		}

		// Attempt to cast to specified type
		KeywordData<T>* castItem = dynamic_cast<KeywordData<T>*>(item);
		if (!castItem)
		{
			printf("That didn't work, because it's of the wrong type.\n");
			static T dummy;
			if (found != NULL) (*found) = false;
			return dummy;
		}

		if (found != NULL) (*found) = true;
		return castItem->data();
	}
	// Set named item from specified list as a template-guided type
	template <class T> bool set(const char* name, T value)
	{
		// Find item in the list
		KeywordBase* item = find(name);
		if (!item)
		{
			Messenger::warn("No item named '%s' in the keyword list - cannot set it's value.\n", name);
			return false;
		}

		// Attempt to cast to specified type
		KeywordData<T>* castItem = dynamic_cast<KeywordData<T>*>(item);
		if (!castItem)
		{
			printf("That didn't work, because it's of the wrong type.\n");
			return false;
		}

		// Set the new value
		castItem->setData(value);

		return true;
	}
	// Retrieve named EnumOptions with specified class, and return its current enumeration
	template <class E> E enumeration(const char* name, bool* found = NULL)
	{
		// Find item in the list
		KeywordBase* item = find(name);
		if (!item)
		{
			Messenger::error("No item named '%s' in the keyword list - default enumeration of -1 will be returned.\n", name);
			if (found != NULL) (*found) = false;
			return (E) -1;
		}

		// Attempt to cast to EnumOptionsBase
		KeywordData< EnumOptions<E> >* castItem = dynamic_cast<KeywordData< EnumOptions<E> >*>(item);
		if (!castItem)
		{
			Messenger::error("Failed to cast keyword '%s' into EnumOptions<E> because it's of a different type.\n", name);
			if (found != NULL) (*found) = false;
			return (E) -1;
		}

		if (found != NULL) (*found) = true;
		return castItem->data().enumeration();
	}


	/*
	 * Conversion
	 */
	public:
	// Return simple keyword value (as bool)
	bool asBool(const char* keywordName) const;
	// Return simple keyword value (as int)
	int asInt(const char* keywordName) const;
	// Return simple keyword value (as double)
	double asDouble(const char* keywordName) const;
	// Return simple keyword value (as string)
	const char* asString(const char* keywordName) const;
	// Return simple keyword value (as Vec3<int>)
	Vec3<int> asVec3Int(const char* keywordName) const;
	// Return simple keyword value (as Vec3<double>)
	Vec3<double> asVec3Double(const char* keywordName) const;
	// Return whether the specified keyword data has ever been set
	bool isSet(const char* keywordName) const;
};

#endif
