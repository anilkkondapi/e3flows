"use client";

import { useState } from "react";
import { Braces, CheckCircle2, Cpu, Radio, Workflow } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const options = {
  "signal-parsing": { icon: Radio, title: "Signal and behavior extraction", text: "Parse flow specifications to identify participants, messages, signal direction, conditions, values, state transitions, and register interactions.", outputs: ["Structured signal map", "Condition and sequence model", "Traceability identifiers"] },
  "rtl-generation": { icon: Cpu, title: "Design artifact generation", text: "Translate structured executable intent into implementation guidance, interfaces, RTL-oriented collateral, and reusable engineering artifacts.", outputs: ["Interface definitions", "RTL-oriented flow collateral", "Reusable derivative content"] },
  "validation-checkers": { icon: CheckCircle2, title: "Validation checker generation", text: "Create conformance logic for expected order, values, timing, state, protocol rules, and functional outcomes across simulation and silicon evidence.", outputs: ["Sequence and value checks", "Protocol rule checks", "Mismatch reports"] },
};

type Key = keyof typeof options;

export default function TryPage() {
  const [selected, setSelected] = useState<Key>("signal-parsing");
  const current = options[selected];
  const Icon = current.icon;

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <SiteNav />
      <section className="relative overflow-hidden pt-28">
        <div className="hero-grid absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm font-black uppercase tracking-[.2em] text-[#76b900]">Explore capabilities</div>
            <h1 className="mt-6 text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">Understand the building blocks of the EFS engine.</h1>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-[.42fr_.58fr]">
            <div className="space-y-3">
              {(Object.keys(options) as Key[]).map((key, index) => (
                <button key={key} onClick={() => setSelected(key)} className={`w-full border p-5 text-left transition ${selected === key ? "border-[#76b900] bg-[#76b900] text-black" : "border-white/10 bg-white/[.03] text-white hover:bg-white/[.06]"}`}>
                  <div className="text-xs font-black uppercase tracking-[.18em] opacity-60">0{index + 1}</div>
                  <div className="mt-2 text-lg font-bold">{options[key].title}</div>
                </button>
              ))}
            </div>
            <div className="tech-panel min-h-[430px] p-8 md:p-12">
              <Icon className="h-10 w-10 text-[#76b900]" />
              <h2 className="mt-10 text-4xl font-black tracking-[-.04em]">{current.title}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">{current.text}</p>
              <div className="mt-10 border-t border-white/10 pt-8">
                <div className="text-xs font-black uppercase tracking-[.18em] text-white/40">Representative outputs</div>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {current.outputs.map((output) => <div key={output} className="border border-white/10 bg-black/30 p-4 text-sm font-semibold">{output}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
