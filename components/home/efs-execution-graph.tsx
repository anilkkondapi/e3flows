"use client";

import {
  ArrowDown,
  CheckCircle2,
  Cpu,
  FileText,
  GitBranch,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const nodes = [
  { number: "01", title: "Specification", subtitle: "PDF · DOCX · tables · diagrams", icon: FileText },
  { number: "02", title: "Architecture intent", subtitle: "requirements · interfaces · constraints", icon: GitBranch },
  { number: "03", title: "Executable flows", subtitle: "conditions · states · protocols", icon: Workflow },
  { number: "04", title: "Design + verification", subtitle: "RTL · UVM · assertions · checkers", icon: Cpu },
  { number: "05", title: "EDA implementation", subtitle: "simulation · synthesis · physical design", icon: Cpu },
  { number: "06", title: "Silicon validation", subtitle: "conformance · evidence · coverage", icon: ShieldCheck },
];

export function EfsExecutionGraph() {
  return (
    <div className="relative overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.045),rgba(118,185,0,0.08))] p-6 shadow-2xl">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#76b900]/10 blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#76b900]">
              EFS execution graph
            </p>
            <p className="mt-2 text-sm text-white/45">
              Architecture intent → verified evidence
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-black/20">
            <Workflow className="h-5 w-5 text-white/60" />
          </div>
        </div>

        <div className="mt-7">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const finalNode = index === nodes.length - 1;

            return (
              <div key={node.number} className="relative">
                <div
                  className={`group relative grid grid-cols-[52px_1fr_auto] items-center gap-4 border px-4 py-4 transition ${
                    finalNode
                      ? "border-[#76b900]/65 bg-[#76b900]/10"
                      : "border-white/10 bg-black/30 hover:border-[#76b900]/40"
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-[#76b900] font-mono text-xs font-bold text-black">
                    {node.number}
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-[#76b900]" />
                      <h3 className="font-semibold text-white/92">{node.title}</h3>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-white/38">
                      {node.subtitle}
                    </p>
                  </div>

                  {finalNode ? (
                    <CheckCircle2 className="h-5 w-5 text-[#76b900]" />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-white/15 transition group-hover:bg-[#76b900]" />
                  )}
                </div>

                {!finalNode ? (
                  <div className="flex h-8 items-center justify-center">
                    <div className="relative flex h-full w-8 items-center justify-center">
                      <div className="absolute h-full w-px bg-gradient-to-b from-[#76b900] to-[#76b900]/20" />
                      <ArrowDown className="relative h-4 w-4 translate-y-1 text-[#76b900]" />
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-7 border-t border-white/10 pt-6">
          <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
            <div className="px-3">
              <p className="text-2xl font-semibold text-white">1</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/35">
                Intent source
              </p>
            </div>

            <div className="px-3">
              <p className="text-2xl font-semibold text-white">E2E</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/35">
                Traceability
              </p>
            </div>

            <div className="px-3">
              <p className="text-2xl font-semibold text-white">∞</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/35">
                Reusable flows
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
