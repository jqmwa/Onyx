import { Decision } from '../types';
import { Button } from '../../components';

interface ResultScreenProps {
  score: number;
  decisions: Decision[];
  onPlayAgain: () => void;
  onMainMenu: () => void;
}

export function ResultScreen({ score, decisions, onPlayAgain, onMainMenu }: ResultScreenProps) {
  const correctCount = decisions.filter(d => d.wasCorrect).length;
  const accuracy = decisions.length > 0 
    ? Math.round((correctCount / decisions.length) * 100) 
    : 0;
  const avgTime = decisions.length > 0
    ? Math.round(decisions.reduce((sum, d) => sum + d.timeSpent, 0) / decisions.length)
    : 0;

  // Determine rating
  let rating = 'Novice';
  let ratingEmoji = '🌱';
  if (accuracy >= 90) { rating = 'Governance Legend'; ratingEmoji = '👑'; }
  else if (accuracy >= 80) { rating = 'Expert Director'; ratingEmoji = '⭐'; }
  else if (accuracy >= 70) { rating = 'Senior Board Member'; ratingEmoji = '🎯'; }
  else if (accuracy >= 60) { rating = 'Board Member'; ratingEmoji = '📊'; }
  else if (accuracy >= 50) { rating = 'Junior Analyst'; ratingEmoji = '📈'; }

  return (
    <div className="screen result-screen">
      <h1 className="result-screen__title">Game Complete!</h1>
      
      <div className="result-screen__score">{score}</div>
      <p style={{ fontSize: '1.25rem', color: 'var(--game-text-dim)' }}>Total Points</p>

      <div style={{ 
        marginTop: '1.5rem',
        padding: '1rem 2rem',
        background: 'rgba(0, 245, 255, 0.1)',
        borderRadius: '8px',
        border: '1px solid var(--game-accent)'
      }}>
        <span style={{ fontSize: '2rem', marginRight: '0.75rem' }}>{ratingEmoji}</span>
        <span style={{ 
          fontFamily: 'var(--font-game-title)', 
          fontSize: '1.5rem',
          color: 'var(--game-accent)'
        }}>
          {rating}
        </span>
      </div>

      <div className="result-screen__stats">
        <div className="result-stat">
          <div className="result-stat__value">{correctCount}/{decisions.length}</div>
          <div className="result-stat__label">Correct Decisions</div>
        </div>
        <div className="result-stat">
          <div className="result-stat__value">{accuracy}%</div>
          <div className="result-stat__label">Accuracy</div>
        </div>
        <div className="result-stat">
          <div className="result-stat__value">{avgTime}s</div>
          <div className="result-stat__label">Avg. Decision Time</div>
        </div>
      </div>

      {/* Decision Breakdown */}
      <div style={{ 
        width: '100%', 
        maxWidth: '600px', 
        marginTop: '2rem',
        textAlign: 'left'
      }}>
        <h3 style={{ 
          fontFamily: 'var(--font-game-title)',
          fontSize: '1rem',
          color: 'var(--game-text-dim)',
          marginBottom: '1rem',
          letterSpacing: '0.1em'
        }}>
          Decision History
        </h3>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.5rem',
          maxHeight: '200px',
          overflowY: 'auto'
        }}>
          {decisions.map((decision, index) => (
            <div 
              key={decision.proposalId}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                background: decision.wasCorrect 
                  ? 'rgba(0, 255, 136, 0.1)' 
                  : 'rgba(255, 51, 102, 0.1)',
                borderRadius: '6px',
                borderLeft: `3px solid ${decision.wasCorrect ? 'var(--game-success)' : 'var(--game-danger)'}`,
              }}
            >
              <span style={{ fontSize: '0.875rem' }}>
                Round {index + 1}: {decision.playerVote.toUpperCase()}
                {decision.playerVote !== decision.correctVote && (
                  <span style={{ color: 'var(--game-text-dim)', marginLeft: '0.5rem' }}>
                    (Should: {decision.correctVote})
                  </span>
                )}
              </span>
              <span style={{ 
                fontFamily: 'var(--font-game-title)',
                color: decision.wasCorrect ? 'var(--game-success)' : 'var(--game-danger)'
              }}>
                +{decision.pointsEarned}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <Button 
          variant="primary" 
          onClick={onPlayAgain}
          style={{ fontFamily: 'var(--font-game-title)', letterSpacing: '0.1em' }}
        >
          Play Again
        </Button>
        <Button 
          variant="outline" 
          onClick={onMainMenu}
          style={{ fontFamily: 'var(--font-game-title)', letterSpacing: '0.1em' }}
        >
          Main Menu
        </Button>
      </div>
    </div>
  );
}

export default ResultScreen;
