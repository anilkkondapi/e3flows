import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Cpu,
  FileText,
  GitBranch,
  Network,
  Search,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

const executionSteps = [
  ["01", "Specification", "PDF, DOCX, PPT, protocol specifications, architecture documents, interface definitions, constraints, and tables."],
  ["02", "Architecture intent", "Protocol definitions, interfaces, functional behavior, requirements, timing constraints, power intent, and performance targets."],
  ["03", "Executable flows", "Signals, messages, registers, state transitions, alternate conditions, timeouts, subflows, loops, and out-of-order sequences."],
  ["04", "Design + verification", "RTL templates, testbench scaffolding, assertions, protocol checkers, test stimulus, coverage, and documentation."],
  ["05", "EDA implementation", "Simulation, synthesis, LINT, CDC/RDC, logical equivalence checking, static timing, power, and physical implementation."],
  ["06", "Silicon validation", "Functional, plug-and-play, volume, cross-feature, and coverage validation with mismatch localization."],
];

const competitionRows: Array<[string, string, string, string, string, string]> = [
  ["Specification parsing", "Yes", "No", "No", "No", "No"],
  ["Protocol extraction", "Yes", "No", "No", "No", "No"],
  ["Executable specifications", "Yes", "No", "No", "No", "No"],
  ["Architecture modeling", "Yes", "Limited", "Limited", "Limited", "Limited"],
  ["RTL productivity AI", "Limited / roadmap", "Yes", "Partial", "Partial", "Partial"],
  ["Verification automation", "Yes", "Partial", "Yes", "Yes", "Partial"],
  ["Specification-conformance checking", "Yes", "No", "No", "No", "No"],
  ["EDA-flow integration", "Planned", "Yes", "Yes", "Yes", "Yes"],
];

const generatedArtifacts = [
  ["Executable architecture model", "Protocol definitions, interface definitions, functional behavior, system requirements, and reusable architecture intent."],
  ["Design collateral", "RTL templates, interface modules, register structures, coding guidance, timing constraints, and power-intent inputs."],
  ["Verification collateral", "Testbench scaffolding, assertions (SVA), protocol checkers, stimulus, coverage models, and documentation."],
  ["Validation collateral", "Functional, plug-and-play, volume, cross-feature, and implementation-conformance workflows."],
];

const agents = [
  ["Front-end controller", "Uses a control table to select documents, sections, requested extraction, and optional engineering guidance."],
  ["Intelligent backend", "Extracts signal, message, register, and event flows from paragraphs, tables, headers, and cross-references."],
  ["Dynamic parser", "Converts IF, WHILE, loops, waits, acknowledgments, state transitions, and timing dependencies into logical branches."],
  ["Auto expansion", "Learns protocol and logic patterns, models overlapping protocols, and generates EFS-compatible flows."],
];

const solutions = [
  ["AI accelerators", "Tensor pipelines, DMA, HBM, coherency, command sequencing, error handling, and data-movement validation.", Cpu],
  ["CPU and GPU", "Cache-coherent flows, memory subsystems, interconnects, reset, power states, and complex subsystem sequences.", Boxes],
  ["Networking and I/O", "AXI, CHI, PCIe, CXL, Ethernet, register programming, transaction flows, and interoperability.", Network],
  ["Automotive", "ADAS, zonal controllers, BMS, safety behavior, cross-feature interaction, and volume validation.", ShieldCheck],
  ["Datacenter systems", "Server fabrics, accelerators, high-speed links, platform initialization, and fleet-scale validation.", Server],
];

