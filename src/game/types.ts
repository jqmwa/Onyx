// Game Types for ONYX DAO Governance Game

export type GameScreen = 'intro' | 'menu' | 'treasury' | 'character-select' | 'game' | 'result';

export type GameMode = 'human' | 'bot';

export type VoteType = 'approve' | 'reject' | 'abstain';

export interface BoardVote {
  role: string;
  vote: VoteType;
  confidence: number;
  reasoning: string;
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  type: 'treasury' | 'code' | 'community' | 'security' | 'governance';
  submitter: string;
  amount?: number;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  boardVotes: BoardVote[];
  timeLimit: number; // seconds to decide
}

export interface GameState {
  screen: GameScreen;
  mode: GameMode;
  score: number;
  round: number;
  totalRounds: number;
  currentProposal: Proposal | null;
  decisions: Decision[];
  streak: number;
  timeRemaining: number;
  isTimerActive: boolean;
}

export interface Decision {
  proposalId: string;
  playerVote: VoteType;
  correctVote: VoteType;
  timeSpent: number;
  pointsEarned: number;
  wasCorrect: boolean;
}

export interface GameSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  difficulty: 'easy' | 'normal' | 'hard';
}
