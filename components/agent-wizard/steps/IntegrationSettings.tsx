"use client";

import { Check } from "../../icons";

interface Integration {
  id: string;
  name: string;
  description: string;
  connected: boolean;
}

interface IntegrationSettingsProps {
  integrations: Integration[];
  onToggle: (id: string) => void;
}

export function IntegrationSettings({
  integrations,
  onToggle,
}: IntegrationSettingsProps) {
  return (
    <div className="space-y-8">
      <div className="card-section">
        <label className="label-mono">Available Integrations</label>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {integrations.map((integration) => (
            <button
              key={integration.id}
              onClick={() => onToggle(integration.id)}
              className={`p-4 rounded-onyx-lg border text-left transition-all duration-150 ${
                integration.connected
                  ? "border-onyx-complete/40 bg-onyx-complete-light"
                  : "border-onyx-border-subtle bg-onyx-surface hover:border-onyx-border-strong"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-onyx-text-primary">
                    {integration.name}
                  </div>
                  <div className="text-xs text-onyx-text-secondary mt-1">
                    {integration.description}
                  </div>
                </div>
                {integration.connected && (
                  <div className="w-5 h-5 rounded-full bg-onyx-complete flex items-center justify-center flex-shrink-0">
                    <Check size="sm" customSize={12} className="text-white" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="card-section">
        <label className="label-mono">API Configuration</label>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between p-3 rounded-onyx bg-onyx-surface-raised border border-onyx-border-subtle">
            <span className="text-sm text-onyx-text-secondary">Webhook URL</span>
            <span className="font-mono text-xs text-onyx-text-muted">
              Not configured
            </span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-onyx bg-onyx-surface-raised border border-onyx-border-subtle">
            <span className="text-sm text-onyx-text-secondary">Rate limit</span>
            <span className="font-mono text-xs text-onyx-text-muted">
              100 req/min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