function Heading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#76b900]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      {copy ? <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg">{copy}</p> : null}
    </div>
  );
}

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <SiteNav />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(118,185,0,0.18),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_55%)]" />
        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#76b900]">Executable Functional Specification</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-7xl">
              Engineer silicon from a single source of intent.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
              SyncSilica EFS converts human-readable semiconductor specifications into executable architecture models,
              design and verification collateral, and implementation-conformance workflows.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#76b900] px-6 py-3.5 font-semibold text-black hover:bg-[#8bd000]">
                Request a demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/brochure" className="inline-flex items-center justify-center border border-white/20 px-6 py-3.5 font-semibold hover:border-[#76b900] hover:bg-white/5">
                Product brochure
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111820]/90 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/40">EFS execution graph</p>
                <p className="mt-1 text-lg font-semibold">Architecture intent → verified evidence</p>
              </div>
              <Workflow className="h-6 w-6 text-[#76b900]" />
            </div>
            <div className="mt-6 space-y-3">
              {executionSteps.map(([number, title]) => (
                <div key={number} className="grid grid-cols-[48px_1fr_auto] items-center gap-4 border border-white/8 bg-black/25 px-4 py-3">
                  <span className="bg-[#76b900] px-2 py-2 text-center font-mono text-xs font-bold text-black">{number}</span>
                  <span className="font-medium text-white/90">{title}</span>
                  <CheckCircle2 className="h-4 w-4 text-white/25" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading
            eyebrow="Industry challenge"
            title="The specification layer remains disconnected from EDA."
            copy="Specifications are largely static documents. Architecture, design, verification, and validation teams manually reinterpret the same intent, while established EDA flows usually begin at RTL."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              ["Static source material", "PDF, DOCX, presentations, spreadsheets, tables, and informal diagrams hold critical intent but are not executable.", FileText],
              ["Duplicated interpretation", "Architecture, RTL, verification, and validation teams independently translate the same requirements.", GitBranch],
              ["Late mismatch discovery", "Ambiguity becomes a verification bug, coverage gap, integration issue, or silicon bring-up failure.", Search],
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
          <Heading
            eyebrow="Missing architecture layer"
            title="EFS begins before RTL."
            copy="EFS complements Cadence, Synopsys, Siemens, RTL copilots, and cloud chip-development platforms by supplying architecture-derived executable intent and generated collateral."
          />
          <div className="mx-auto mt-16 grid max-w-5xl gap-3 md:grid-cols-5">
            {["Architecture specification", "EFS intelligence layer", "RTL generation", "Verification", "Physical design"].map((item, index) => (
              <div key={item} className={`border px-4 py-6 text-center font-medium ${index === 1 ? "border-[#76b900] bg-[#76b900]/10 text-[#9ddd20]" : "border-white/10 bg-[#111820] text-white/80"}`}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading eyebrow="What EFS represents" title="Simple, modular, analyzable, reusable, and testable." />
          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Signals and messages", "Represent values, transitions, opcodes, payloads, and communication between IP instances."],
              ["Registers and states", "Model register events, FSM transitions, waits, acknowledgments, and state-dependent behavior."],
              ["Conditions and timing", "Express alternate conditions, loops, asynchronous behavior, timeouts, and event dependencies."],
              ["Hierarchy and reuse", "Compose subsystem flows, reusable subflows, multiple IP instances, and out-of-order sequences."],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#111820] p-7">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f141b] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading
            eyebrow="Specification-driven automation"
            title="Convert selected specification intent into engineering assets."
            copy="A control table identifies documents, sections, requested extraction, and optional comments—for example, extracting AXI transaction logic from selected protocol sections."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border border-white/10 bg-[#111820] p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-[#76b900]">Control table</p>
              <div className="mt-6 overflow-hidden border border-white/10 text-sm">
                <div className="grid grid-cols-4 bg-white/5 px-3 py-3 font-semibold text-white/75">
                  <span>Document</span><span>Section</span><span>Description</span><span>Comments</span>
                </div>
                <div className="grid grid-cols-4 border-t border-white/10 px-3 py-4 text-white/60">
                  <span>compute_SS.docx</span><span>Section 5</span><span>Generate EFS for I/O</span><span>MLOAD/MSTORE</span>
                </div>
                <div className="grid grid-cols-4 border-t border-white/10 px-3 py-4 text-white/60">
                  <span>axi_spec.pdf</span><span>A3.3</span><span>Extract AXI logic</span><span>—</span>
                </div>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {executionSteps.slice(1).map(([number, title, text]) => (
                <div key={number} className="border border-white/10 bg-[#111820] p-6">
                  <span className="font-mono text-xs text-[#76b900]">{number}</span>
                  <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/58">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading eyebrow="Agent-centric AI" title="Four coordinated capabilities generate executable intent." />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {agents.map(([title, text]) => (
              <article key={title} className="border border-white/10 bg-[#111820] p-7">
                <h3 className="text-xl font-semibold text-[#9ddd20]">{title}</h3>
                <p className="mt-3 leading-7 text-white/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f141b] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading eyebrow="Generated artifacts" title="Architecture-derived collateral for downstream tools." />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {generatedArtifacts.map(([title, text]) => (
              <article key={title} className="border border-white/10 bg-[#111820] p-7">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading
            eyebrow="AXI proof of concept"
            title="Generate, execute, and validate protocol flows."
            copy="The demonstrated POC converts high-level functional specifications into EFS, generates EFS checkers, produces a Verilog testbench, executes reset subflows, verifies matching transactions, and localizes condition mismatches."
          />
          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
            {[
              ["Generate", "Extract AXI read, write, response, snoop, atomic, reset, and subsystem flows from selected specification sections."],
              ["Execute", "Run signal, message, register, subflow, and function events as an executable model."],
              ["Compare", "Compare expected EFS behavior with implementation traces and waveform evidence."],
              ["Localize", "Identify the exact IF condition, signal value, transaction, or step that does not conform."],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#111820] p-7">
                <h3 className="text-2xl font-semibold text-[#76b900]">{title}</h3>
                <p className="mt-3 leading-7 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f141b] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading
            eyebrow="Capability comparison"
            title="A distinct specification-level position."
            copy="The uploaded comparison positions EFS as complementary to ChipStack, Cadence, Synopsys, and Zero ASIC—not as a replacement for their RTL, verification, cloud, synthesis, or physical-design capabilities."
          />
          <div className="mt-16 overflow-x-auto border border-white/10">
            <table className="w-full min-w-[980px] border-collapse text-left">
              <thead className="bg-[#131a22]">
                <tr>
                  {["Capability", "EFS", "ChipStack", "Cadence", "Synopsys", "Zero ASIC"].map((head) => (
                    <th key={head} className={`px-5 py-4 text-sm font-semibold ${head === "EFS" ? "text-[#76b900]" : "text-white/70"}`}>{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {competitionRows.map((row) => (
                  <tr key={row[0]} className="border-t border-white/8">
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${index}`} className={`px-5 py-4 ${index === 1 ? "font-semibold text-[#76b900]" : index === 0 ? "text-white/80" : "text-white/55"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="border border-white/10 bg-[#111820] p-5"><strong>ChipStack:</strong><span className="text-white/60"> AI copilot and design-productivity assistance at RTL.</span></div>
            <div className="border border-white/10 bg-[#111820] p-5"><strong>Cadence / Synopsys:</strong><span className="text-white/60"> Broad verification, synthesis, implementation, and signoff platforms.</span></div>
            <div className="border border-white/10 bg-[#111820] p-5"><strong>Zero ASIC:</strong><span className="text-white/60"> Cloud-based chip-development platform.</span></div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading eyebrow="Industry solutions" title="Apply executable intent across complex SoC and IP programs." />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map(([title, text, Icon]) => (
              <article key={title as string} className="border border-white/10 bg-[#111820] p-7">
                <Icon className="h-7 w-7 text-[#76b900]" />
                <h3 className="mt-6 text-xl font-semibold">{title as string}</h3>
                <p className="mt-3 leading-7 text-white/60">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border border-[#76b900]/25 bg-[linear-gradient(135deg,rgba(118,185,0,0.16),rgba(17,24,32,0.85))] px-8 py-14 text-center">
            <h2 className="text-3xl font-semibold sm:text-5xl">Make specification intent executable.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
              Connect architecture, design, verification, EDA implementation, and silicon validation using one reusable and traceable source of engineering intent.
            </p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-2 bg-[#76b900] px-6 py-3.5 font-semibold text-black hover:bg-[#8bd000]">
              Request a technical briefing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
