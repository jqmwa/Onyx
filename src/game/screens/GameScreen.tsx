import { useEffect, useState, useCallback } from 'react';
import { Proposal, VoteType, GameMode, Decision } from '../types';
import { getCorrectVote, calculatePoints } from '../data';
import { ProgressBar } from '../../components';

interface GameScreenProps {
  mode: GameMode;
  proposal: Proposal;
  round: number;
  totalRounds: number;
  score: number;
  streak: number;
  onVote: (vote: VoteType, decision: Decision) => void;
}

export function GameScreen({ 
  mode, 
  proposal, 
  round, 
  totalRounds, 
  score,
  streak,
  onVote 
}: GameScreenProps) {
  const [timeRemaining, setTimeRemaining] = useState(proposal.timeLimit);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [isVoting, setIsVoting] = useState(false);

  // Timer countdown
  useEffect(() => {
    setTimeRemaining(proposal.timeLimit);
    setShowFeedback(null);
    setIsVoting(false);
  }, [proposal]);

  useEffect(() => {
    if (isVoting || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          // Time's up - auto abstain
          handleVote('abstain');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVoting, timeRemaining]);

  const handleVote = useCallback((vote: VoteType) => {
    if (isVoting) return;
    setIsVoting(true);

    const correctVote = getCorrectVote(proposal);
    const wasCorrect = vote === correctVote;
    const points = calculatePoints(vote, correctVote, timeRemaining, proposal.timeLimit, streak);

    const decision: Decision = {
      proposalId: proposal.id,
      playerVote: vote,
      correctVote,
      timeSpent: proposal.timeLimit - timeRemaining,
      pointsEarned: points,
      wasCorrect,
    };

    setShowFeedback(wasCorrect ? 'correct' : 'incorrect');

    // Show feedback briefly then proceed
    setTimeout(() => {
      onVote(vote, decision);
    }, 1200);
  }, [isVoting, proposal, timeRemaining, streak, onVote]);

  // Bot mode auto-decision
  useEffect(() => {
    if (mode === 'bot' && !isVoting) {
      const botDelay = 3000 + Math.random() * 2000; // 3-5 seconds
      const timer = setTimeout(() => {
        const correctVote = getCorrectVote(proposal);
        handleVote(correctVote);
      }, botDelay);
      return () => clearTimeout(timer);
    }
  }, [mode, proposal, isVoting, handleVote]);

  const urgencyColors: Record<string, string> = {
    critical: 'var(--game-danger)',
    high: 'var(--game-warning)',
    medium: 'var(--game-accent)',
    low: 'var(--game-text-dim)',
  };

  return (
    <div className="screen game-screen">
      {/* Feedback Overlay */}
      {showFeedback && (
        <div className={`decision-feedback decision-feedback--${showFeedback}`}>
          {showFeedback === 'correct' ? '✓ Correct!' : '✗ Incorrect'}
        </div>
      )}

      {/* Header Stats */}
      <div className="game-header">
        <div className="game-header__stat">
          <span className="game-header__label">Round</span>
          <span className="game-header__value">{round}/{totalRounds}</span>
        </div>

        <div className="game-header__stat">
          <span className="game-header__label">Time</span>
          <span className={`game-header__value ${timeRemaining <= 5 ? 'game-header__value--danger' : ''}`}>
            {timeRemaining}s
          </span>
        </div>

        <div className="game-header__stat">
          <span className="game-header__label">Score</span>
          <span className="game-header__value">{score}</span>
        </div>

        <div className="game-header__stat">
          <span className="game-header__label">Streak</span>
          <span className="game-header__value">🔥 {streak}</span>
        </div>
      </div>

      {/* Timer Progress Bar */}
      <div style={{ width: '100%', maxWidth: '1000px' }}>
        <ProgressBar 
          value={timeRemaining} 
          max={proposal.timeLimit}
          className={timeRemaining <= 5 ? 'timer-danger' : ''}
        />
      </div>

      {/* Proposal Card */}
      <div className="proposal-card">
        <div className="proposal-card__header">
          <span className={`proposal-card__type proposal-card__type--${proposal.type}`}>
            {proposal.type}
          </span>
          <h2 className="proposal-card__title">{proposal.title}</h2>
          <div className="proposal-card__meta">
            <span>Submitter: {proposal.submitter}</span>
            {proposal.amount && <span>Amount: ${proposal.amount.toLocaleString()}</span>}
            <span style={{ color: urgencyColors[proposal.urgency] }}>
              Urgency: {proposal.urgency.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="proposal-card__body">
          <p className="proposal-card__description">{proposal.description}</p>

          <h4 style={{ 
            fontFamily: 'var(--font-game-title)', 
            fontSize: '0.875rem',
            color: 'var(--game-text-dim)',
            marginBottom: '0.75rem',
            letterSpacing: '0.1em'
          }}>
            Board Deliberation
          </h4>

          <div className="board-votes">
            {proposal.boardVotes.map((vote, index) => (
              <div key={index} className={`board-vote board-vote--${vote.vote}`}>
                <div className="board-vote__header">
                  <span className="board-vote__role">{vote.role}</span>
                  <span className="board-vote__confidence">{vote.confidence}% confident</span>
                </div>
                <p className="board-vote__reasoning">{vote.reasoning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vote Actions */}
        {mode === 'human' && !isVoting && (
          <div className="vote-actions">
            <button 
              className="vote-button vote-button--approve"
              onClick={() => handleVote('approve')}
            >
              ✓ Approve
            </button>
            <button 
              className="vote-button vote-button--abstain"
              onClick={() => handleVote('abstain')}
            >
              ○ Abstain
            </button>
            <button 
              className="vote-button vote-button--reject"
              onClick={() => handleVote('reject')}
            >
              ✗ Reject
            </button>
          </div>
        )}

        {mode === 'bot' && (
          <div className="vote-actions">
            <p style={{ 
              fontFamily: 'var(--font-game-title)', 
              color: 'var(--game-text-dim)',
              letterSpacing: '0.1em'
            }}>
              🤖 AI Agent is deliberating...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameScreen;
