"use client";

import { Plus } from "../../icons";

interface Template {
  id: string;
  name: string;
  trigger: string;
  response: string;
}

interface ResponseTemplatesProps {
  templates: Template[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: keyof Template, value: string) => void;
}

export function ResponseTemplates({
  templates,
  onAdd,
  onRemove,
  onUpdate,
}: ResponseTemplatesProps) {
  return (
    <div className="space-y-8">
      <div className="card-section">
        <label className="label-mono">Saved Templates</label>
        <div className="mt-4 space-y-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="p-4 rounded-onyx border border-onyx-border-subtle bg-onyx-surface-raised"
            >
              <div className="flex items-start justify-between mb-3">
                <input
                  type="text"
                  value={template.name}
                  onChange={(e) =>
                    onUpdate(template.id, "name", e.target.value)
                  }
                  className="text-sm font-medium text-onyx-text-primary bg-transparent outline-none"
                  placeholder="Template name"
                />
                <button
                  onClick={() => onRemove(template.id)}
                  className="text-onyx-text-muted hover:text-onyx-text-primary transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M4 4L10 10M10 4L4 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-2">
                <div>
                  <span className="label-mono text-[9px]">Trigger</span>
                  <input
                    type="text"
                    value={template.trigger}
                    onChange={(e) =>
                      onUpdate(template.id, "trigger", e.target.value)
                    }
                    className="w-full mt-1 text-sm text-onyx-text-secondary bg-transparent outline-none border-b border-onyx-border-subtle focus:border-onyx-focus pb-1"
                    placeholder="When customer says..."
                  />
                </div>
                <div>
                  <span className="label-mono text-[9px]">Response</span>
                  <textarea
                    value={template.response}
                    onChange={(e) =>
                      onUpdate(template.id, "response", e.target.value)
                    }
                    className="w-full mt-1 text-sm text-onyx-text-secondary bg-transparent outline-none border-b border-onyx-border-subtle focus:border-onyx-focus pb-1 resize-none"
                    rows={2}
                    placeholder="Agent responds with..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onAdd}
          className="mt-3 flex items-center gap-2 text-sm text-onyx-text-secondary hover:text-onyx-text-primary transition-colors"
        >
          <Plus size="sm" customSize={14} />
          <span>Add template</span>
        </button>
      </div>
    </div>
  );
}
