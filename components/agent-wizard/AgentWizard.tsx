"use client";

import { useState } from "react";
import { WizardStepper, WizardStep } from "./WizardStepper";
import { AgentPreview } from "./AgentPreview";
import { WizardNavigation } from "./WizardNavigation";
import { AgentConfig } from "./steps/AgentConfig";
import { KnowledgeSources } from "./steps/KnowledgeSources";
import { IntegrationSettings } from "./steps/IntegrationSettings";
import { AutomationRules } from "./steps/AutomationRules";

const STEPS = [
  {
    id: "agent-config",
    title: "Agent Configuration",
    heading: "Configure Your Agent",
    description: "Set up your agent's identity, type, and personality.",
  },
  {
    id: "knowledge",
    title: "Knowledge Sources",
    heading: "Connect Knowledge",
    description: "Add documents and data sources your agent can reference.",
  },
  {
    id: "integrations",
    title: "Integration Settings",
    heading: "Connect Integrations",
    description: "Link the tools and platforms your agent will work with.",
  },
  {
    id: "automation",
    title: "Automation Rules",
    heading: "Set Automation Rules",
    description: "Define how your agent categorizes, routes, and handles tasks.",
  },
];

export function AgentWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPreview, setShowPreview] = useState(true);

  // Step 1: Agent Config
  const [agentConfig, setAgentConfig] = useState({
    name: "",
    type: "support",
    personality: "professional",
  });

  // Step 2: Knowledge Sources
  const [sources, setSources] = useState<string[]>([]);

  // Step 3: Integrations
  const [integrations, setIntegrations] = useState([
    { id: "zendesk", name: "Zendesk", description: "Ticket management and routing", connected: false },
    { id: "slack", name: "Slack", description: "Team notifications and alerts", connected: false },
    { id: "intercom", name: "Intercom", description: "Live chat integration", connected: false },
    { id: "linear", name: "Linear", description: "Issue tracking and project management", connected: false },
    { id: "notion", name: "Notion", description: "Knowledge base sync", connected: false },
    { id: "github", name: "GitHub", description: "Code and issue references", connected: false },
  ]);

  // Step 4: Automation Rules
  const [automationRules, setAutomationRules] = useState({
    name: "",
    routeVia: "zendesk",
    confidence: "high",
    autonomy: "review",
    keywords: [] as string[],
    frequency: "continuous",
    hours: "24/7",
    days: "mon-sun",
  });

  const topSteps: WizardStep[] = STEPS.map((step, i) => ({
    id: step.id,
    number: i + 1,
    title: step.title,
    subtitle:
      i === 0
        ? agentConfig.name || "Not configured"
        : i === 1
          ? sources.length > 0
            ? `${sources.length} Source${sources.length !== 1 ? "s" : ""}`
            : "No sources"
          : i === 2
            ? `${integrations.filter((int) => int.connected).length} Connected`
            : automationRules.name || "Not configured",
    status:
      i < currentStep ? "complete" : i === currentStep ? "current" : "pending",
  }));

  const progress = Math.round(((currentStep + 1) / STEPS.length) * 100);

  const goNext = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep(currentStep + 1);
  };

  const goPrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const step = STEPS[currentStep];
  const prevStep = currentStep > 0 ? STEPS[currentStep - 1] : null;
  const nextStep =
    currentStep < STEPS.length - 1 ? STEPS[currentStep + 1] : null;

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <AgentConfig config={agentConfig} onChange={setAgentConfig} />;
      case 1:
        return (
          <KnowledgeSources
            sources={sources}
            onAddSource={(s) => setSources([...sources, s])}
            onRemoveSource={(i) =>
              setSources(sources.filter((_, idx) => idx !== i))
            }
          />
        );
      case 2:
        return (
          <IntegrationSettings
            integrations={integrations}
            onToggle={(id) =>
              setIntegrations(
                integrations.map((int) =>
                  int.id === id
                    ? { ...int, connected: !int.connected }
                    : int
                )
              )
            }
          />
        );
      case 3:
        return (
          <AutomationRules
            rules={automationRules}
            onChange={setAutomationRules}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-onyx-bg">
      {/* Top header label */}
      <div className="px-6 py-2 bg-onyx-bg">
        <span className="font-mono text-2xs uppercase tracking-[0.14em] text-onyx-text-muted">
          Agent Setup
        </span>
      </div>

      {/* Stepper */}
      <WizardStepper steps={topSteps} onClose={() => {}} />

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left heading + progress */}
        <div className="w-64 flex-shrink-0 flex flex-col border-r border-onyx-border-subtle bg-onyx-surface-raised">
          <div className="flex-1 p-6">
            <h2 className="text-xl font-medium text-onyx-text-primary">
              {step.heading}
            </h2>
            <p className="text-sm text-onyx-text-secondary mt-1.5">
              {step.description}
            </p>

            {/* Step indicators */}
            <div className="mt-8 space-y-0.5">
              {STEPS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentStep(i)}
                  className={`w-full flex items-center gap-3 px-2 py-3 rounded-onyx transition-colors text-left ${
                    i === currentStep ? "bg-onyx-hover" : "hover:bg-onyx-hover/50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-medium flex-shrink-0 transition-all duration-200 ${
                      i === currentStep
                        ? "bg-onyx-active text-white"
                        : "bg-onyx-circle-bg text-onyx-circle-icon"
                    }`}
                  >
                    {i < currentStep ? (
                      <svg width="14" height="14" viewBox="0 0 64 64" fill="none">
                        <path d="M12 32L26 46L52 18" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span
                    className={`font-mono text-xs uppercase tracking-[0.08em] ${
                      i === currentStep
                        ? "text-onyx-text-primary font-medium"
                        : i < currentStep
                          ? "text-onyx-text-secondary"
                          : "text-onyx-text-muted"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="p-6 pt-4">
            <div className="h-2 bg-onyx-progress-track rounded-full overflow-hidden">
              <div
                className="h-full bg-onyx-progress rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="font-mono text-2xs uppercase tracking-[0.12em] text-onyx-text-muted mt-2">
              {progress}% Completed
            </div>
          </div>
        </div>

        {/* Center content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-8 py-8">
            {renderStepContent()}
          </div>
        </div>

        {/* Preview panel */}
        {showPreview && (
          <AgentPreview
            agentName={agentConfig.name}
            onClose={() => setShowPreview(false)}
          />
        )}
      </div>

      {/* Bottom navigation */}
      <WizardNavigation
        previousLabel={prevStep?.title}
        nextLabel={nextStep?.title}
        onPrevious={prevStep ? goPrev : undefined}
        onNext={nextStep ? goNext : undefined}
        showPrevious={!!prevStep}
        showNext={!!nextStep}
      />
    </div>
  );
}
