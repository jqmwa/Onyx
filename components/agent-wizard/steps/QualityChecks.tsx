"use client";

import { RadioGroup, Select } from "../../ui";

interface QualityChecksProps {
  config: {
    reviewMode: string;
    sampleRate: string;
    alertThreshold: string;
  };
  onChange: (config: QualityChecksProps["config"]) => void;
}

export function QualityChecks({ config, onChange }: QualityChecksProps) {
  return (
    <div className="space-y-8">
      <div className="card-section">
        <RadioGroup
          label="Review Mode"
          name="review-mode"
          value={config.reviewMode}
          onChange={(value) => onChange({ ...config, reviewMode: value })}
          options={[
            {
              value: "spot-check",
              label: "Spot check",
              description:
                "Randomly sample a percentage of conversations for review.",
            },
            {
              value: "all-escalations",
              label: "Review all escalations",
              description:
                "Every escalated conversation is flagged for human review.",
            },
            {
              value: "threshold",
              label: "Quality threshold",
              description:
                "Flag conversations where satisfaction score falls below target.",
            },
          ]}
        />
      </div>

      <div className="card-section">
        <div className="grid grid-cols-2 gap-6">
          <Select
            label="Sample Rate"
            value={config.sampleRate}
            onChange={(e) =>
              onChange({ ...config, sampleRate: e.target.value })
            }
            options={[
              { value: "5", label: "5%" },
              { value: "10", label: "10%" },
              { value: "25", label: "25%" },
              { value: "50", label: "50%" },
              { value: "100", label: "100%" },
            ]}
          />
          <Select
            label="Alert Threshold"
            value={config.alertThreshold}
            onChange={(e) =>
              onChange({ ...config, alertThreshold: e.target.value })
            }
            options={[
              { value: "critical", label: "Critical Only" },
              { value: "low", label: "Low Satisfaction" },
              { value: "any-negative", label: "Any Negative" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
