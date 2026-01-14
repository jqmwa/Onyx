import { useState, useEffect } from 'react';
import { TreasuryConfig, treasuryConfigs } from '../characters';
import { Button } from '../../components';

interface TreasuryScreenProps {
  onSelectTreasury: (config: TreasuryConfig) => void;
}

export function TreasuryScreen({ onSelectTreasury }: TreasuryScreenProps) {
  const [selectedSize, setSelectedSize] = useState<TreasuryConfig['size'] | null>(null);
  const [animatedAmount, setAnimatedAmount] = useState(0);
  const [showVault, setShowVault] = useState(false);

  const selectedConfig = treasuryConfigs.find(c => c.size === selectedSize);

  // Animate vault appearance
  useEffect(() => {
    const timer = setTimeout(() => setShowVault(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Animate amount counter when selection changes
  useEffect(() => {
    if (!selectedConfig) {
      setAnimatedAmount(0);
      return;
    }

    const target = selectedConfig.amount;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setAnimatedAmount(target);
        clearInterval(timer);
      } else {
        setAnimatedAmount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [selectedConfig]);

  const handleContinue = () => {
    if (selectedConfig) {
      onSelectTreasury(selectedConfig);
    }
  };

  const formatAmount = (amount: number) => {
    if (amount >= 1000000000) return `$${(amount / 1000000000).toFixed(1)}B`;
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
    if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`;
    return `$${amount}`;
  };

  return (
    <div className="screen treasury-screen">
      <div className="treasury-screen__header">
        <h1 className="treasury-screen__title">THE TREASURY</h1>
        <p className="treasury-screen__subtitle">Select the treasury you'll be guarding</p>
      </div>

      {/* Animated Vault Display */}
      <div className={`treasury-vault ${showVault ? 'treasury-vault--visible' : ''}`}>
        <div className="treasury-vault__icon">🏛️</div>
        <div className="treasury-vault__amount">
          {selectedConfig ? (
            <>
              <span className="treasury-vault__currency">{selectedConfig.currency}</span>
              <span className="treasury-vault__value">{formatAmount(animatedAmount)}</span>
            </>
          ) : (
            <span className="treasury-vault__placeholder">Select Size</span>
          )}
        </div>
        {selectedConfig && (
          <div className="treasury-vault__risk">{selectedConfig.riskLevel}</div>
        )}
      </div>

      {/* Treasury Size Options */}
      <div className="treasury-options">
        {treasuryConfigs.map((config) => (
          <div
            key={config.size}
            className={`treasury-option ${selectedSize === config.size ? 'treasury-option--selected' : ''}`}
            onClick={() => setSelectedSize(config.size)}
          >
            <div className="treasury-option__size">{config.size.toUpperCase()}</div>
            <div className="treasury-option__amount">{formatAmount(config.amount)}</div>
            <div className="treasury-option__desc">{config.description}</div>
          </div>
        ))}
      </div>

      {/* Warning Message */}
      <div className="treasury-warning">
        <span className="treasury-warning__icon">⚠️</span>
        <span className="treasury-warning__text">
          Larger treasuries attract more sophisticated attacks. Choose wisely.
        </span>
      </div>

      <Button
        variant="primary"
        onClick={handleContinue}
        disabled={!selectedConfig}
        style={{
          marginTop: '2rem',
          fontFamily: 'var(--font-game-title)',
          letterSpacing: '0.1em',
        }}
      >
        {selectedConfig ? 'Choose Your Guardians →' : 'Select Treasury Size'}
      </Button>
    </div>
  );
}

export default TreasuryScreen;
