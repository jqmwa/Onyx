"use client";

import { Select, RadioGroup } from "../../ui";

interface FollowUpSchedulingProps {
  config: {
    followUpDelay: string;
    followUpType: string;
    maxFollowUps: string;
  };
  onChange: (config: FollowUpSchedulingProps["config"]) => void;
}

export function FollowUpScheduling({
  config,
  onChange,
}: FollowUpSchedulingProps) {
  return (
    <div className="space-y-8">
      <div className="card-section">
        <RadioGroup
          label="Follow-Up Strategy"
          name="follow-up-type"
          value={config.followUpType}
          onChange={(value) => onChange({ ...config, followUpType: value })}
          options={[
            {
              value: "automated",
              label: "Automated follow-ups",
              description:
                "Agent sends scheduled check-ins after resolution.",
            },
            {
              value: "conditional",
              label: "Conditional follow-ups",
              description:
                "Only follow up if customer satisfaction is below threshold.",
            },
            {
              value: "none",
              label: "No follow-ups",
              description: "Close ticket after resolution without follow-up.",
            },
          ]}
        />
      </div>

      <div className="card-section">
        <div className="grid grid-cols-2 gap-6">
          <Select
            label="Follow-Up Delay"
            value={config.followUpDelay}
            onChange={(e) =>
              onChange({ ...config, followUpDelay: e.target.value })
            }
            options={[
              { value: "1h", label: "1 Hour" },
              { value: "24h", label: "24 Hours" },
              { value: "48h", label: "48 Hours" },
              { value: "1w", label: "1 Week" },
            ]}
          />
          <Select
            label="Max Follow-Ups"
            value={config.maxFollowUps}
            onChange={(e) =>
              onChange({ ...config, maxFollowUps: e.target.value })
            }
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "unlimited", label: "Unlimited" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
