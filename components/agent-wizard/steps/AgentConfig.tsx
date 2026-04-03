"use client";

import { TextInput, Select, RadioGroup } from "../../ui";

interface AgentConfigProps {
  config: {
    name: string;
    type: string;
    personality: string;
  };
  onChange: (config: AgentConfigProps["config"]) => void;
}

export function AgentConfig({ config, onChange }: AgentConfigProps) {
  return (
    <div className="space-y-8">
      <div className="card-section">
        <TextInput
          label="Agent Name"
          value={config.name}
          onChange={(e) => onChange({ ...config, name: e.target.value })}
          placeholder="My Support Agent"
        />
      </div>

      <div className="card-section">
        <div className="grid grid-cols-2 gap-6">
          <Select
            label="Agent Type"
            value={config.type}
            onChange={(e) => onChange({ ...config, type: e.target.value })}
            options={[
              { value: "support", label: "Support Specialist" },
              { value: "sales", label: "Sales Assistant" },
              { value: "research", label: "Research Analyst" },
              { value: "ops", label: "Operations Agent" },
              { value: "custom", label: "Custom Agent" },
            ]}
          />
          <Select
            label="Base Model"
            value="claude-4"
            options={[
              { value: "claude-4", label: "Claude Opus 4.6" },
              { value: "claude-4-sonnet", label: "Claude Sonnet 4.6" },
              { value: "claude-4-haiku", label: "Claude Haiku 4.5" },
            ]}
          />
        </div>
      </div>

      <div className="card-section">
        <RadioGroup
          label="Agent Personality"
          name="personality"
          value={config.personality}
          onChange={(value) => onChange({ ...config, personality: value })}
          options={[
            {
              value: "professional",
              label: "Professional",
              description: "Formal, precise, and business-appropriate responses.",
            },
            {
              value: "friendly",
              label: "Friendly",
              description: "Warm and conversational while staying helpful.",
            },
            {
              value: "minimal",
              label: "Minimal",
              description: "Concise, direct answers with no filler.",
            },
          ]}
        />
      </div>
    </div>
  );
}
