"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Play,
  RotateCcw,
  Search,
  Table2,
  Workflow,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

const stages = [
  {
    number: "01",
    title: "Select specification intent",
    description:
      "Use the AXI protocol specification together with the matrix-compute subsystem specification and control-table instructions.",
  },
  {
    number: "02",
    title: "Parse documents and tables",
    description:
      "Extract paragraphs, tables, section references, interface declarations, and the requested protocol scope.",
  },
  {
    number: "03",
    title: "Infer AXI semantics",
    description:
      "Identify channels, Manager/Subordinate direction, VALID/READY handshakes, payload signals, and transaction groups.",
  },
  {
    number: "04",
    title: "Generate protocol-level EFS",
    description:
      "Create executable AW, W, B, AR, R, AC, CR, and atomic transaction flows.",
  },
  {
    number: "05",
    title: "Compose subsystem EFS",
    description:
      "Integrate protocol flows with reset, execution trigger, busy-loop control, MLOAD/MSTORE behavior, done, and error exits.",
  },
];

const channels = [
  ["AW", "Write request", "awvalid · awready · awaddr", "Manager → Subordinate"],
  ["W", "Write data", "wvalid · wready · wdata · wstrb · wlast", "Manager → Subordinate"],
  ["B", "Write response", "bvalid · bready · bresp", "Subordinate → Manager"],
  ["AR", "Read request", "arvalid · arready · araddr", "Manager → Subordinate"],
  ["R", "Read data", "rvalid · rready · rdata · rlast · rresp", "Subordinate → Manager"],
  ["AC", "Snoop request", "acvalid · acready · acaddr", "Manager → Subordinate"],
  ["CR", "Snoop response", "crvalid · crready · crresp", "Subordinate → Manager"],
];

const extractedSignals = [
  "awvalid",
  "awready",
  "awaddr",
  "wvalid",
  "wready",
  "wdata[511:0]",
  "wstrb[63:0]",
  "wlast",
  "bvalid",
  "bready",
  "bresp[1:0]",
  "arvalid",
  "arready",
  "araddr",
  "rvalid",
  "rready",
  "rdata[511:0]",
  "rlast",
  "rresp[1:0]",
];

