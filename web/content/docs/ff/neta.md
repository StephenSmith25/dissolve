---
title: NETA
description: The Nested English Typing Approach (NETA)
---

## Overview

The Nested English Typing Approach (NETA) originated in [Aten](https://www.projectaten.com/aten) as an attempt to describe the chemical environment of a given atom in a molecule based on its connectivity, and in a clear and readable way. In Dissolve its purpose is to describe how to recognise atoms within molecules described by specific forcefields, and to subsequently allow all forcefield terms to be applied automatically.

## Basics

Each atom type in a forcefield is described by a chemical element, a unique integer index, and a NETA string describing how to recognise it. The NETA string describes the environment of the atom to recognise beginning from the atom itself - for instance, specifying the number of bonds it should have - and then "walks" to neighbouring atoms and describes what their local environment should be, and then their neighbours, and so on. The depth to which neighbours are checked depends on how complicated the molecule / forcefield is, and how unique the atom we are desciribing happens to be. Parentheses surround NETA elements that describe the atom which immediately precedes it, and in principle can be used to nest descriptions to any depth.

For example, we could uniquely describe the alcohol hydrogen of methanol (CH<sub>3</sub>OH) with the NETA string `-O` as this is enough to differentiate it from the aliphatic hydrogens on the carbon. If we wanted to, we could nest descriptions to cover the whole molecule, giving `-O(-C(nh=3))`. Starting off from our target alcohol hydrogen, this can be read as "is bound to an oxygen, which itself is bound to a carbon, which itself has three attached hydrogen atoms".

## NETA Reference

### "Bound To" (`-`)

The `-` keyword specifies a connection that the current atom must have. It can be used in several forms,
TODO

## Further Examples

TODO
