import { AgentCharacter } from '../characters';
import { Button } from '../../components';

interface TutorialModalProps {
  selectedAgents: AgentCharacter[];
  onClose: () => void;
}

export function TutorialModal({ selectedAgents, onClose }: TutorialModalProps) {
  const boardMembers = selectedAgents.filter(a => a.role !== 'director');
  const director = selectedAgents.find(a => a.role === 'director');

  return (
    <div className="tutorial-modal-overlay" onClick={onClose}>
      <div className="tutorial-modal" onClick={(e) => e.stopPropagation()}>
        <div className="tutorial-modal__header">
          <h2 className="tutorial-modal__title">🎓 How Your Council Works</h2>
          <button className="tutorial-modal__close" onClick={onClose}>×</button>
        </div>

        <div className="tutorial-modal__content">
          <p className="tutorial-modal__intro">
            Your selected AI agents will influence how proposals are evaluated and decided.
            Each agent brings their unique perspective, personality, and expertise to the table.
          </p>

          {/* Board Members Section */}
          <div className="tutorial-section">
            <h3 className="tutorial-section__title">Board Members Analyze</h3>
            <p className="tutorial-section__desc">
              Your {boardMembers.length} board member{boardMembers.length !== 1 ? 's' : ''} will:
            </p>
            <ul className="tutorial-list">
              <li>Review each proposal from their specialized perspective</li>
              <li>Provide votes with confidence scores based on their expertise</li>
              <li>Give reasoning that reflects their personality traits</li>
            </ul>
            
            <div className="tutorial-agents">
              {boardMembers.map((agent) => (
                <div key={agent.id} className="tutorial-agent-card" style={{ '--agent-color': agent.color } as React.CSSProperties}>
                  <span className="tutorial-agent-card__avatar">{agent.avatar}</span>
                  <div>
                    <div className="tutorial-agent-card__name">{agent.name}</div>
                    <div className="tutorial-agent-card__role">{agent.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Director Section */}
          {director && (
            <div className="tutorial-section">
              <h3 className="tutorial-section__title">Director Makes Final Decision</h3>
              <p className="tutorial-section__desc">
                Your director synthesizes all board input and makes the final call:
              </p>
              <ul className="tutorial-list">
                <li>Weighs all board member votes and confidence levels</li>
                <li>Applies their own risk tolerance and decision-making style</li>
                <li>Renders the final APPROVE, REJECT, or ABSTAIN decision</li>
              </ul>
              
              <div className="tutorial-director">
                <div className="tutorial-agent-card tutorial-agent-card--director" style={{ '--agent-color': director.color } as React.CSSProperties}>
                  <span className="tutorial-agent-card__avatar">{director.avatar}</span>
                  <div>
                    <div className="tutorial-agent-card__name">{director.name}</div>
                    <div className="tutorial-agent-card__role">{director.title}</div>
                  </div>
                </div>
                <p className="tutorial-director__personality">
                  "{director.personality}"
                </p>
              </div>
            </div>
          )}

          {/* How It Affects Gameplay */}
          <div className="tutorial-section tutorial-section--highlight">
            <h3 className="tutorial-section__title">💡 What This Means</h3>
            <p className="tutorial-section__desc">
              In <strong>Human Mode</strong>, you'll see your agents' analysis and can make your own decision.
              In <strong>Bot Mode</strong>, your agents will automatically deliberate and decide based on their personalities.
            </p>
            <p className="tutorial-section__desc">
              Different agent combinations create different governance styles:
            </p>
            <ul className="tutorial-list tutorial-list--examples">
              <li><strong>Conservative:</strong> Low risk tolerance agents = more rejections</li>
              <li><strong>Aggressive:</strong> High risk tolerance = more approvals</li>
              <li><strong>Balanced:</strong> Mixed team = nuanced decisions</li>
            </ul>
          </div>
        </div>

        <div className="tutorial-modal__footer">
          <Button variant="primary" onClick={onClose} className="tutorial-modal__button">
            Got It! Begin Governance →
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TutorialModal;
