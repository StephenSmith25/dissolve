/*
    *** Benchmark Module - Processing
    *** src/modules/benchmark/process.cpp
    Copyright T. Youngs 2012-2020

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

#include "base/sysfunc.h"
#include "classes/box.h"
#include "classes/regionaldistributor.h"
#include "genericitems/listhelper.h"
#include "io/export/data1d.h"
#include "io/import/data1d.h"
#include "main/dissolve.h"
#include "modules/benchmark/benchmark.h"
#include "modules/energy/energy.h"
#include "modules/rdf/rdf.h"

// Run main processing
bool BenchmarkModule::process(Dissolve &dissolve, ProcessPool &procPool)
{
    // Check for zero Configuration targets
    if (targetConfigurations_.nItems() == 0)
        return Messenger::error("No configuration targets set for module '%s'.\n", uniqueName());

    // Get options
    const auto N = keywords_.asInt("N");
    const auto saveTimings = keywords_.asBool("Save");

    Messenger::print("Benchmark: Test timings will be averaged over %i %s.\n", N, N == 1 ? "run" : "runs");
    Messenger::print("Benchmark: Test timings %s be saved to disk.\n", saveTimings ? "will" : "will not");
    Messenger::print("\n");

    // Loop over target Configurations
    for (Configuration *cfg : targetConfigurations_)
    {
        // Set up process pool - must do this to ensure we are using all available processes
        procPool.assignProcessesToGroups(cfg->processPool());
        ProcessPool::DivisionStrategy strategy = procPool.bestStrategy();

        /*
         * Configuration Generation
         */
        if (keywords_.asBool("TestGenerator"))
        {
            SampledDouble timing;
            for (int n = 0; n < N; ++n)
            {
                srand(dissolve.seed());

                Timer timer;
                Messenger::mute();
                cfg->generate(procPool, dissolve.pairPotentialRange());
                Messenger::unMute();
                timing += timer.split();
            }
            printTimingResult(CharString("%s_%s_%s.txt", uniqueName(), cfg->niceName(), "Generator"), "Configuration generator",
                              timing, saveTimings);
        }

        /*
         * RDF Calculation - Cells method, to maximum range allowed by box
         */
        if (keywords_.asBool("TestRDFCells"))
        {
            SampledDouble timing;
            for (int n = 0; n < N; ++n)
            {
                RDFModule rdfModule;
                rdfModule.addTargetConfiguration(cfg);
                cfg->incrementContentsVersion();
                srand(dissolve.seed());

                // Run the Module calculation
                bool upToDate;
                Timer timer;
                Messenger::mute();
                rdfModule.calculateGR(procPool, cfg, RDFModule::CellsMethod, cfg->box()->inscribedSphereRadius(), 0.05,
                                      upToDate);
                Messenger::unMute();
                timing += timer.split();
            }
            printTimingResult(CharString("%s_%s_%s.txt", uniqueName(), cfg->niceName(), "RDFCells"),
                              "RDF (Cells) to half-cell limit", timing, saveTimings);
        }

        /*
         * RDF Calculation - Simple method, to maximum range allowed by box
         */
        if (keywords_.asBool("TestRDFSimple"))
        {
            SampledDouble timing;
            for (int n = 0; n < N; ++n)
            {
                RDFModule rdfModule;
                rdfModule.addTargetConfiguration(cfg);
                cfg->incrementContentsVersion();
                srand(dissolve.seed());

                // Run the Module calculation
                bool upToDate;
                Timer timer;
                Messenger::mute();
                rdfModule.calculateGR(procPool, cfg, RDFModule::SimpleMethod, cfg->box()->inscribedSphereRadius(), 0.05,
                                      upToDate);
                Messenger::unMute();
                timing += timer.split();
            }
            printTimingResult(CharString("%s_%s_%s.txt", uniqueName(), cfg->niceName(), "RDFSimple"),
                              "RDF (Simple) to half-cell limit", timing, saveTimings);
        }

        /*
         * Energy Calculation - Intramolecular Terms
         */
        if (keywords_.asBool("TestIntraEnergy"))
        {
            SampledDouble timing;
            for (int n = 0; n < N; ++n)
            {
                Timer timer;
                Messenger::mute();
                EnergyModule::intraMolecularEnergy(procPool, cfg, dissolve.potentialMap());
                Messenger::unMute();
                timing += timer.split();
            }
            printTimingResult(CharString("%s_%s_%s.txt", uniqueName(), cfg->niceName(), "IntraEnergy"), "Intramolecular energy",
                              timing, saveTimings);
        }

        /*
         * Energy Calculation - Intermolecular Terms
         */
        if (keywords_.asBool("TestInterEnergy"))
        {
            SampledDouble timing;
            for (int n = 0; n < N; ++n)
            {
                Timer timer;
                Messenger::mute();
                EnergyModule::interAtomicEnergy(procPool, cfg, dissolve.potentialMap());
                Messenger::unMute();
                timing += timer.split();
            }
            printTimingResult(CharString("%s_%s_%s.txt", uniqueName(), cfg->niceName(), "InterEnergy"), "Interatomic energy",
                              timing, saveTimings);
        }

        /*
         * Distributors
         */
        if (keywords_.asBool("TestDistributors"))
        {
            SampledDouble timing;
            for (int n = 0; n < N; ++n)
            {
                // Create a Molecule distributor
                auto &moleculeArray = cfg->molecules();
                RegionalDistributor distributor(moleculeArray, cfg->cells(), procPool, strategy);

                Timer timer;
                Messenger::mute();
                while (distributor.cycle())
                {
                    // Get next set of Molecule targets from the distributor
                    auto targetMolecules = distributor.assignedMolecules();

                    // Switch parallel strategy if necessary
                    if (distributor.currentStrategy() != strategy)
                    {
                        // Set the new strategy
                        strategy = distributor.currentStrategy();

                        // Re-initialise the random buffer
                        procPool.initialiseRandomBuffer(ProcessPool::subDivisionStrategy(strategy));
                    }

                    // Loop over target Molecules
                    for (int n = 0; n < targetMolecules.size(); ++n)
                    {
                        // Get Molecule index and pointer
                        auto molId = targetMolecules[n];
                        auto mol = cfg->molecule(molId);
                    }
                }
                Messenger::unMute();
                timing += timer.split();
            }
            printTimingResult(CharString("%s_%s_%s.txt", uniqueName(), cfg->niceName(), "RegionalDist"),
                              "Distributor (regional)", timing, saveTimings);
        }
    }

    return true;
}

