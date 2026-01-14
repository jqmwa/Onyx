import { useState, useCallback, useEffect } from 'react';
import { GameState, GameMode, VoteType, Decision, Proposal } from './types';
import { shuffleProposals } from './data';
import { AgentCharacter, TreasuryConfig } from './characters';
import { 
  IntroScreen, 
  MenuScreen, 
  TreasuryScreen,
  CharacterSelectScreen,
  TutorialModal,
  GameScreen, 
  ResultScreen 
} from './screens';
import './game.css';

const TOTAL_ROUNDS = 5;

interface ExtendedGameState extends GameState {
  treasuryConfig: TreasuryConfig | null;
  selectedAgents: AgentCharacter[];
  showTutorial: boolean;
}

const initialState: ExtendedGameState = {
  screen: 'intro',
  mode: 'human',
  score: 0,
  round: 0,
  totalRounds: TOTAL_ROUNDS,
  currentProposal: null,
  decisions: [],
  streak: 0,
  timeRemaining: 0,
  isTimerActive: false,
  treasuryConfig: null,
  selectedAgents: [],
  showTutorial: false,
};

export default function App() {
  const [gameState, setGameState] = useState<ExtendedGameState>(initialState);
  const [proposals, setProposals] = useState<Proposal[]>([]);

  // Initialize proposals
  useEffect(() => {
    setProposals(shuffleProposals());
  }, []);

  // Handle Enter key on intro screen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && gameState.screen === 'intro') {
        setGameState(prev => ({ ...prev, screen: 'menu' }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState.screen]);

  const handleEnterGame = useCallback(() => {
    setGameState(prev => ({ ...prev, screen: 'menu' }));
  }, []);

  const handleSelectMode = useCallback((mode: GameMode) => {
    // Go to Treasury screen after selecting mode
    setGameState(prev => ({ 
      ...prev, 
      mode,
      screen: 'treasury' 
    }));
  }, []);

  const handleSelectTreasury = useCallback((config: TreasuryConfig) => {
    // Go to Character Select after choosing treasury
    setGameState(prev => ({
      ...prev,
      treasuryConfig: config,
      screen: 'character-select',
    }));
  }, []);

  const handleBackToTreasury = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      screen: 'treasury',
      selectedAgents: [],
    }));
  }, []);

  const handleStartGameWithAgents = useCallback((agents: AgentCharacter[]) => {
    // Show tutorial first, then start game
    setGameState(prev => ({
      ...prev,
      selectedAgents: agents,
      showTutorial: true,
    }));
  }, []);

  const handleCloseTutorial = useCallback(() => {
    const shuffled = shuffleProposals();
    setProposals(shuffled);
    setGameState(prev => ({
      ...prev,
      showTutorial: false,
      screen: 'game',
      round: 1,
      score: 0,
      decisions: [],
      streak: 0,
      currentProposal: shuffled[0],
    }));
  }, []);

  const handleVote = useCallback((vote: VoteType, decision: Decision) => {
    setGameState(prev => {
      const newDecisions = [...prev.decisions, decision];
      const newScore = prev.score + decision.pointsEarned;
      const newStreak = decision.wasCorrect ? prev.streak + 1 : 0;
      const nextRound = prev.round + 1;

      // Check if game is complete
      if (nextRound > prev.totalRounds) {
        return {
          ...prev,
          screen: 'result',
          score: newScore,
          decisions: newDecisions,
          streak: newStreak,
          currentProposal: null,
        };
      }

      // Move to next proposal
      return {
        ...prev,
        round: nextRound,
        score: newScore,
        decisions: newDecisions,
        streak: newStreak,
        currentProposal: proposals[nextRound - 1] || null,
      };
    });
  }, [proposals]);

  const handlePlayAgain = useCallback(() => {
    const shuffled = shuffleProposals();
    setProposals(shuffled);
    setGameState(prev => ({
      ...prev,
      screen: 'game',
      round: 1,
      score: 0,
      decisions: [],
      streak: 0,
      currentProposal: shuffled[0],
    }));
  }, []);

  const handleMainMenu = useCallback(() => {
    setGameState({ ...initialState, screen: 'menu' });
  }, []);

  return (
    <div className="game-container">
      {gameState.screen === 'intro' && (
        <IntroScreen onEnter={handleEnterGame} />
      )}

      {gameState.screen === 'menu' && (
        <MenuScreen onStartGame={handleSelectMode} />
      )}

      {gameState.screen === 'treasury' && (
        <TreasuryScreen onSelectTreasury={handleSelectTreasury} />
      )}

      {gameState.screen === 'character-select' && gameState.treasuryConfig && (
        <CharacterSelectScreen
          treasuryConfig={gameState.treasuryConfig}
          onStartGame={handleStartGameWithAgents}
          onBack={handleBackToTreasury}
        />
      )}

      {gameState.showTutorial && gameState.selectedAgents.length > 0 && (
        <TutorialModal
          selectedAgents={gameState.selectedAgents}
          onClose={handleCloseTutorial}
        />
      )}

      {gameState.screen === 'game' && gameState.currentProposal && (
        <GameScreen
          mode={gameState.mode}
          proposal={gameState.currentProposal}
          round={gameState.round}
          totalRounds={gameState.totalRounds}
          score={gameState.score}
          streak={gameState.streak}
          onVote={handleVote}
        />
      )}

      {gameState.screen === 'result' && (
        <ResultScreen
          score={gameState.score}
          decisions={gameState.decisions}
          onPlayAgain={handlePlayAgain}
          onMainMenu={handleMainMenu}
        />
      )}
    </div>
  );
}
