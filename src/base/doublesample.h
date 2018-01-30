/*
	*** DoubleSample
	*** src/base/doublesample.h
	Copyright T. Youngs 2012-2018

	This file is part of dUQ.

	dUQ is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	dUQ is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with dUQ.  If not, see <http://www.gnu.org/licenses/>.
*/

#ifndef DUQ_DOUBLESAMPLE_H
#define DUQ_DOUBLESAMPLE_H

#include <ctime>

// Double value with sampling
class DoubleSample
{
	public:
	// Constructor
	DoubleSample();


	/*
	 * Data
	 */
	private:
	// Current value 
	double value_;
	// Sample size contributing to averages etc.
	int count_;
	// Mean of sampled data
	double mean_;
	// Aggregate of squared distance from mean
	double m2_;

	public:
	// Return current value
	double value() const;
	// Accumulate current value into statistics
	void accumulate();
	// Return number of samples contributing to averages etc.
	int count() const;
	// Return mean of sampled data
	double mean() const;
	// Return variance of sampled data
	double variance() const;
	// Return standard deviation of sampled data
	double stDev() const;


	/*
	 * Operators
	 */
	public:
	// Assigment
	void operator=(double x);
	// Conversion (double)
	operator double&();
	// <<
	void operator<<(double x);
};

#endif
