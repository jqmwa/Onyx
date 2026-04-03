"use client";

import { useState } from "react";
import { TextInput, Select, RadioGroup, Tag } from "../../ui";
import { Plus } from "../../icons";

interface AutomationRulesProps {
  rules: {
    name: string;
    routeVia: string;
    confidence: string;
    autonomy: string;
    keywords: string[];
    frequency: string;
    hours: string;
    days: string;
  };
  onChange: (rules: AutomationRulesProps["rules"]) => void;
}

export function AutomationRules({ rules, onChange }: AutomationRulesProps) {
  const [newKeyword, setNewKeyword] = useState("");

  const addKeyword = () => {
    if (newKeyword.trim() && !rules.keywords.includes(newKeyword.trim())) {
      onChange({ ...rules, keywords: [...rules.keywords, newKeyword.trim()] });
      setNewKeyword("");
    }
  };

  const removeKeyword = (keyword: string) => {
    onChange({
      ...rules,
      keywords: rules.keywords.filter((k) => k !== keyword),
    });
  };

  return (
    <div className="space-y-8">
      <div className="card-section">
        <TextInput
          label="Rule Name"
          value={rules.name}
          onChange={(e) => onChange({ ...rules, name: e.target.value })}
          placeholder="Billing Inquiries - Tier 1"
        />
      </div>

      <div className="card-section">
        <div className="grid grid-cols-2 gap-6">
          <Select
            label="Route Tickets Via"
            value={rules.routeVia}
            onChange={(e) => onChange({ ...rules, routeVia: e.target.value })}
            options={[
              { value: "zendesk", label: "Zendesk" },
              { value: "intercom", label: "Intercom" },
              { value: "freshdesk", label: "Freshdesk" },
              { value: "linear", label: "Linear" },
              { value: "custom", label: "Custom Webhook" },
            ]}
          />
          <Select
            label="Confidence Threshold"
            value={rules.confidence}
            onChange={(e) =>
              onChange({ ...rules, confidence: e.target.value })
            }
            options={[
              { value: "high", label: "High (85%+)" },
              { value: "medium", label: "Medium (70%+)" },
              { value: "low", label: "Low (50%+)" },
            ]}
          />
        </div>
      </div>

      <div className="card-section">
        <RadioGroup
          label="Agent Autonomy Level"
          name="autonomy"
          value={rules.autonomy}
          onChange={(value) => onChange({ ...rules, autonomy: value })}
          options={[
            {
              value: "review",
              label: "Review each decision",
              description:
                "Agent suggests, you approve before routing.",
            },
            {
              value: "auto-confident",
              label: "Auto-route if confident",
              description:
                "Agent routes when above threshold, flags uncertain cases.",
            },
            {
              value: "complex",
              label: "Complex Tasks",
              description:
                "Agent routes when above threshold, flags uncertain cases.",
            },
          ]}
        />
      </div>

      <div className="card-section">
        <label className="label-mono">Match Keywords and Intents</label>
        <div className="mt-3 flex flex-wrap gap-2">
          {rules.keywords.map((keyword) => (
            <Tag
              key={keyword}
              label={keyword}
              onRemove={() => removeKeyword(keyword)}
            />
          ))}
          <div className="inline-flex items-center">
            <input
              type="text"
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addKeyword();
                }
              }}
              placeholder="Add keyword..."
              className="bg-transparent text-sm text-onyx-text-primary placeholder:text-onyx-text-muted outline-none w-24"
            />
            <button
              onClick={addKeyword}
              className="text-onyx-text-muted hover:text-onyx-text-primary transition-colors"
            >
              <Plus size="sm" customSize={16} />
            </button>
          </div>
        </div>
        <p className="text-sm text-onyx-text-secondary mt-3">
          Agent uses semantic understanding beyond exact matches.
        </p>
        <p className="text-sm text-onyx-text-secondary">
          Keywords help focus the classification model on relevant ticket
          content.
        </p>
      </div>

      <div className="card-section">
        <div className="grid grid-cols-3 gap-6">
          <Select
            label="Frequency"
            value={rules.frequency}
            onChange={(e) =>
              onChange({ ...rules, frequency: e.target.value })
            }
            options={[
              { value: "continuous", label: "Continuous" },
              { value: "batched", label: "Batched" },
              { value: "scheduled", label: "Scheduled" },
            ]}
          />
          <Select
            label="Hours"
            value={rules.hours}
            onChange={(e) => onChange({ ...rules, hours: e.target.value })}
            options={[
              { value: "24/7", label: "24/7" },
              { value: "business", label: "Business Hours" },
              { value: "custom", label: "Custom" },
            ]}
          />
          <Select
            label="Days"
            value={rules.days}
            onChange={(e) => onChange({ ...rules, days: e.target.value })}
            options={[
              { value: "mon-sun", label: "Mon-Sun" },
              { value: "mon-fri", label: "Mon-Fri" },
              { value: "custom", label: "Custom" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
