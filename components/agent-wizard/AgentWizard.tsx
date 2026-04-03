"use client";

import { useState } from "react";
import { WizardStepper, WizardStep } from "./WizardStepper";
import { WizardSidebar, SidebarStep } from "./WizardSidebar";
import { AgentPreview } from "./AgentPreview";
import { WizardNavigation } from "./WizardNavigation";
import { AgentConfig } from "./steps/AgentConfig";
import { KnowledgeSources } from "./steps/KnowledgeSources";
import { IntegrationSettings } from "./steps/IntegrationSettings";
import { AutomationRules } from "./steps/AutomationRules";
import { ResponseTemplates } from "./steps/ResponseTemplates";
import { EscalationRules } from "./steps/EscalationRules";
import { FollowUpScheduling } from "./steps/FollowUpScheduling";
import { QualityChecks } from "./steps/QualityChecks";

const WIZARD_PHASES = [
  { id: "agent-config", title: "Agent Configuration", subtitle: "" },
  { id: "knowledge", title: "Knowledge Sources", subtitle: "" },
  { id: "integrations", title: "Integration Settings", subtitle: "" },
  { id: "automation", title: "Automation Rules", subtitle: "" },
];

const SIDEBAR_STEPS: SidebarStep[] = [
  { id: "general", number: 1, label: "General Settings", status: "complete" },
  { id: "templates", number: 2, label: "Response Templates", status: "complete" },
  { id: "triage", number: 3, label: "Ticket Triage", status: "active" },
  { id: "escalation", number: 4, label: "Escalation Rules", status: "pending" },
  { id: "followup", number: 5, label: "Follow-Up Scheduling", status: "pending" },
  { id: "quality", number: 6, label: "Quality Checks", status: "pending" },
];

