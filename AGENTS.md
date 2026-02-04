# AGENTS.md

## Overview

This repository contains a curated collection of AI agents defined through sophisticated system prompts. Each agent is designed to perform specific tasks with high accuracy, following structured methodologies and validated evaluation criteria.

For the project's strategic direction and development phases, see the [ROADMAP.md](ROADMAP.md).

## What is an Agent?

In this context, an **agent** is a specialized AI persona defined by a comprehensive system prompt that includes:

- Clear role and persona definition
- Structured evaluation methodology
- Trusted source hierarchy
- Specific interaction logic
- Quality control standards

## Agent Categories

### 1. Review & Analysis Agents

Specialized agents that provide detailed, technical analysis of products and services.

#### Shopping Laptop Reviewer

**File**: `shopping-laptop-reviewer.md`

**Purpose**: Elite, cynical laptop reviewer catering to professionals, creatives, and prosumers. Pierces through marketing hype to reveal technical truths about laptop capabilities.

**Core Methodology**:

- **Trusted Source Hierarchy**: Weights reviews based on technical expertise
- **Pro Standard Matrix**: Evaluates sustained performance, build integrity, and visual/power reality
- **Pattern Recognition**: Identifies systemic quality control issues

**Key Features**:

- SKU forensics to detect silent downgrades
- Component constraint analysis
- Real-world battery performance validation
- Competition analysis by use-case

**Interaction Logic**:

- **Path A**: Vague user queries → 3-5 qualifying questions
- **Path B**: Specific product queries → Structured "Truth Report"

**Report Structure**:

1. The Verdict (TL;DR)
2. Differentiation Factors
3. Raw Specs
4. The Good (Validated)
5. The Bad (Dealbreakers)
6. Battery & Display
7. The Ugly (QC & User Patterns)
8. Competition Analysis
9. Sources

## Agent Development Standards

### Documentation Requirements

Each agent must include:

- **Clear Purpose**: Specific use case and target audience
- **Persona Definition**: Role, tone, and expertise level
- **Methodology**: Structured approach to evaluation/analysis
- **Source Hierarchy**: Trusted sources and their weighting
- **Interaction Logic**: Clear paths for different user inputs
- **Quality Standards**: Criteria for validation and accuracy

### Quality Criteria

- **Technical Accuracy**: All claims must be verifiable
- **Source Validation**: Clear hierarchy of trusted sources
- **Structured Output**: Consistent format for responses
- **User Guidance**: Clear instructions for optimal interaction
- **Error Handling**: Graceful handling of insufficient information

### Naming Conventions

- Agent files should use kebab-case: `agent-name.md`
- Titles should clearly state the agent's purpose
- Include the agent type in the filename when applicable

## Agent Matrix

| Agent                    | Category          | Complexity | Target Domain           | Status      |
| ------------------------ | ----------------- | ---------- | ----------------------- | ----------- |
| Shopping Laptop Reviewer | Review & Analysis | High       | Technology/Professional | ✅ Complete |
| Hugo Operations          | Web Development   | Medium     | SSG/DevOps              | ✅ Complete |

## Usage Guidelines

### For Users

1. **Provide Context**: Give specific details about your needs and use case
2. **Follow Agent Logic**: Each agent has specific interaction patterns
3. **Trust the Process**: Agents follow structured methodologies for accuracy

### For Developers

1. **Study Existing Agents**: Understand the structure and methodology
2. **Follow Standards**: Use the established documentation format
3. **Test Thoroughly**: Validate agent performance across scenarios
4. **Document Sources**: Clearly cite trusted sources and validation methods

## Contributing New Agents

### Development Process

1. **Define Purpose**: Clear use case and target audience
2. **Research Sources**: Identify trusted sources and establish hierarchy
3. **Create Methodology**: Structured approach for evaluation/analysis
4. **Write Documentation**: Follow established format
5. **Test & Refine**: Validate performance and iterate

### Submission Requirements

- Complete documentation following standards
- Source validation and hierarchy
- Example interactions
- Quality criteria checklist

## Repository Organization

```
sys-prompts/
├── README.md                 # Repository overview
├── ROADMAP.md                # Project milestones and future plans
├── AGENTS.md                 # This file - agent documentation
├── shopping-laptop-reviewer.md # Example agent
└── [future-agents].md       # Additional agents
```

## Quality Assurance

Each agent undergoes validation for:

- **Accuracy**: Technical correctness of evaluations
- **Consistency**: Reliable output format
- **Completeness**: Comprehensive coverage of relevant factors
- **Usability**: Clear interaction patterns
- **Documentation**: Complete and understandable guides

---

_This documentation serves as both a guide for using existing agents and a template for developing new ones. All agents in this repository are maintained to the highest standards of technical accuracy and user experience._
