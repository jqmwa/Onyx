import { useState } from 'react';
import { AgentCharacter, agentCharacters, TreasuryConfig } from '../characters';
import { Button, ProgressBar } from '../../components';

interface CharacterSelectScreenProps {
  treasuryConfig: TreasuryConfig;
  onStartGame: (selectedAgents: AgentCharacter[]) => void;
  onBack: () => void;
}

export function CharacterSelectScreen({ 
  treasuryConfig, 
  onStartGame,
  onBack 
}: CharacterSelectScreenProps) {
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [hoveredAgent, setHoveredAgent] = useState<AgentCharacter | null>(null);

  const boardMembers = agentCharacters.filter(a => a.role !== 'director');
  const directors = agentCharacters.filter(a => a.role === 'director');

  const maxSelections = 4; // 3 board members + 1 director

  const toggleAgent = (agentId: string) => {
    const agent = agentCharacters.find(a => a.id === agentId);
    if (!agent) return;

    setSelectedAgents(prev => {
      if (prev.includes(agentId)) {
        return prev.filter(id => id !== agentId);
      }
      
      // Check role limits
      const isDirector = agent.role === 'director';
      const currentDirectors = prev.filter(id => 
        agentCharacters.find(a => a.id === id)?.role === 'director'
      );
      const currentBoard = prev.filter(id => 
        agentCharacters.find(a => a.id === id)?.role !== 'director'
      );

      if (isDirector && currentDirectors.length >= 1) {
        // Replace existing director
        return [...currentBoard, agentId];
      }
      
      if (!isDirector && currentBoard.length >= 3) {
        // Can't add more board members
        return prev;
      }

      if (prev.length >= maxSelections) return prev;
      return [...prev, agentId];
    });
  };

  const handleStart = () => {
    const agents = selectedAgents
      .map(id => agentCharacters.find(a => a.id === id))
      .filter((a): a is AgentCharacter => a !== undefined);
    onStartGame(agents);
  };

  const selectedBoardCount = selectedAgents.filter(id => 
    agentCharacters.find(a => a.id === id)?.role !== 'director'
  ).length;
  
  const hasDirector = selectedAgents.some(id => 
    agentCharacters.find(a => a.id === id)?.role === 'director'
  );

  const canStart = selectedBoardCount >= 2 && hasDirector;

  const formatAmount = (amount: number) => {
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(0)}M`;
    if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`;
    return `$${amount}`;
  };

  return (
    <div className="screen character-select-screen">
      {/* Header */}
      <div className="character-select__header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <div className="character-select__treasury-info">
          <span className="treasury-badge">🏛️ {formatAmount(treasuryConfig.amount)} {treasuryConfig.currency}</span>
        </div>
      </div>

      <h1 className="character-select__title">ASSEMBLE YOUR COUNCIL</h1>
      <p className="character-select__subtitle">
        Select your AI board members and a Director to guard the treasury
      </p>

      {/* Selection Status */}
      <div className="selection-status">
        <div className="selection-status__item">
          <span className="selection-status__label">Board Members</span>
          <span className="selection-status__count">{selectedBoardCount}/3</span>
        </div>
        <div className="selection-status__divider">|</div>
        <div className="selection-status__item">
          <span className="selection-status__label">Director</span>
          <span className="selection-status__count">{hasDirector ? '1/1 ✓' : '0/1'}</span>
        </div>
      </div>

      {/* Board Members Section */}
      <div className="character-section">
        <h2 className="character-section__title">Board Members</h2>
        <p className="character-section__desc">Specialists who analyze proposals from different perspectives</p>
        
        <div className="character-grid">
          {boardMembers.map((agent) => (
            <div
              key={agent.id}
              className={`character-card ${selectedAgents.includes(agent.id) ? 'character-card--selected' : ''}`}
              style={{ '--agent-color': agent.color } as React.CSSProperties}
              onClick={() => toggleAgent(agent.id)}
              onMouseEnter={() => setHoveredAgent(agent)}
              onMouseLeave={() => setHoveredAgent(null)}
            >
              <div className="character-card__avatar">{agent.avatar}</div>
              <div className="character-card__name">{agent.name}</div>
              <div className="character-card__title">{agent.title}</div>
              <div className="character-card__traits">
                {agent.traits.slice(0, 2).map((trait, i) => (
                  <span key={i} className="character-card__trait">{trait}</span>
                ))}
              </div>
              {selectedAgents.includes(agent.id) && (
                <div className="character-card__check">✓</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Directors Section */}
      <div className="character-section">
        <h2 className="character-section__title">Director</h2>
        <p className="character-section__desc">The final decision maker who weighs all board input</p>
        
        <div className="character-grid character-grid--directors">
          {directors.map((agent) => (
            <div
              key={agent.id}
              className={`character-card character-card--director ${selectedAgents.includes(agent.id) ? 'character-card--selected' : ''}`}
              style={{ '--agent-color': agent.color } as React.CSSProperties}
              onClick={() => toggleAgent(agent.id)}
              onMouseEnter={() => setHoveredAgent(agent)}
              onMouseLeave={() => setHoveredAgent(null)}
            >
              <div className="character-card__avatar">{agent.avatar}</div>
              <div className="character-card__name">{agent.name}</div>
              <div className="character-card__title">{agent.title}</div>
              <div className="character-card__traits">
                {agent.traits.slice(0, 2).map((trait, i) => (
                  <span key={i} className="character-card__trait">{trait}</span>
                ))}
              </div>
              {selectedAgents.includes(agent.id) && (
                <div className="character-card__check">✓</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Agent Detail Panel */}
      {hoveredAgent && (
        <div className="agent-detail-panel" style={{ '--agent-color': hoveredAgent.color } as React.CSSProperties}>
          <div className="agent-detail__header">
            <span className="agent-detail__avatar">{hoveredAgent.avatar}</span>
            <div>
              <h3 className="agent-detail__name">{hoveredAgent.name}</h3>
              <p className="agent-detail__title">{hoveredAgent.title}</p>
            </div>
          </div>
          <p className="agent-detail__desc">{hoveredAgent.description}</p>
          <p className="agent-detail__personality">"{hoveredAgent.personality}"</p>
          
          <div className="agent-detail__stats">
            <div className="agent-stat">
              <span className="agent-stat__label">Risk Tolerance</span>
              <ProgressBar value={hoveredAgent.stats.riskTolerance} max={100} />
            </div>
            <div className="agent-stat">
              <span className="agent-stat__label">Decision Speed</span>
              <ProgressBar value={hoveredAgent.stats.speed} max={100} />
            </div>
            <div className="agent-stat">
              <span className="agent-stat__label">Accuracy</span>
              <ProgressBar value={hoveredAgent.stats.accuracy} max={100} />
            </div>
            <div className="agent-stat">
              <span className="agent-stat__label">Specialization</span>
              <ProgressBar value={hoveredAgent.stats.specialization} max={100} />
            </div>
          </div>

          <p className="agent-detail__catchphrase">{hoveredAgent.catchphrase}</p>
        </div>
      )}

      <Button
        variant="primary"
        onClick={handleStart}
        disabled={!canStart}
        style={{
          marginTop: '2rem',
          fontFamily: 'var(--font-game-title)',
          letterSpacing: '0.1em',
        }}
      >
        {canStart ? 'Begin Governance →' : 'Select at least 2 board members + 1 director'}
      </Button>
    </div>
  );
}

export default CharacterSelectScreen;