// Print timing information, assessing it against last value in existing timings (if found)
void BenchmarkModule::printTimingResult(const char *testFile, const char *testDescription, const SampledDouble &timing,
                                        bool storeNewTiming)
{
    auto existingDataAvailable = false;

    // Open the existing timings file if it exists
    Data1D existingTimings;
    existingTimings.addErrors();
    Data1DImportFileFormat importer(testFile, Data1DImportFileFormat::XYData1D);
    if (importer.fileExists())
    {
        importer.keywords().set("Error", 3);
        existingDataAvailable = importer.importData(existingTimings);
        if (existingDataAvailable)
            existingDataAvailable = existingTimings.nValues() > 0;
    }

    // Print timing, comparing to last known value if available
    if (existingDataAvailable)
    {
        SampledDouble lastTiming = existingTimings.values().last();
        double deltaT = lastTiming.value() - timing.value();
        Messenger::print("  %50s  %8.4e s (+/- %8.4e s) => %c%0.3e s (%c%0.2f%%)\n", testDescription, timing.value(),
                         timing.stDev(), deltaT < timing.value() ? '+' : '-', fabs(deltaT), deltaT < timing.value() ? '+' : '-',
                         fabs((deltaT / timing.value()) * 100.0));
    }
    else
        Messenger::print("  %50s  %8.4e s (+/- %8.4e s)\n", testDescription, timing.value(), timing.stDev());

    // Store new timing?
    if (storeNewTiming)
    {
        existingTimings.addPoint(existingTimings.nValues() + 1, timing.value(), timing.stDev());

        Data1DExportFileFormat exporter(testFile, Data1DExportFileFormat::XYData1D);
        exporter.exportData(existingTimings);
    }
}