# AI Co-Pilot DAO Governance

> **Research Focus**: Deep dive into the Autocrat system implementation, architecture, and key mechanisms for agentic governance.

**Related**: [[Agentic Governance|Agentic Governance]] | [[Challenges in Current Governance Models|Challenges in Current Governance Models]] | [[DAO Governance in Education|DAO Governance in Education]]

---
## Overview: What is Autocrat?

Autocrat is an **AI-powered DAO governance system** (also called "Jeju AI Board") that implements multi-agent deliberation with board members, a Director decision-maker, and on-chain proposal submission. It's designed to move beyond token voting toward specialized AI agents that can analyze proposals from multiple perspectives before making secure, attestable decisions.

**Key Features**:
- AI-powered board deliberation (5 specialized agents)
- Director-level decision-making with personas
- TEE-secured decisions (Trusted Execution Environment)
- Prediction market escalation (futarchy)
- On-chain proposal submission and execution
- Research agent for deep proposal analysis

---

## Architecture Deep Dive

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                     Board API (port 8010)                  │
├─────────────────┬─────────────────┬─────────────────────────┤
│ ProposalAssist  │  ResearchAgent  │     BoardAgents       │
│ - Quality Score │  - Deep Analysis│     - Treasury          │
│ - Attestation   │  - Compute Mkt  │     - Code              │
│                 │  - Ollama       │     - Community         │
│                 │                 │     - Security          │
├─────────────────┴─────────────────┴─────────────────────────┤
│                    TEE Service (Director Decisions)         │
│                - Hardware TEE (Phala Cloud)                 │
│                - Simulated TEE (local dev)                  │
│                - Jeju KMS (encryption)                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Smart Contracts (Anvil/Base)              │
│  Board.sol  │  DirectorAgent.sol  │  QualityOracle.sol      │
└─────────────────────────────────────────────────────────────┘
```

### Proposal Lifecycle States

The proposal moves through these states (defined in `apps/autocrat/lib/types.ts`):

1. **DRAFT** - Initial proposal creation
2. **PENDING_QUALITY** - Quality assessment pending
3. **SUBMITTED** - Submitted to the board
4. **BOARD_REVIEW** (AUTOCRAT_REVIEW) - Board agents deliberating
5. **RESEARCH** (RESEARCH_PENDING) - Deep research analysis (optional)
6. **BOARD_FINAL** (AUTOCRAT_FINAL) - Board review complete
7. **DIRECTOR_QUEUE** - Waiting for Director decision
8. **APPROVED** - Director approved, ready for execution
9. **EXECUTING** - Currently executing on-chain
10. **COMPLETED** - Successfully executed
11. **REJECTED** - Rejected by board/Director
12. **VETOED** - Vetoed, can escalate to futarchy
13. **DUPLICATE** - Identified as duplicate proposal
14. **SPAM** - Identified as spam

**State Machine**: See `apps/autocrat/api/orchestrator.ts` - `processProposal()` method handles state transitions.

---

## Concept 1: Multi-Agent Deliberation Architecture

### Board Layer Implementation

**Five Specialized Agents** (defined in `apps/autocrat/jeju-manifest.json`):

1. **Treasury Board Member** (`autocrat-treasury`)
   - Role: Reviews financial impact and treasury implications
   - Focus: Budget analysis, ROI, treasury allocation impact

2. **Code Board Member** (`autocrat-code`)
   - Role: Reviews technical proposals and code changes
   - Focus: Technical feasibility, code quality, implementation risk

3. **Community Board Member** (`autocrat-community`)
   - Role: Reviews community impact and social implications
   - Focus: Community sentiment, adoption impact, stakeholder effects

4. **Security Board Member** (`autocrat-security`)
   - Role: Reviews security implications and risk assessment
   - Focus: Attack vectors, vulnerability assessment, security best practices

5. **Legal Board Member** (implicit in code, not explicitly in manifest)
   - Role: Reviews compliance and regulatory considerations
   - Focus: Legal compliance, regulatory alignment, liability

**Deliberation Process** (`apps/autocrat/api/agents/runtime.ts`):

```typescript
// Each agent gets context-aware prompts
const prompt = `PROPOSAL FOR REVIEW:
Title: ${request.title}
Type: ${request.proposalType}
Submitter: ${request.submitter}

As the ${template.role} agent, evaluate this proposal thoroughly.
Consider:
1. Alignment with DAO objectives
2. Technical feasibility (if applicable)
3. Financial implications
4. Community impact
5. Security considerations

State your vote clearly: APPROVE, REJECT, or ABSTAIN.
Provide specific reasoning based on your expertise.
Include a confidence score (0-100).`
```

**Vote Types**:
- `APPROVE` (0) - Supports the proposal
- `REJECT` (1) - Opposes the proposal
- `ABSTAIN` (2) - Neutral/no strong opinion
- `REQUEST_CHANGES` (3) - Needs modifications before approval

**Vote Structure** (`apps/autocrat/api/orchestrator.ts:590-610`):
- Each vote includes: role, vote type, reasoning hash, timestamp, weight
- Reasoning is stored off-chain (IPFS/DWS Storage) and hash is stored on-chain
- Votes are weighted (future: could be based on agent reputation/performance)

### Director Layer Implementation

**Director Decision Process** (`apps/autocrat/api/orchestrator.ts:579-692`):

1. **Collects all board votes** from on-chain contract
2. **Gets research report** (if available) - deep analysis by Research Agent
3. **Builds decision context**:
   ```typescript
   BOARD VOTES:
   - Treasury: APPROVE (85% confidence) - "Financial impact positive..."
   - Code: REQUEST_CHANGES (70%) - "Needs additional security review..."
   - Community: APPROVE (90%) - "Strong community support..."
   - Security: REJECT (60%) - "Potential attack vector identified..."
   - Legal: APPROVE (75%) - "Compliant with regulations..."
   
   RESEARCH FINDINGS:
   [Deep analysis report if available]
   
   As ${persona.name}, make your final decision...
   ```

4. **Persona-Based Decision**:
   - Each DAO configures a Director persona (`directorPersona` field)
   - Persona influences decision-making style, risk tolerance, values
   - System prompts are built from persona templates (`apps/autocrat/api/agents/templates.ts`)

5. **TEE-Secured Decision** (`apps/autocrat/api/tee.ts`):
   - Decision is made within Trusted Execution Environment
   - Hardware attestation (Phala Cloud) or simulated (local dev)
   - Result is encrypted and attestable

6. **On-Chain Recording**:
   - Decision hash stored on-chain via `DirectorAgent.recordDecision()`
   - Includes: approved boolean, decision hash, encrypted hash, confidence score, alignment score

**Key Insight**: The Director doesn't just vote - it makes a weighted decision considering all board inputs, research, and DAO alignment. The persona system allows different DAOs to have different "governance cultures."

---

## Concept 2: Futarchy & Prediction Markets

### Implementation Details

**Futarchy Flow** (`apps/autocrat/api/futarchy.ts`):

When a proposal is **VETOED**, it can be escalated to futarchy:

1. **Create Prediction Markets**:
   - Market A: "Network quality improves IF we approve Proposal X"
   - Market B: "Network quality improves IF we reject Proposal X"
   - Both markets use conditional resolution based on outcome

2. **Trading Period**:
   - Community members (and guardians with weighted votes) trade on both markets
   - Market prices reflect collective prediction of which outcome is better
   - Higher price = stronger belief that outcome improves network quality

3. **Resolution**:
   - After voting period (typically 7 days), markets resolve
   - If `Market A price > Market B price + confidence_threshold` → Execute proposal
   - Otherwise → Reject proposal
   - Multi-sig approval + timelock for safety

**Smart Contract Integration** (`packages/contracts/src/registry/RegistryGovernance.sol`):

```solidity
// RegistryGovernance uses futarchy for agent banning/slashing
// Creates two markets:
// Market A: "Quality improves IF we ban Agent X"
// Market B: "Quality improves IF we don't ban Agent X"
// Execute if Market A > Market B + threshold
```

**API Endpoints** (`apps/autocrat/api/routes/futarchy.ts`):
- `POST /api/v1/futarchy/escalate` - Escalate vetoed proposal to futarchy
- `GET /api/v1/futarchy/markets/:proposalId` - Get market status
- `POST /api/v1/futarchy/resolve` - Resolve markets and execute if passed

**Use Cases**:
1. **Proposal Veto Escalation**: Director/Board vetoes can be challenged via futarchy
2. **Agent Governance** (`RegistryGovernance`): Banning/slashing malicious agents
3. **Federation Membership** (`FederationGovernance`): Approving network sequencers
4. **Moderation** (`ModerationMarketplace`): Community-driven content moderation

**Key Insight**: Futarchy surfaces collective predictions about outcomes, not just preferences. This makes it powerful for controversial decisions where the "right" answer is measurable (e.g., "does this improve network quality?").

---

## Concept 3: TEE-Secured Decision Making

### Trusted Execution Environment (TEE)

**TEE Service** (`apps/autocrat/api/tee.ts`):

**Production**: Hardware TEE via Phala Cloud
- Provides hardware attestation guarantees
- Private key operations happen in secure enclave
- Cryptographic proof that code executed correctly

**Development**: Simulated TEE (local)
- Uses AES-256-GCM encryption
- No hardware guarantees, but same interface
- Suitable for testing and local development

**Decision Process** (`apps/autocrat/api/tee.ts:297-300`):

```typescript
function makeWeightedDecision(context: TEEDecisionContext): {
  approved: boolean
  reasoning: string
  confidence: number
  // ... considers board votes, research, persona
}
```

**Key Features**:
1. **Encryption**: Decisions are encrypted before storage
2. **Attestation**: Cryptographic proof of execution
3. **Privacy**: Sensitive reasoning can be encrypted (while public reasoning remains accessible)
4. **Tamper-Resistance**: Hardware TEE prevents manipulation

**Persona Configuration** (`apps/autocrat/lib/types.ts`):

Each DAO can configure a `DirectorPersona`:
- **name**: Director name (e.g., "Eliza", "Conservative Guardian")
- **traits**: Risk tolerance, community focus, technical rigor, etc.
- **systemPrompt**: Custom prompt that shapes decision-making style
- **decisionFallbackDays**: Human override timeframe

**Example Personas**:
- **Conservative**: Higher risk threshold, prefers stability
- **Innovative**: Lower risk threshold, embraces experimentation
- **Community-Focused**: Prioritizes community sentiment
- **Technical**: Emphasizes code quality and security

**Decision Output** (`apps/autocrat/api/tee.ts`):

Each decision includes:
- `approved`: boolean (final decision)
- `publicReasoning`: string (explanation for community)
- `encryptedReasoning`: string (detailed analysis, encrypted)
- `confidenceScore`: number (0-100, how confident in decision)
- `alignmentScore`: number (0-100, alignment with DAO values)
- `attestation`: object (provider, verified, signature)

**Key Insight**: TEE security ensures that even if the system is compromised, the decision-making process itself cannot be tampered with. Personas allow each DAO to express its unique culture while maintaining security guarantees.

---

## Implementation Details for Research

### Key Files to Study

1. **Orchestrator** (`apps/autocrat/api/orchestrator.ts`)
   - Main state machine for proposal processing
   - Handles all state transitions
   - Coordinates board votes, research, Director decisions

2. **Agent Runtime** (`apps/autocrat/api/agents/runtime.ts`)
   - Board agent deliberation logic
   - Director decision-making
   - Prompt building and LLM integration

3. **TEE Service** (`apps/autocrat/api/tee.ts`)
   - TEE decision-making implementation
   - Encryption and attestation
   - Weighted decision calculation

4. **Futarchy** (`apps/autocrat/api/futarchy.ts`)
   - Prediction market escalation
   - Market creation and resolution
   - Integration with prediction market contracts

5. **Smart Contracts** (`packages/contracts/src/governance/`)
   - `Board.sol` - Proposal management
   - `DirectorAgent.sol` - Director decision recording
   - `RegistryGovernance.sol` - Futarchy implementation example

### Research Questions to Explore

1. **How do board agents reach consensus?**
   - What happens when votes are split?
   - How are conflicting opinions resolved?
   - Is there a minimum threshold for approval?

2. **How does the Director persona influence decisions?**
   - What persona traits are most impactful?
   - How do you configure a persona for a specific DAO culture?
   - Can personas be updated over time?

3. **How effective is futarchy for controversial decisions?**
   - What are the limitations of prediction markets?
   - How do you prevent market manipulation?
   - What happens if markets disagree with expert opinion?

4. **How does TEE security work in practice?**
   - What are the attack vectors?
   - How do you verify attestations?
   - What's the fallback if TEE is compromised?

5. **How does the research agent work?**
   - What depth of analysis does it provide?
   - How does it integrate with compute marketplace?
   - When is research triggered?

---

## Related Concepts

- **RLAIF (Reinforcement Learning from AI Feedback)**: The system includes endpoints for training agents based on trajectories and outcomes (`apps/autocrat/api/routes/rlaif.ts`). This allows agents to improve over time based on governance outcomes.

- **A2A Protocol (Agent-to-Agent)**: Board agents and Director can communicate via A2A protocol (`apps/autocrat/api/a2a-server.ts`), enabling cross-agent collaboration.

- **Quality Oracle**: Proposals are assessed for quality before submission (`apps/autocrat/api/proposal-assistant.ts`), filtering spam and low-quality proposals.

- **Security Validation**: Code proposals can be validated in sandbox environments (`apps/autocrat/api/security-validation-agent.ts`), testing for vulnerabilities before execution.

---

## Next Steps for Deep Research

1. **Read the source code**:
   - Start with `orchestrator.ts` to understand the flow
   - Then `runtime.ts` for agent logic
   - Then `tee.ts` for security mechanisms
   - Then `futarchy.ts` for escalation mechanism

2. **Study the smart contracts**:
   - `Board.sol` - Core proposal lifecycle
   - `RegistryGovernance.sol` - Futarchy implementation
   - `DirectorAgent.sol` - Decision recording

3. **Run the system locally**:
   - Follow setup in `apps/autocrat/README.md`
   - Observe proposal lifecycle end-to-end
   - Experiment with different personas

4. **Research related work**:
   - Futarchy (Robin Hanson)
   - Prediction markets in governance
   - TEE-based systems (Phala Network, Intel SGX)
   - Multi-agent systems in governance

---

**Last Updated**: 2026-01-10
**Status**: Active Research

DAO: The Game Fun, Fast-paced, But Users Can Go Deep Simulation Mode - Throws insane crypto reality show problems at your agent to solve Real world mode - Govern actual stuff API adapters -> discord, telegram etc Smart Contract Stuff -> Payments -> Salary / recurring -> Setting fees on contracts -> Approving multi-sig actions f