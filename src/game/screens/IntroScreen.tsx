import { useEffect, useState } from 'react';
import { Spinner } from '../../icons';

interface IntroScreenProps {
  onEnter: () => void;
}

export function IntroScreen({ onEnter }: IntroScreenProps) {
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading / dramatic pause
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 2500);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="screen intro-screen">
      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="intro-screen__logo">
        <h1 className="game-title">ONYX</h1>
        <p className="game-subtitle">DAO GOVERNANCE GAME</p>
      </div>

      <p className="intro-screen__tagline">
        Make critical decisions. Build your governance reputation.
        <br />
        The fate of the protocol is in your hands.
      </p>

      {isLoading ? (
        <div className="loading">
          <Spinner size="lg" />
          <span className="loading__text">Initializing...</span>
        </div>
      ) : showButton ? (
        <button 
          className="shiny-button shiny-button--pulse" 
          onClick={onEnter}
        >
          Enter Game
        </button>
      ) : null}

      <div style={{ 
        position: 'absolute', 
        bottom: '2rem', 
        fontSize: '0.875rem',
        color: 'var(--game-text-dim)',
        letterSpacing: '0.1em'
      }}>
        PRESS ENTER TO CONTINUE
      </div>
    </div>
  );
}

export default IntroScreen;
