import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  Layers,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

const benefits = [
  ["Business agility", "Develop complex SoCs and IP faster while creating high-quality collateral that can be reused across product derivatives."],
  ["Reduced TCO", "Improve quality and execution efficiency through automation, earlier validation, and more complete pre-silicon coverage."],
  ["Traceable intent", "Connect requirements, executable flows, generated artifacts, implementation evidence, and validation results."],
  ["Earlier risk discovery", "Expose specification ambiguity and spec-to-implementation divergence before late-stage verification or silicon bring-up."],
];

const capabilities = [
  "Signal, message, register, state, and protocol-event representation",
  "Multiple IP instances and hierarchical subsystem flows",
  "Alternate conditions, waits, loops, timeouts, asynchronous execution, and out-of-order sequences",
  "Semantic inference from paragraphs, tables, headers, and cross-references",
  "RTL templates, testbench scaffolding, assertions, protocol checkers, stimulus, and documentation",
  "Functional, plug-and-play, volume, cross-feature, and coverage validation",
  "VCD/FSDB evidence analysis and mismatch localization",
];

export default function BrochurePage() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <SiteNav />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(118,185,0,0.18),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#76b900]">SyncSilica product brochure</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-7xl">
            Executable specifications for architecture-to-silicon automation.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl">
            EFS introduces an executable intelligence layer between architecture specifications and downstream RTL,
            verification, EDA implementation, and silicon-validation workflows.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/EFS_Product_Brochure.pdf" download className="inline-flex items-center justify-center gap-2 bg-[#76b900] px-6 py-3.5 font-semibold text-black hover:bg-[#8bd000]">
              Download current PDF <Download className="h-4 w-4" />
            </a>
            <Link href="/product" className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3.5 font-semibold hover:border-[#76b900] hover:bg-white/5">
              Explore full product page <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#76b900]">Executive summary</p>
            <h2 className="mt-4 text-4xl font-semibold">Bridge architecture to silicon.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-white/65">
            <p>
              Traditional SoC and IP development is affected by misalignment between specifications and implementation,
              redundant effort across design and validation, and slow iteration cycles.
            </p>
            <p>
              EFS converts human-readable specifications into machine-executable flows, generated engineering collateral,
              and conformance workflows—improving reuse, traceability, and first-silicon readiness.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f141b] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#76b900]">Core value</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Move engineering intent forward without rewriting it.</h2>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {benefits.map(([title, text]) => (
              <article key={title} className="bg-[#111820] p-8">
                <h3 className="text-2xl font-semibold text-[#76b900]">{title}</h3>
                <p className="mt-4 leading-7 text-white/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#76b900]">Platform workflow</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Specification → EFS → EDA</h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl gap-3 md:grid-cols-5">
            {[
              ["Specifications", "PDF, DOCX, protocol, architecture, interfaces"],
              ["EFS engine", "Parsing, extraction, flow/FSM, constraints"],
              ["Generated artifacts", "RTL, SVA, checkers, TB, documentation"],
              ["EDA implementation", "Simulation, synthesis, physical design"],
              ["Validation", "Functional, PnP, volume, cross-feature"],
            ].map(([title, text]) => (
              <div key={title} className="border border-white/10 bg-[#111820] p-5 text-center">
                <h3 className="font-semibold text-[#9ddd20]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f141b] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#76b900]">What EFS supports</p>
              <h2 className="mt-4 text-4xl font-semibold">A hardware-aware executable representation.</h2>
              <p className="mt-6 leading-8 text-white/65">
                EFS is designed to be simple, modular, reusable, analyzable, and testable while representing realistic SoC and IP behavior.
              </p>
            </div>
            <div className="space-y-4">
              {capabilities.map((item) => (
                <div key={item} className="flex gap-3 border-b border-white/10 pb-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#76b900]" />
                  <span className="text-white/72">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#76b900]">Agent-centric AI</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Understand, structure, expand, and execute.</h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {[
              ["Front-end control", "Select document, section, requested output, and optional engineering guidance.", FileText],
              ["Semantic extraction", "Interpret paragraphs, tables, references, signals, messages, registers, and protocols.", Search],
              ["Dynamic parsing", "Map conditions, loops, waits, acknowledgments, states, and event dependencies into flows.", Workflow],
              ["Auto expansion", "Reuse protocol patterns and generate complete EFS-compatible structures.", Layers],
            ].map(([title, text, Icon]) => (
              <article key={title as string} className="border border-white/10 bg-[#111820] p-7">
                <Icon className="h-7 w-7 text-[#76b900]" />
                <h3 className="mt-6 text-xl font-semibold">{title as string}</h3>
                <p className="mt-3 leading-7 text-white/60">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f141b] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#76b900]">Demonstrated validation</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">AXI generation and implementation-conformance checking.</h2>
            <p className="mt-6 leading-8 text-white/65">
              The POC demonstrates specification extraction, executable AXI flows, reset subflow execution, matching transaction validation,
              condition-mismatch detection, volume validation, EFS checker generation, and Verilog testbench generation.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              ["Matching execution", "Verify that expected AXI signal and transaction behavior matches implementation evidence."],
              ["Mismatch localization", "Identify the exact IF condition, expected value, observed value, and affected transaction."],
              ["Volume validation", "Apply executable checks to longer waveform histories and summarize matched and failed conditions."],
            ].map(([title, text]) => (
              <article key={title} className="border border-white/10 bg-[#111820] p-7">
                <ShieldCheck className="h-7 w-7 text-[#76b900]" />
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#76b900]">Ecosystem position</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Complement existing design and EDA platforms.</h2>
            <p className="mt-6 leading-8 text-white/65">
              EFS supplies the executable architecture layer and specification-derived artifacts that downstream RTL copilots,
              verification platforms, synthesis tools, and physical-design tools can consume.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl gap-3 md:grid-cols-5">
            {["Architecture specifications", "EFS", "RTL / design AI", "Verification", "Physical design"].map((item, index) => (
              <div key={item} className={`border p-5 text-center font-medium ${index === 1 ? "border-[#76b900] bg-[#76b900]/10 text-[#9ddd20]" : "border-white/10 bg-[#111820] text-white/70"}`}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border border-[#76b900]/25 bg-[linear-gradient(135deg,rgba(118,185,0,0.16),rgba(17,24,32,0.85))] px-8 py-14 text-center">
            <h2 className="text-3xl font-semibold sm:text-5xl">Explore the complete EFS platform story.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
              The detailed product page includes the complete competitive matrix, architecture workflow, agent-centric AI,
              AXI proof of concept, generated collateral, industry applications, and EFS ecosystem positioning.
            </p>
            <Link href="/product" className="mt-9 inline-flex items-center gap-2 bg-[#76b900] px-6 py-3.5 font-semibold text-black hover:bg-[#8bd000]">
              Open product experience <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
