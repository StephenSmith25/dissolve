// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2020 Team Dissolve and contributors

#include "modules/checkspecies/checkspecies.h"

/*
 * Constructor / Destructor
 */

CheckSpeciesModule::CheckSpeciesModule() : Module()
{
    // Set unique name for this instance of the Module
    static int instanceId = 0;
    uniqueName_ = fmt::format("{}{:02d}", type(), instanceId++);

    // Initialise Module - set up keywords etc.
    initialise();
}

CheckSpeciesModule::~CheckSpeciesModule() {}

/*
 * Instances
 */

// Create instance of this module
Module *CheckSpeciesModule::createInstance() const { return new CheckSpeciesModule; }