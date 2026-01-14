import { useState } from 'react';
import { Discord, Telegram } from '../../icons';
import { GameMode } from '../types';
import { Button } from '../../components';

interface MenuScreenProps {
  onStartGame: (mode: GameMode) => void;
}

export function MenuScreen({ onStartGame }: MenuScreenProps) {
  const [selectedMode, setSelectedMode] = useState<GameMode | null>(null);

  const handleStart = () => {
    if (selectedMode) {
      onStartGame(selectedMode);
    }
  };

  return (
    <div className="screen menu-screen">
      <h1 className="menu-screen__title">Autocrat</h1>
      <p className="game-subtitle" style={{ marginBottom: '1rem' }}>
        Select Your Governance Mode
      </p>

      <div className="menu-screen__modes">
        <div 
          className={`mode-card ${selectedMode === 'human' ? 'mode-card--selected' : ''}`}
          onClick={() => setSelectedMode('human')}
        >
          <div className="mode-card__icon">👤</div>
          <h3 className="mode-card__title">Human Mode</h3>
          <p className="mode-card__desc">
            Make decisions yourself. Analyze board votes, weigh risks, 
            and build your reputation as a governance expert.
          </p>
        </div>

        <div 
          className={`mode-card ${selectedMode === 'bot' ? 'mode-card--selected' : ''}`}
          onClick={() => setSelectedMode('bot')}
        >
          <div className="mode-card__icon">🤖</div>
          <h3 className="mode-card__title">Bot Mode</h3>
          <p className="mode-card__desc">
            Watch AI agents deliberate and decide. Learn governance 
            patterns from autonomous decision-making.
          </p>
        </div>
      </div>

      <Button 
        variant="primary" 
        onClick={handleStart}
        disabled={!selectedMode}
        className="menu-screen__start-button"
      >
        {selectedMode ? 'Start Game' : 'Select a Mode'}
      </Button>

      <div className="social-links">
        <a 
          href="https://discord.gg/onyx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-button social-button--discord"
        >
          <Discord size="md" />
          Join Discord
        </a>
        <a 
          href="https://t.me/onyxgame" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-button social-button--telegram"
        >
          <Telegram size="md" />
          Telegram
        </a>
      </div>

      <p style={{ 
        marginTop: '3rem', 
        fontSize: '0.875rem', 
        color: 'var(--game-text-dim)',
        maxWidth: '500px',
        textAlign: 'center',
        lineHeight: '1.6'
      }}>
        Face real DAO governance scenarios. Approve critical security patches,
        reject scam proposals, and navigate controversial decisions under time pressure.
      </p>
    </div>
  );
}

export default MenuScreen;
