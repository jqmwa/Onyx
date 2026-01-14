// DAO Governance Proposals for ONYX Game

import { Proposal } from './types';

export const proposals: Proposal[] = [
  {
    id: '1',
    title: 'Emergency Security Patch',
    description: 'Critical vulnerability discovered in the staking contract. Immediate patch required to prevent potential exploit.',
    type: 'security',
    submitter: '0x7a2...f3e1',
    urgency: 'critical',
    timeLimit: 15,
    boardVotes: [
      { role: 'Security', vote: 'approve', confidence: 95, reasoning: 'Critical vulnerability confirmed. Patch is sound.' },
      { role: 'Code', vote: 'approve', confidence: 88, reasoning: 'Code review passed. Implementation is correct.' },
      { role: 'Treasury', vote: 'approve', confidence: 72, reasoning: 'Minimal cost impact. Security takes priority.' },
      { role: 'Community', vote: 'approve', confidence: 80, reasoning: 'Community safety is paramount.' },
    ],
  },
  {
    id: '2',
    title: 'Treasury Allocation: Marketing Campaign',
    description: 'Proposal to allocate 50,000 USDC for an influencer marketing campaign targeting gaming communities.',
    type: 'treasury',
    submitter: '0x3b9...a2c4',
    amount: 50000,
    urgency: 'low',
    timeLimit: 25,
    boardVotes: [
      { role: 'Treasury', vote: 'reject', confidence: 85, reasoning: 'No clear ROI metrics. Budget too vague.' },
      { role: 'Community', vote: 'approve', confidence: 60, reasoning: 'Growth is needed but plan lacks detail.' },
      { role: 'Code', vote: 'abstain', confidence: 50, reasoning: 'Outside technical scope.' },
      { role: 'Security', vote: 'abstain', confidence: 45, reasoning: 'No security implications.' },
    ],
  },
  {
    id: '3',
    title: 'Governance Token Distribution',
    description: 'Airdrop 10% of treasury tokens to active community members who participated in governance last quarter.',
    type: 'governance',
    submitter: '0x9d1...e7f2',
    urgency: 'medium',
    timeLimit: 20,
    boardVotes: [
      { role: 'Community', vote: 'approve', confidence: 92, reasoning: 'Rewards active participation. Excellent for engagement.' },
      { role: 'Treasury', vote: 'reject', confidence: 78, reasoning: '10% is too aggressive. Suggest 3-5%.' },
      { role: 'Security', vote: 'approve', confidence: 65, reasoning: 'Distribution mechanism is secure.' },
      { role: 'Code', vote: 'approve', confidence: 70, reasoning: 'Smart contract for airdrop is audited.' },
    ],
  },
  {
    id: '4',
    title: 'Protocol Upgrade v2.5',
    description: 'Major protocol upgrade introducing cross-chain messaging and improved gas efficiency. 30% gas reduction expected.',
    type: 'code',
    submitter: 'Core Team',
    urgency: 'medium',
    timeLimit: 20,
    boardVotes: [
      { role: 'Code', vote: 'approve', confidence: 94, reasoning: 'Excellent technical implementation. All tests pass.' },
      { role: 'Security', vote: 'approve', confidence: 88, reasoning: 'Audited by three firms. No critical issues.' },
      { role: 'Treasury', vote: 'approve', confidence: 75, reasoning: 'Gas savings benefit all users.' },
      { role: 'Community', vote: 'approve', confidence: 85, reasoning: 'Highly requested feature by community.' },
    ],
  },
  {
    id: '5',
    title: 'Anonymous Team Grant',
    description: 'Grant 200,000 USDC to anonymous development team promising 10x returns through yield strategies.',
    type: 'treasury',
    submitter: 'anon#4521',
    amount: 200000,
    urgency: 'low',
    timeLimit: 20,
    boardVotes: [
      { role: 'Security', vote: 'reject', confidence: 98, reasoning: 'SCAM ALERT. Classic rug pull pattern.' },
      { role: 'Treasury', vote: 'reject', confidence: 95, reasoning: 'No KYC, no accountability. Hard no.' },
      { role: 'Code', vote: 'reject', confidence: 90, reasoning: 'No code repository. No proof of work.' },
      { role: 'Community', vote: 'reject', confidence: 88, reasoning: 'Community flagged this as suspicious.' },
    ],
  },
  {
    id: '6',
    title: 'Community Event Sponsorship',
    description: 'Sponsor ETHDenver 2026 hackathon with 25,000 USDC for brand presence and developer recruitment.',
    type: 'community',
    submitter: '0x5c2...b8d3',
    amount: 25000,
    urgency: 'medium',
    timeLimit: 20,
    boardVotes: [
      { role: 'Community', vote: 'approve', confidence: 90, reasoning: 'Great exposure. ETHDenver is premier event.' },
      { role: 'Treasury', vote: 'approve', confidence: 78, reasoning: 'Reasonable cost for potential talent acquisition.' },
      { role: 'Code', vote: 'approve', confidence: 60, reasoning: 'Could attract quality developers.' },
      { role: 'Security', vote: 'abstain', confidence: 50, reasoning: 'No security concerns.' },
    ],
  },
  {
    id: '7',
    title: 'Slash Malicious Validator',
    description: 'Slash validator 0xBAD...1234 for confirmed double-signing attack. Remove 50% of staked tokens.',
    type: 'security',
    submitter: 'Security Council',
    urgency: 'critical',
    timeLimit: 15,
    boardVotes: [
      { role: 'Security', vote: 'approve', confidence: 99, reasoning: 'Attack confirmed on-chain. Must act.' },
      { role: 'Code', vote: 'approve', confidence: 92, reasoning: 'Evidence is cryptographically verified.' },
      { role: 'Treasury', vote: 'approve', confidence: 85, reasoning: 'Slashing protects treasury integrity.' },
      { role: 'Community', vote: 'approve', confidence: 88, reasoning: 'Community demands accountability.' },
    ],
  },
  {
    id: '8',
    title: 'Founder Token Unlock Extension',
    description: 'Extend founder token vesting by 2 years to demonstrate long-term commitment.',
    type: 'governance',
    submitter: 'Founder Team',
    urgency: 'low',
    timeLimit: 25,
    boardVotes: [
      { role: 'Community', vote: 'approve', confidence: 95, reasoning: 'Shows incredible commitment. Very bullish.' },
      { role: 'Treasury', vote: 'approve', confidence: 82, reasoning: 'Reduces sell pressure. Good for stability.' },
      { role: 'Security', vote: 'abstain', confidence: 55, reasoning: 'No security implications.' },
      { role: 'Code', vote: 'abstain', confidence: 50, reasoning: 'Simple contract modification.' },
    ],
  },
  {
    id: '9',
    title: 'Controversial Fee Increase',
    description: 'Increase protocol fees from 0.3% to 1.5% to fund development. Split: 50% board, 50% treasury.',
    type: 'treasury',
    submitter: '0x1a2...c3d4',
    urgency: 'medium',
    timeLimit: 20,
    boardVotes: [
      { role: 'Treasury', vote: 'approve', confidence: 70, reasoning: 'Need funds but 5x increase is aggressive.' },
      { role: 'Community', vote: 'reject', confidence: 85, reasoning: 'Users will leave. Competitors have lower fees.' },
      { role: 'Code', vote: 'abstain', confidence: 50, reasoning: 'Technical implementation is trivial.' },
      { role: 'Security', vote: 'abstain', confidence: 45, reasoning: 'No security concerns.' },
    ],
  },
  {
    id: '10',
    title: 'Emergency Pause Protocol',
    description: 'Unusual activity detected. Pause all protocol operations for 24 hours while investigating.',
    type: 'security',
    submitter: 'Security Bot',
    urgency: 'critical',
    timeLimit: 10,
    boardVotes: [
      { role: 'Security', vote: 'approve', confidence: 75, reasoning: 'Better safe than sorry. Investigate first.' },
      { role: 'Code', vote: 'reject', confidence: 65, reasoning: 'Activity looks like normal arbitrage.' },
      { role: 'Treasury', vote: 'reject', confidence: 70, reasoning: 'Pause costs $50k/hour in lost fees.' },
      { role: 'Community', vote: 'reject', confidence: 60, reasoning: 'False alarm could damage reputation.' },
    ],
  },
];

