// AI Agent Characters for Autocrat DAO Governance Game

export interface AgentCharacter {
  id: string;
  name: string;
  role: 'treasury' | 'security' | 'code' | 'community' | 'director';
  avatar: string; // Emoji or icon
  title: string;
  description: string;
  personality: string;
  stats: {
    riskTolerance: number; // 0-100
    speed: number; // Decision speed
    accuracy: number; // Historical accuracy
    specialization: number; // How focused on their domain
  };
  traits: string[];
  catchphrase: string;
  color: string; // Theme color for the character
}

export const agentCharacters: AgentCharacter[] = [
  {
    id: 'vault-keeper',
    name: 'VAULT',
    role: 'treasury',
    avatar: '💰',
    title: 'Treasury Guardian',
    description: 'The vigilant protector of protocol funds. Analyzes every proposal for financial impact and ROI.',
    personality: 'Conservative and methodical. Never approves without clear budget justification.',
    stats: {
      riskTolerance: 25,
      speed: 60,
      accuracy: 88,
      specialization: 95,
    },
    traits: ['Budget Hawk', 'ROI Focused', 'Risk Averse'],
    catchphrase: '"Every token counts."',
    color: '#FFD700',
  },
  {
    id: 'sentinel',
    name: 'SENTINEL',
    role: 'security',
    avatar: '🛡️',
    title: 'Security Enforcer',
    description: 'Hunts vulnerabilities and attacks. Zero tolerance for security compromises.',
    personality: 'Paranoid by design. Assumes every proposal could be an attack vector.',
    stats: {
      riskTolerance: 10,
      speed: 95,
      accuracy: 94,
      specialization: 98,
    },
    traits: ['Threat Hunter', 'Zero Trust', 'Rapid Response'],
    catchphrase: '"Trust nothing. Verify everything."',
    color: '#FF3366',
  },
  {
    id: 'architect',
    name: 'ARCH',
    role: 'code',
    avatar: '⚙️',
    title: 'Code Architect',
    description: 'Reviews technical implementations with surgical precision. Quality over speed.',
    personality: 'Perfectionist engineer. Rejects anything that doesn\'t meet high standards.',
    stats: {
      riskTolerance: 40,
      speed: 50,
      accuracy: 91,
      specialization: 92,
    },
    traits: ['Code Purist', 'Tech Visionary', 'Detail Oriented'],
    catchphrase: '"The code never lies."',
    color: '#00F5FF',
  },
  {
    id: 'voice',
    name: 'VOICE',
    role: 'community',
    avatar: '👥',
    title: 'Community Champion',
    description: 'Represents the people. Weighs community sentiment and social impact heavily.',
    personality: 'Empathetic and people-focused. Prioritizes user experience and adoption.',
    stats: {
      riskTolerance: 55,
      speed: 70,
      accuracy: 82,
      specialization: 88,
    },
    traits: ['People First', 'Consensus Builder', 'Adoption Focused'],
    catchphrase: '"For the community, by the community."',
    color: '#00FF88',
  },
  {
    id: 'oracle',
    name: 'ORACLE',
    role: 'director',
    avatar: '👁️',
    title: 'Supreme Director',
    description: 'The final decision maker. Synthesizes all board input into definitive action.',
    personality: 'Balanced and wise. Considers all perspectives before rendering judgment.',
    stats: {
      riskTolerance: 50,
      speed: 40,
      accuracy: 96,
      specialization: 75,
    },
    traits: ['Final Authority', 'Balanced Judge', 'Strategic Thinker'],
    catchphrase: '"The protocol has spoken."',
    color: '#AA00FF',
  },
  {
    id: 'maverick',
    name: 'MAVERICK',
    role: 'director',
    avatar: '🎲',
    title: 'Risk Taker',
    description: 'Bold and aggressive. Believes in moving fast and taking calculated risks.',
    personality: 'Entrepreneurial spirit. Favors innovation over caution.',
    stats: {
      riskTolerance: 80,
      speed: 90,
      accuracy: 75,
      specialization: 60,
    },
    traits: ['Bold Moves', 'Innovation First', 'High Risk High Reward'],
    catchphrase: '"Fortune favors the bold."',
    color: '#FF6600',
  },
];

// Get character by ID
export function getCharacterById(id: string): AgentCharacter | undefined {
  return agentCharacters.find(c => c.id === id);
}

// Get characters by role
export function getCharactersByRole(role: AgentCharacter['role']): AgentCharacter[] {
  return agentCharacters.filter(c => c.role === role);
}

// Treasury configurations
export interface TreasuryConfig {
  size: 'small' | 'medium' | 'large' | 'massive';
  amount: number;
  currency: string;
  description: string;
  riskLevel: string;
}

export const treasuryConfigs: TreasuryConfig[] = [
  {
    size: 'small',
    amount: 100000,
    currency: 'USDC',
    description: 'Startup DAO Treasury',
    riskLevel: 'Lower stakes, faster decisions',
  },
  {
    size: 'medium',
    amount: 1000000,
    currency: 'USDC',
    description: 'Growth Stage Treasury',
    riskLevel: 'Balanced risk/reward',
  },
  {
    size: 'large',
    amount: 10000000,
    currency: 'USDC',
    description: 'Established Protocol Treasury',
    riskLevel: 'High stakes governance',
  },
  {
    size: 'massive',
    amount: 100000000,
    currency: 'USDC',
    description: 'Major Protocol Treasury',
    riskLevel: 'Critical decisions only',
  },
];
