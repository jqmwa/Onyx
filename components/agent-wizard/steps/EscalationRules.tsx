"use client";

import { Select, RadioGroup } from "../../ui";

interface EscalationRulesProps {
  config: {
    escalateTo: string;
    triggerOn: string;
    notifyVia: string;
  };
  onChange: (config: EscalationRulesProps["config"]) => void;
}

export function EscalationRules({ config, onChange }: EscalationRulesProps) {
  return (
    <div className="space-y-8">
      <div className="card-section">
        <RadioGroup
          label="Escalation Trigger"
          name="escalation-trigger"
          value={config.triggerOn}
          onChange={(value) => onChange({ ...config, triggerOn: value })}
          options={[
            {
              value: "low-confidence",
              label: "Low confidence score",
              description: "Escalate when agent confidence drops below threshold.",
            },
            {
              value: "negative-sentiment",
              label: "Negative sentiment detected",
              description: "Escalate when customer frustration is identified.",
            },
            {
              value: "explicit-request",
              label: "Customer requests human",
              description: "Escalate only when explicitly asked for a person.",
            },
            {
              value: "multi-turn",
              label: "Multi-turn failure",
              description: "Escalate after 3+ unsuccessful resolution attempts.",
            },
          ]}
        />
      </div>

      <div className="card-section">
        <div className="grid grid-cols-2 gap-6">
          <Select
            label="Escalate To"
            value={config.escalateTo}
            onChange={(e) =>
              onChange({ ...config, escalateTo: e.target.value })
            }
            options={[
              { value: "team-lead", label: "Team Lead" },
              { value: "senior-agent", label: "Senior Agent" },
              { value: "department-head", label: "Department Head" },
              { value: "custom", label: "Custom Queue" },
            ]}
          />
          <Select
            label="Notify Via"
            value={config.notifyVia}
            onChange={(e) =>
              onChange({ ...config, notifyVia: e.target.value })
            }
            options={[
              { value: "slack", label: "Slack" },
              { value: "email", label: "Email" },
              { value: "webhook", label: "Webhook" },
              { value: "in-app", label: "In-App" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
