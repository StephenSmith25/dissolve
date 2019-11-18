/* -------- */
/* Prologue */
/* -------- */
%{

/* Includes */
#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>
#include "neta/generator.h"
#include "neta/connection.h"
#include "neta/neta.h"
#include "neta/ring.h"
#include "base/messenger.h"
#include "templates/reflist.h"

/* Prototypes */
int NETADefinitionGenerator_lex(void);
void NETADefinitionGenerator_error(char *s);

// Local Variables
CharString localName;

%}

// Redeclare function names
%name-prefix="NETADefinitionGenerator_"

/* Type Definition */
%union {
	void* atomTargetDummy;				/* Dummy Type for Atom Targets*/
	int elementZ;					/* Element Z */
	const char* name;				/* Character pointer for names */
	NETANode* node;					/* NETADefinition node pointer */
	NETANode::ComparisonOperator valueOperator;	/* Comparison Operator */
	int integerConst;				/* Constant integer value */
	double doubleConst;				/* Constant double value */
};

%token <integerConst> DISSOLVE_NETA_INTEGERCONSTANT
%token <doubleConst> DISSOLVE_NETA_DOUBLECONSTANT
%token <elementZ> DISSOLVE_NETA_ELEMENT
%token <valueOperator> DISSOLVE_NETA_OPERATOR
%token <name> DISSOLVE_NETA_MODIFIER
%token DISSOLVE_NETA_RING DISSOLVE_NETA_UNKNOWNTOKEN

%left DISSOLVE_NETA_AND DISSOLVE_NETA_OR
%left '='
%left DISSOLVE_NETA_GEQ DISSOLVE_NETA_LEQ DISSOLVE_NETA_EQ DISSOLVE_NETA_NEQ '>' '<'
%left '+' '-'
%left '*' '/' '%'
%right DISSOLVE_NETA_UMINUS
%right '!'
%right '^'

%type <node> node nodesequence createconnectionnode createringnode
%type <valueOperator> valueoperator
%type <atomTargetDummy> target targets targetlist

%%

/* ----------------------- */
/* NETA Definition Grammar */
/* ----------------------- */

/* Main Structure */
neta:
	/* empty */					{ YYACCEPT; }
	| nodesequence					{ YYACCEPT; }
	;

/* Sequence of Nodes */
nodesequence:
	node						{ $$ = $1; if ($$ == NULL) YYABORT; }
	| contextmodifier				{ $$ = NULL; }
	| '!' node					{ $2->setReverseLogic(); $$ = $2; }
	| nodesequence ',' node				{ $$ = $3; }
	| contextmodifier ',' nodesequence		{ $$ = $3; }
// 	| nodesequence '|' nodesequence			{ $$ = NETADefinitionGenerator::context()->joinWithLogic($1, NETALogicNode::OrLogic, $3); }
	;

/* Nodes */
node:
	'-' targetlist createconnectionnode							{ $$ = $3; }
	| '-' targetlist createconnectionnode pushcontext '(' nodesequence ')' popcontext	{ $$ = $3; }
	| DISSOLVE_NETA_RING createringnode pushcontext '(' nodesequence ')' popcontext		{ $$ = $2; }
	| DISSOLVE_NETA_UNKNOWNTOKEN								{ YYABORT; }
	;

/* Target Element / Type Generic */
targetlist:
	target						{ $$ = NULL; }
	| '[' target ']'				{ $$ = NULL; }
	| '[' targets ']'				{ $$ = NULL; }
	;

/* Target Elements / Types */
targets:
	target						{ $$ = NULL; }
	| targets ',' target				{ $$ = NULL; }
	;

/* Target Element / Type */
target:
	DISSOLVE_NETA_ELEMENT				{ NETADefinitionGenerator::addTarget($1); $$ = NULL; }
	| '&' DISSOLVE_NETA_INTEGERCONSTANT		{ NETADefinitionGenerator::addTarget(-$2); $$ = NULL; }
	;

/* Context Modifiers */
contextmodifier:
	DISSOLVE_NETA_MODIFIER storename valueoperator DISSOLVE_NETA_INTEGERCONSTANT	{ if (!NETADefinitionGenerator::context()->setModifier(localName, $3, $4)) YYABORT; }
	;

/* Operators */
valueoperator:
	DISSOLVE_NETA_OPERATOR				{ $$ = yylval.valueOperator; }
	;

/* Node Creation */
createconnectionnode:
	/* empty */					{ $$ = NETADefinitionGenerator::context()->createConnectionNode(NETADefinitionGenerator::targetElements(), NETADefinitionGenerator::targetAtomTypes()); NETADefinitionGenerator::clearTargets(); }
	;
createringnode:
	/* empty */					{ $$ = NETADefinitionGenerator::context()->createRingNode(); }
	;

/* Context Management */
pushcontext:
	/* empty */					{ NETADefinitionGenerator::pushContext(); }
	;
popcontext:
	/* empty */					{ NETADefinitionGenerator::popContext(); }
	;
storename:
	/* empty */					{ localName = yylval.name; }
	;

%%

void yyerror(char *s)
{
}