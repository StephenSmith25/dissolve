/*
	*** Procedure Node
	*** src/procedure/nodes/node.cpp
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

#include "procedure/nodes/node.h"
#include "procedure/nodes/sequence.h"
#include "classes/site.h"
#include "base/messenger.h"
#include "base/sysfunc.h"

// Return enum option info for NodeType
EnumOptions<ProcedureNode::NodeType> ProcedureNode::nodeTypes()
{
	static EnumOptionsList NodeTypeKeywords = EnumOptionsList() <<
		EnumOption(ProcedureNode::AddSpeciesNode,	"AddSpecies") <<
		EnumOption(ProcedureNode::BoxNode,		"Box") <<
		EnumOption(ProcedureNode::CalculateNode,	"Calculate") <<
		EnumOption(ProcedureNode::Collect1DNode,	"Collect1D") <<
		EnumOption(ProcedureNode::Collect2DNode,	"Collect2D") <<
		EnumOption(ProcedureNode::Collect3DNode,	"Collect3D") <<
		EnumOption(ProcedureNode::DynamicSiteNode,	"DynamicSite") <<
		EnumOption(ProcedureNode::ExcludeNode,		"Exclude") <<
		EnumOption(ProcedureNode::Fit1DNode,		"Fit1D") <<
		EnumOption(ProcedureNode::ParametersNode,	"Parameters") <<
		EnumOption(ProcedureNode::Process1DNode,	"Process1D") <<
		EnumOption(ProcedureNode::Process2DNode,	"Process2D") <<
		EnumOption(ProcedureNode::Process3DNode,	"Process3D") <<
		EnumOption(ProcedureNode::SelectNode,		"Select") <<
		EnumOption(ProcedureNode::SequenceNode,		"Sequence");

	static EnumOptions<ProcedureNode::NodeType> options("NodeType", NodeTypeKeywords, ProcedureNode::nNodeTypes);

	return options;
}

// Return enum option info for NodeContext
EnumOptions<ProcedureNode::NodeContext> ProcedureNode::nodeContexts()
{
	static EnumOptionsList NodeContextKeywords = EnumOptionsList() << 
		EnumOption(ProcedureNode::NoContext,			"None") <<
		EnumOption(ProcedureNode::AnalysisContext,		"Analysis") <<
		EnumOption(ProcedureNode::GenerationContext,		"Generation");

	static EnumOptions<ProcedureNode::NodeContext> options("NodeContext", NodeContextKeywords, ProcedureNode::NoContext);

	return options;
}

// Constructor
ProcedureNode::ProcedureNode(ProcedureNode::NodeType nodeType) : ListItem<ProcedureNode>()
{
	type_ = nodeType;
	scope_ = NULL;

	// Assign default, unique name to the node
	static int nodeCount = 0;
	name_ = CharString("Node%04i", ++nodeCount);
}

// Destructor
ProcedureNode::~ProcedureNode()
{
}

/*
 * Identity
 */

// Return node type
ProcedureNode::NodeType ProcedureNode::type() const
{
	return type_;
}

// Set node name (and nice name)
void ProcedureNode::setName(const char* name)
{
	name_ = name;

	// Generate a nice name (i.e. no spaces, slashes etc.)
	niceName_ = DissolveSys::niceName(name_);
}

// Return node name
const char* ProcedureNode::name() const
{
	return name_.get();
}

// Return nice node name
const char* ProcedureNode::niceName() const
{
	return niceName_.get();
}

/*
 * Keywords
 */

// Return keywords for this node
const KeywordList& ProcedureNode::keywords() const
{
	return keywords_;
}

/*
 * Scope
 */

// Set scope
void ProcedureNode::setScope(SequenceProcedureNode* scopeNode)
{
	scope_ = scopeNode;
}

// Return Procedure in which this node exists
const Procedure* ProcedureNode::procedure() const
{
	if (!scope_) return NULL;

	return scope_->procedure();
}

// Return context of scope in which this node exists
ProcedureNode::NodeContext ProcedureNode::scopeContext() const
{
	if (!scope_) return ProcedureNode::NoContext;

	return scope_->sequenceContext();
}

// Return named node if it is currently in scope, and optionally matches the type given
ProcedureNode* ProcedureNode::nodeInScope(const char* name, ProcedureNode::NodeType nt)
{
	if (!scope_) return NULL;

	return scope_->nodeInScope(this, name, nt);
}

// Return whether the named parameter is currently in scope
ExpressionVariable* ProcedureNode::parameterInScope(const char* name)
{
	if (!scope_) return NULL;

	return scope_->parameterInScope(this, name);
}

// Create and return reference list of parameters in scope
RefList<ExpressionVariable> ProcedureNode::parametersInScope()
{
	if (!scope_) return RefList<ExpressionVariable>();

	return scope_->parametersInScope(this);
}

/*
 * Branch
 */

// Return whether this node has a branch
bool ProcedureNode::hasBranch() const
{
	return false;
}

// Return SequenceNode for the branch (if it exists)
SequenceProcedureNode* ProcedureNode::branch()
{
	return NULL;
}

/*
 * Parameters
 */

// Return whether this node has the named parameter specified
ExpressionVariable* ProcedureNode::hasParameter(const char* name)
{
	return NULL;
}

// Return references to all parameters for this node
RefList<ExpressionVariable> ProcedureNode::parameterReferences() const
{
	return RefList<ExpressionVariable>();
}

/*
 * Execution
 */

// Prepare any necessary data, ready for execution
bool ProcedureNode::prepare(Configuration* cfg, const char* prefix, GenericList& targetList)
{
	return ProcedureNode::Success;
}

// Finalise any necessary data after execution
bool ProcedureNode::finalise(ProcessPool& procPool, Configuration* cfg, const char* prefix, GenericList& targetList)
{
	return ProcedureNode::Success;
}