function StatusPill({ state }: { state: "complete" | "active" | "pending" }) {
  const styles =
    state === "complete"
      ? "border-[#76b900]/40 bg-[#76b900]/10 text-[#9ddd20]"
      : state === "active"
        ? "border-[#76b900]/60 bg-[#76b900]/15 text-[#b5ef39]"
        : "border-white/10 bg-white/[0.03] text-white/35";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${styles}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${state === "pending" ? "bg-white/20" : "bg-[#76b900]"}`} />
      {state === "complete" ? "Complete" : state === "active" ? "Active" : "Pending"}
    </span>
  );
}

function StageOne() {
  return (
    <>
      <PanelHeader
        eyebrow="Input configuration"
        title="Select specification intent"
        copy="The demo combines a protocol source, a subsystem source, and a control table that defines which sections and behaviors EFS should extract."
        icon={<FileText className="h-7 w-7 text-[#76b900]" />}
      />

      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {[
          ["Protocol source", "AMBA AXI Protocol Specification", "Issue K · AXI channels, handshakes, dependencies, transactions, and atomic behavior."],
          ["Subsystem source", "Matrix Multi-Core Compute Unit", "AXI4 interface, reset, start, busy, done, error, MLOAD, and MSTORE behavior."],
          ["Controller", "matrix_compute_axi_table.xlsx", "Document, section, extraction request, and optional engineering comments."],
        ].map(([type, title, copy]) => (
          <article key={title} className="border border-white/10 bg-black/20 p-5">
            <FileText className="h-6 w-6 text-[#76b900]" />
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/35">{type}</p>
            <h3 className="mt-2 font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/50">{copy}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 border border-white/10 bg-black/25 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#76b900]">Control-table intent</p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="text-white/40">
              <tr>
                <th className="pb-3 pr-5">Document</th>
                <th className="pb-3 pr-5">Section</th>
                <th className="pb-3 pr-5">Description</th>
                <th className="pb-3">Comments</th>
              </tr>
            </thead>
            <tbody className="border-t border-white/10 text-white/70">
              <tr>
                <td className="py-4 pr-5">matrix_compute_unit.docx</td>
                <td className="py-4 pr-5">Section 5 / 14</td>
                <td className="py-4 pr-5">Generate EFS for I/O module</td>
                <td className="py-4">Use MLOAD and MSTORE</td>
              </tr>
              <tr className="border-t border-white/8">
                <td className="py-4 pr-5">amba_axi_protocol_spec.docx</td>
                <td className="py-4 pr-5">A3.3</td>
                <td className="py-4 pr-5">Extract AXI transaction logic</td>
                <td className="py-4">Handshake-aware generation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function StageTwo() {
  return (
    <>
      <PanelHeader
        eyebrow="Document intelligence"
        title="Parse documents and tables"
        copy="FlowSage processes paragraphs, tables, section structure, control-table rows, and subsystem interface declarations before semantic inference begins."
        icon={<Table2 className="h-7 w-7 text-[#76b900]" />}
      />

      <div className="mt-9 grid gap-4 md:grid-cols-2">
        {[
          ["Paragraph extraction", "Read natural-language requirements from the AXI and subsystem documents."],
          ["Table extraction", "Capture signal descriptions, channel definitions, interface declarations, and control-table rows."],
          ["Section scoping", "Resolve A3.3 and subsystem sections selected by the controller."],
          ["Interface discovery", "Extract clk, rst_n, instruction, start, busy, done, error, and AXI interface declarations."],
          ["Reference tracking", "Relate protocol behavior to channel descriptions and subsystem usage."],
          ["Normalization", "Canonicalize signal names and remove irrelevant natural-language tokens."],
        ].map(([title, copy], index) => (
          <div key={title} className="flex gap-4 border border-white/10 bg-black/20 p-5">
            <span className="font-mono text-xs text-[#76b900]">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">{copy}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border border-[#76b900]/25 bg-[#76b900]/5 p-6">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#9ddd20]">Parser output</p>
        <p className="mt-3 text-lg font-semibold">Structured specification context ready for semantic inference</p>
        <p className="mt-2 leading-7 text-white/55">
          The parser produces scoped paragraphs, normalized tables, extracted I/O signals, document-to-section mappings,
          and contextual sentence windows used by the AXI inference engine.
        </p>
      </div>
    </>
  );
}

function StageThree() {
  return (
    <>
      <PanelHeader
        eyebrow="Semantic inference"
        title="Infer AXI channels, direction, and handshake behavior"
        copy="EFS identifies channel roles and converts VALID/READY dependencies into executable transaction conditions."
        icon={<Search className="h-7 w-7 text-[#76b900]" />}
      />

      <div className="mt-8 overflow-x-auto border border-white/10">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="bg-white/[0.035] text-white/45">
            <tr>
              <th className="px-5 py-4">Channel</th>
              <th className="px-5 py-4">Transaction</th>
              <th className="px-5 py-4">Signals</th>
              <th className="px-5 py-4">Primary direction</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((row) => (
              <tr key={row[0]} className="border-t border-white/10">
                <td className="px-5 py-4 font-mono font-semibold text-[#9ddd20]">{row[0]}</td>
                <td className="px-5 py-4 text-white/80">{row[1]}</td>
                <td className="px-5 py-4 font-mono text-xs text-white/55">{row[2]}</td>
                <td className="px-5 py-4 text-white/55">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Extracted interface signals</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {extractedSignals.map((signal) => (
            <span key={signal} className="border border-[#76b900]/25 bg-[#76b900]/5 px-3 py-2 font-mono text-xs text-white/70">
              {signal}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function DiagramStage({
  protocol,
}: {
  protocol: boolean;
}) {
  const title = protocol ? "Generate protocol-level EFS" : "Compose matrix-compute subsystem EFS";
  const copy = protocol
    ? "The generated diagram groups AXI channel transactions and expresses each transfer as an executable VALID/READY condition with its associated payload."
    : "The subsystem diagram composes initialization, trigger, execution status, busy-loop control, MLOAD/MSTORE transactions, completion, and error exits.";
  const image = protocol ? "/demo/axi-protocol-efs.svg" : "/demo/axi-subsystem-efs.svg";

  return (
    <>
      <PanelHeader
        eyebrow={protocol ? "Generated artifact 01" : "Generated artifact 02"}
        title={title}
        copy={copy}
        icon={protocol ? <Workflow className="h-7 w-7 text-[#76b900]" /> : <CheckCircle2 className="h-7 w-7 text-[#76b900]" />}
      />

      <div className="mt-8 max-h-[760px] overflow-auto border border-white/10 bg-[#05070a] p-3">
        <img
          src={image}
          alt={protocol ? "Generated AXI protocol EFS PlantUML diagram" : "Generated matrix-compute subsystem EFS PlantUML diagram"}
          className="block h-auto w-[2500px] max-w-none"
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-white/45">
          Rendered from the generated PlantUML artifact.
        </p>
        <a href={image} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#9ddd20] hover:text-[#b5ef39]">
          Open full-size diagram →
        </a>
      </div>
    </>
  );
}

function PanelHeader({
  eyebrow,
  title,
  copy,
  icon,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#76b900]">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold">{title}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-white/55">{copy}</p>
      </div>
      {icon}
    </div>
  );
}

export default function AxiGenerationDemoPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [completedThrough, setCompletedThrough] = useState(0);
  const [running, setRunning] = useState(false);

  const progress = useMemo(
    () => Math.round(((completedThrough + 1) / stages.length) * 100),
    [completedThrough],
  );

  async function runDemo() {
    if (running) return;
    setRunning(true);
    setActiveStage(0);
    setCompletedThrough(0);

    for (let index = 0; index < stages.length; index += 1) {
      setActiveStage(index);
      await new Promise((resolve) => setTimeout(resolve, index === 0 ? 700 : 1100));
      setCompletedThrough(index);
    }

    setRunning(false);
  }

  function resetDemo() {
    setRunning(false);
    setActiveStage(0);
    setCompletedThrough(0);
  }

  function selectStage(index: number) {
    setRunning(false);
    setActiveStage(index);
    setCompletedThrough((current) => Math.max(current, index));
  }

  return (
    <main className="min-h-screen bg-[#080b0f] text-white">
      <SiteNav />

      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_75%_10%,rgba(118,185,0,0.16),transparent_32%)]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/40">
            <Link href="/demo" className="hover:text-[#76b900]">Demo center</Link>
            <ArrowRight className="h-3 w-3" />
            <span className="text-[#76b900]">Use case 01</span>
          </div>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#76b900]">Live EFS generation</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-7xl">
                Generate executable AXI flows from specification intent.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">
                Select any stage to inspect its input, processing result, and generated visual. Run the full demo to move through all five stages automatically.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={runDemo}
                disabled={running}
                className="inline-flex items-center gap-2 bg-[#76b900] px-6 py-3.5 font-semibold text-black transition hover:bg-[#8bd000] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Play className="h-4 w-4" />
                {running ? "Generating…" : "Run live demo"}
              </button>
              <button
                onClick={resetDemo}
                className="inline-flex items-center gap-2 border border-white/15 px-4 py-3.5 text-white/75 transition hover:border-[#76b900]"
                aria-label="Reset demo"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0d1218]">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <div className="flex items-center gap-5">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/8">
              <div className="h-full bg-[#76b900] transition-all duration-700" style={{ width: `${progress}%` }} />
            </div>
            <span className="w-12 text-right font-mono text-sm text-[#9ddd20]">{progress}%</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[360px_1fr] lg:px-8">
          <aside className="space-y-3">
            {stages.map((stage, index) => {
              const active = index === activeStage;
              const state = active ? "active" : index <= completedThrough ? "complete" : "pending";

              return (
                <button
                  key={stage.number}
                  onClick={() => selectStage(index)}
                  className={`w-full border p-5 text-left transition ${
                    active
                      ? "border-[#76b900] bg-[#76b900]/8"
                      : "border-white/10 bg-[#10161d] hover:border-white/25"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-[#76b900]">{stage.number}</span>
                    <StatusPill state={state} />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold">{stage.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/50">{stage.description}</p>
                </button>
              );
            })}
          </aside>

          <div className="min-w-0 border border-white/10 bg-[#0d1218] p-6 sm:p-8">
            {activeStage === 0 ? <StageOne /> : null}
            {activeStage === 1 ? <StageTwo /> : null}
            {activeStage === 2 ? <StageThree /> : null}
            {activeStage === 3 ? <DiagramStage protocol /> : null}
            {activeStage === 4 ? <DiagramStage protocol={false} /> : null}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1218] py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4 lg:px-8">
          {[
            ["2", "Specification sources"],
            ["7", "AXI channel groups"],
            ["19+", "Interface signals"],
            ["2", "Rendered EFS diagrams"],
          ].map(([value, label]) => (
            <div key={label} className="border border-white/10 bg-black/20 p-6 text-center">
              <p className="text-3xl font-semibold text-[#76b900]">{value}</p>
              <p className="mt-2 text-sm text-white/45">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