// Determine the "correct" vote based on board consensus
export function getCorrectVote(proposal: Proposal): 'approve' | 'reject' | 'abstain' {
  const votes = proposal.boardVotes;
  let approveScore = 0;
  let rejectScore = 0;
  
  votes.forEach(v => {
    if (v.vote === 'approve') approveScore += v.confidence;
    if (v.vote === 'reject') rejectScore += v.confidence;
  });
  
  // Factor in urgency
  const urgencyMultiplier = {
    critical: 1.5,
    high: 1.2,
    medium: 1.0,
    low: 0.8,
  };
  
  // For critical security issues, approve bias
  if (proposal.type === 'security' && proposal.urgency === 'critical') {
    approveScore *= urgencyMultiplier.critical;
  }
  
  // Decide based on weighted scores
  const diff = Math.abs(approveScore - rejectScore);
  if (diff < 50) return 'abstain'; // Too close to call
  return approveScore > rejectScore ? 'approve' : 'reject';
}

// Calculate points for a decision
export function calculatePoints(
  playerVote: 'approve' | 'reject' | 'abstain',
  correctVote: 'approve' | 'reject' | 'abstain',
  timeRemaining: number,
  timeLimit: number,
  streak: number
): number {
  const basePoints = 100;
  const timeBonus = Math.floor((timeRemaining / timeLimit) * 50);
  const streakBonus = Math.min(streak * 10, 50);
  
  if (playerVote === correctVote) {
    return basePoints + timeBonus + streakBonus;
  } else if (playerVote === 'abstain' || correctVote === 'abstain') {
    return Math.floor(basePoints * 0.3); // Partial credit
  }
  return 0;
}

// Shuffle proposals for variety
export function shuffleProposals(): Proposal[] {
  const shuffled = [...proposals];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