export function AgentWizard() {
  const [currentPhase, setCurrentPhase] = useState(3); // 0-indexed, phase 4
  const [activeSidebarStep, setActiveSidebarStep] = useState("triage");
  const [showPreview, setShowPreview] = useState(true);

  // Agent Config state
  const [agentConfig, setAgentConfig] = useState({
    name: "Support Specialist",
    type: "support",
    personality: "professional",
  });

  // Knowledge Sources state
  const [sources, setSources] = useState([
    "Help Center Docs",
    "API Documentation",
    "Internal Wiki",
  ]);

  // Integrations state
  const [integrations, setIntegrations] = useState([
    { id: "zendesk", name: "Zendesk", description: "Ticket management and routing", connected: true },
    { id: "slack", name: "Slack", description: "Team notifications and alerts", connected: true },
    { id: "intercom", name: "Intercom", description: "Live chat integration", connected: false },
    { id: "linear", name: "Linear", description: "Issue tracking and project management", connected: false },
    { id: "notion", name: "Notion", description: "Knowledge base sync", connected: false },
    { id: "github", name: "GitHub", description: "Code and issue references", connected: false },
  ]);

  // Automation Rules state
  const [automationRules, setAutomationRules] = useState({
    name: "Billing Inquiries - Tier 1",
    routeVia: "zendesk",
    confidence: "high",
    autonomy: "complex",
    keywords: ["invoice", "payment", "billing", "charge", "refund"],
    frequency: "continuous",
    hours: "24/7",
    days: "mon-sun",
  });

  // Response Templates state
  const [templates, setTemplates] = useState([
    {
      id: "1",
      name: "Greeting",
      trigger: "Customer initiates conversation",
      response: "Hi there! I'm here to help with your billing question.",
    },
    {
      id: "2",
      name: "Refund Policy",
      trigger: "Customer asks about refund",
      response: "Our refund policy allows returns within 30 days of purchase.",
    },
  ]);

  // Escalation state
  const [escalationConfig, setEscalationConfig] = useState({
    escalateTo: "team-lead",
    triggerOn: "low-confidence",
    notifyVia: "slack",
  });

  // Follow-up state
  const [followUpConfig, setFollowUpConfig] = useState({
    followUpDelay: "24h",
    followUpType: "automated",
    maxFollowUps: "2",
  });

  // Quality state
  const [qualityConfig, setQualityConfig] = useState({
    reviewMode: "spot-check",
    sampleRate: "10",
    alertThreshold: "low",
  });

  const topSteps: WizardStep[] = WIZARD_PHASES.map((phase, i) => ({
    id: phase.id,
    number: i + 1,
    title: phase.title,
    subtitle:
      i === 0
        ? agentConfig.name
        : i === 1
          ? `${sources.length} Sources`
          : i === 2
            ? `${integrations.filter((int) => int.connected).length} Connected`
            : "Ticket Triage",
    status: i < currentPhase ? "complete" : i === currentPhase ? "current" : "pending",
  }));

  const sidebarSteps = SIDEBAR_STEPS.map((step) => ({
    ...step,
    status:
      step.id === activeSidebarStep
        ? ("active" as const)
        : SIDEBAR_STEPS.findIndex((s) => s.id === step.id) <
            SIDEBAR_STEPS.findIndex((s) => s.id === activeSidebarStep)
          ? ("complete" as const)
          : ("pending" as const),
  }));

  const progress = Math.round(
    ((SIDEBAR_STEPS.findIndex((s) => s.id === activeSidebarStep) + 1) /
      SIDEBAR_STEPS.length) *
      (((currentPhase + 1) / WIZARD_PHASES.length) * 100)
  );

  const sidebarStepTitles: Record<string, string> = {
    general: "General Settings",
    templates: "Response Templates",
    triage: "Ticket Triage",
    escalation: "Escalation Rules",
    followup: "Follow-Up Scheduling",
    quality: "Quality Checks",
  };

  const sidebarStepDescriptions: Record<string, string> = {
    general: "Configure your agent's core identity and behavior.",
    templates: "Define how your agent responds to common scenarios.",
    triage: "Specify how agent should categorize and route incoming support tickets.",
    escalation: "Set rules for when issues should be handed to humans.",
    followup: "Configure automated follow-up behavior.",
    quality: "Define quality review and monitoring rules.",
  };

  const currentStepIndex = SIDEBAR_STEPS.findIndex(
    (s) => s.id === activeSidebarStep
  );
  const prevStep = currentStepIndex > 0 ? SIDEBAR_STEPS[currentStepIndex - 1] : null;
  const nextStep =
    currentStepIndex < SIDEBAR_STEPS.length - 1
      ? SIDEBAR_STEPS[currentStepIndex + 1]
      : null;

  const renderStepContent = () => {
    switch (activeSidebarStep) {
      case "general":
        return (
          <AgentConfig config={agentConfig} onChange={setAgentConfig} />
        );
      case "templates":
        return (
          <ResponseTemplates
            templates={templates}
            onAdd={() =>
              setTemplates([
                ...templates,
                {
                  id: String(Date.now()),
                  name: "New Template",
                  trigger: "",
                  response: "",
                },
              ])
            }
            onRemove={(id) =>
              setTemplates(templates.filter((t) => t.id !== id))
            }
            onUpdate={(id, field, value) =>
              setTemplates(
                templates.map((t) =>
                  t.id === id ? { ...t, [field]: value } : t
                )
              )
            }
          />
        );
      case "triage":
        return (
          <AutomationRules
            rules={automationRules}
            onChange={setAutomationRules}
          />
        );
      case "escalation":
        return (
          <EscalationRules
            config={escalationConfig}
            onChange={setEscalationConfig}
          />
        );
      case "followup":
        return (
          <FollowUpScheduling
            config={followUpConfig}
            onChange={setFollowUpConfig}
          />
        );
      case "quality":
        return (
          <QualityChecks
            config={qualityConfig}
            onChange={setQualityConfig}
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
          Complex Multi-Step Workflow
        </span>
      </div>

      {/* Stepper */}
      <WizardStepper steps={topSteps} onClose={() => {}} />

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <WizardSidebar
          title={`Setup ${sidebarStepTitles[activeSidebarStep]?.split(" ").slice(-1)[0] || ""}`}
          description={sidebarStepDescriptions[activeSidebarStep] || ""}
          steps={sidebarSteps}
          activeStep={activeSidebarStep}
          onStepClick={setActiveSidebarStep}
          progress={progress}
        />

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
        previousLabel={prevStep ? sidebarStepTitles[prevStep.id] : undefined}
        nextLabel={nextStep ? sidebarStepTitles[nextStep.id] : undefined}
        onPrevious={
          prevStep ? () => setActiveSidebarStep(prevStep.id) : undefined
        }
        onNext={
          nextStep ? () => setActiveSidebarStep(nextStep.id) : undefined
        }
        showPrevious={!!prevStep}
        showNext={!!nextStep}
      />
    </div>
  );
}
