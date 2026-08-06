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
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

const eventRows = [{"step": 1, "keyword": "SIGNAL", "source": "Manager", "destination": "Subordinate", "signal": "rst_n", "expected": "0"}, {"step": 2, "keyword": "SIGNAL", "source": "Manager", "destination": "Subordinate", "signal": "clk", "expected": "[clock]"}, {"step": 3, "keyword": "SIGNAL", "source": "Manager", "destination": "Subordinate", "signal": "start", "expected": "1"}, {"step": 4, "keyword": "SIGNAL", "source": "Manager", "destination": "Subordinate", "signal": "instruction", "expected": "[opcode]"}, {"step": 5, "keyword": "WHILE", "source": "Subordinate", "destination": "Manager", "signal": "busy", "expected": "1"}, {"step": 6, "keyword": "IF", "source": "Manager", "destination": "Subordinate", "signal": "instruction", "expected": "MLOAD"}, {"step": 7, "keyword": "IF", "source": "Manager", "destination": "Subordinate", "signal": "axi_awvalid", "expected": "1"}, {"step": 8, "keyword": "IF", "source": "Subordinate", "destination": "Manager", "signal": "axi_awready", "expected": "1"}, {"step": 9, "keyword": "SIGNAL", "source": "Manager", "destination": "Subordinate", "signal": "axi_awaddr", "expected": "[waddr]"}, {"step": 10, "keyword": "IF", "source": "Manager", "destination": "Subordinate", "signal": "axi_wvalid", "expected": "1"}, {"step": 11, "keyword": "IF", "source": "Subordinate", "destination": "Manager", "signal": "axi_wready", "expected": "1"}, {"step": 12, "keyword": "SIGNAL", "source": "Manager", "destination": "Subordinate", "signal": "axi_wdata[511:0]", "expected": "[data]"}, {"step": 13, "keyword": "SIGNAL", "source": "Manager", "destination": "Subordinate", "signal": "axi_wstrb[63:0]", "expected": "[strb]"}, {"step": 14, "keyword": "SIGNAL", "source": "Manager", "destination": "Subordinate", "signal": "axi_wlast", "expected": "1"}, {"step": 15, "keyword": "IF", "source": "Subordinate", "destination": "Manager", "signal": "axi_bvalid", "expected": "1"}, {"step": 16, "keyword": "IF", "source": "Manager", "destination": "Subordinate", "signal": "axi_bready", "expected": "1"}, {"step": 17, "keyword": "IF", "source": "Manager", "destination": "Subordinate", "signal": "instruction", "expected": "MSTORE"}, {"step": 18, "keyword": "SIGNAL", "source": "Subordinate", "destination": "Manager", "signal": "axi_bresp", "expected": "0"}, {"step": 19, "keyword": "IF", "source": "Manager", "destination": "Subordinate", "signal": "axi_arvalid", "expected": "1"}, {"step": 20, "keyword": "IF", "source": "Subordinate", "destination": "Manager", "signal": "axi_arready", "expected": "1"}, {"step": 21, "keyword": "SIGNAL", "source": "Manager", "destination": "Subordinate", "signal": "axi_araddr", "expected": "[raddr]"}, {"step": 22, "keyword": "IF", "source": "Subordinate", "destination": "Manager", "signal": "axi_rvalid", "expected": "1"}, {"step": 23, "keyword": "IF", "source": "Manager", "destination": "Subordinate", "signal": "axi_rready", "expected": "1"}, {"step": 24, "keyword": "SIGNAL", "source": "Subordinate", "destination": "Manager", "signal": "axi_rdata[511:0]", "expected": "[rdata]"}, {"step": 25, "keyword": "SIGNAL", "source": "Subordinate", "destination": "Manager", "signal": "axi_rlast", "expected": "1"}, {"step": 26, "keyword": "SIGNAL", "source": "Subordinate", "destination": "Manager", "signal": "axi_rresp", "expected": "0"}, {"step": 27, "keyword": "IF", "source": "Subordinate", "destination": "Manager", "signal": "done", "expected": "1"}, {"step": 28, "keyword": "IF", "source": "Subordinate", "destination": "Manager", "signal": "error", "expected": "1"}];

const stages = [
  ["01", "Load generated EFS", "Use the generated matrix-compute AXI PlantUML as the executable source of expected behavior."],
  ["02", "Parse EFS constructs", "Extract IF/WHILE conditions, signals, directions, values, subflows, loops, and asynchronous constructs."],
  ["03", "Normalize validation events", "Convert executable flow statements into ordered rows for comparison and traceability."],
  ["04", "Load implementation evidence", "Associate observed signal values and transaction evidence with each expected EFS step."],
  ["05", "Validate and localize", "Report matched steps or identify the exact condition, signal, expected value, and observed value that diverged."],
];

export default function AxiValidationDemoPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [running, setRunning] = useState(false);
  const [injectMismatch, setInjectMismatch] = useState(false);

  const validationRows = useMemo(
    () =>
      eventRows.map((row) => {
        const mismatch = injectMismatch && row.signal === "axi_rresp";
        return {
          ...row,
          observed: mismatch ? "2" : row.expected,
          match: !mismatch,
        };
      }),
    [injectMismatch],
  );

  const failedRows = validationRows.filter((row) => !row.match);
  const passed = validationRows.length - failedRows.length;

  async function runDemo() {
    if (running) return;
    setRunning(true);
    setActiveStage(0);
    for (let index = 0; index < stages.length; index += 1) {
      setActiveStage(index);
      await new Promise((resolve) => setTimeout(resolve, index === 0 ? 650 : 950));
    }
    setRunning(false);
  }

  function reset() {
    setRunning(false);
    setActiveStage(0);
    setInjectMismatch(false);
  }

  return (
    <main className="min-h-screen bg-[#080b0f] text-white">
      <SiteNav />

      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_75%_10%,rgba(118,185,0,0.16),transparent_32%)]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/40">
            <Link href="/demo" className="hover:text-[#76b900]">Demo center</Link>
            <ArrowRight className="h-3 w-3" />
            <span className="text-[#76b900]">Use case 02</span>
          </div>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#76b900]">
                AXI EFS validation
              </p>
              <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-7xl">
                Validate implementation evidence against executable AXI intent.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">
                Parse the generated EFS flow into normalized validation events, compare each expected condition with observed evidence,
                and localize the exact mismatch.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={runDemo}
                disabled={running}
                className="inline-flex items-center gap-2 bg-[#76b900] px-6 py-3.5 font-semibold text-black hover:bg-[#8bd000] disabled:opacity-60"
              >
                <Play className="h-4 w-4" />
                {running ? "Validating…" : "Run validation"}
              </button>
              <button
                onClick={reset}
                className="inline-flex items-center border border-white/15 px-4 py-3.5 text-white/75 hover:border-[#76b900]"
                aria-label="Reset demo"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[360px_1fr] lg:px-8">
          <aside className="space-y-3">
            {stages.map(([number, title, description], index) => (
              <button
                key={number}
                onClick={() => {
                  setRunning(false);
                  setActiveStage(index);
                }}
                className={`w-full border p-5 text-left transition ${
                  activeStage === index
                    ? "border-[#76b900] bg-[#76b900]/8"
                    : "border-white/10 bg-[#10161d] hover:border-white/25"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-[#76b900]">{number}</span>
                  {index <= activeStage ? (
                    <CheckCircle2 className="h-4 w-4 text-[#76b900]" />
                  ) : (
                    <span className="text-xs text-white/25">Pending</span>
                  )}
                </div>
                <h2 className="mt-4 text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/50">{description}</p>
              </button>
            ))}
          </aside>

          <section className="min-w-0 border border-white/10 bg-[#0d1218] p-6 sm:p-8">
            {activeStage === 0 ? (
              <>
                <Header
                  eyebrow="Validation input"
                  title="Generated matrix-compute AXI EFS"
                  copy="The validator consumes executable PlantUML rather than returning to the original static specification."
                  icon={<FileText className="h-7 w-7 text-[#76b900]" />}
                />
                <div className="mt-8 overflow-auto border border-white/10 bg-[#05070a] p-3">
                  <img
                    src="/demo/axi-subsystem-efs.svg"
                    alt="Generated matrix-compute subsystem EFS diagram"
                    className="block h-auto min-w-[1100px] max-w-none"
                  />
                </div>
              </>
            ) : null}

            {activeStage === 1 ? (
              <>
                <Header
                  eyebrow="Parser capability"
                  title="Parse executable EFS constructs"
                  copy="The parser recognizes signals, messages, registers, subflows, firmware execution, loops, asynchronous blocks, IF/WHILE/ELSE IF conditions, protocol events, and math functions."
                  icon={<Search className="h-7 w-7 text-[#76b900]" />}
                />
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    ["Conditions", "Recursively parse nested IF and WHILE blocks and preserve logical operators."],
                    ["Signals", "Extract source, destination, signal name, bit range, and expected value."],
                    ["Hierarchy", "Follow subflows and identify asynchronous execution blocks."],
                    ["Other events", "Support messages, registers, loops, firmware functions, protocol fields, and math functions."],
                  ].map(([title, copy]) => (
                    <article key={title} className="border border-white/10 bg-black/20 p-6">
                      <h3 className="font-semibold text-[#9ddd20]">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/55">{copy}</p>
                    </article>
                  ))}
                </div>
              </>
            ) : null}

            {activeStage === 2 ? (
              <>
                <Header
                  eyebrow="Normalized output"
                  title="Ordered validation event table"
                  copy={`${eventRows.length} executable conditions and signal events were extracted from the generated EFS flow.`}
                  icon={<Workflow className="h-7 w-7 text-[#76b900]" />}
                />
                <EventTable rows={validationRows.slice(0, 18)} showResult={false} />
              </>
            ) : null}

            {activeStage === 3 ? (
              <>
                <Header
                  eyebrow="Implementation evidence"
                  title="Map observed values to expected EFS steps"
                  copy="The demo uses deterministic observed values and lets you inject one AXI response mismatch to demonstrate failure localization."
                  icon={<ShieldCheck className="h-7 w-7 text-[#76b900]" />}
                />
                <div className="mt-8 flex items-center justify-between gap-6 border border-white/10 bg-black/20 p-6">
                  <div>
                    <h3 className="text-lg font-semibold">Inject AXI response mismatch</h3>
                    <p className="mt-2 text-sm text-white/50">
                      Change observed <span className="font-mono text-white/75">axi_rresp</span> from expected 0 to observed 2.
                    </p>
                  </div>
                  <button
                    onClick={() => setInjectMismatch((value) => !value)}
                    className={`relative h-8 w-14 rounded-full transition ${
                      injectMismatch ? "bg-[#76b900]" : "bg-white/15"
                    }`}
                    aria-pressed={injectMismatch}
                  >
                    <span
                      className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                        injectMismatch ? "left-7" : "left-1"
                      }`}
                    />
                  </button>
                </div>
                <EventTable
                  rows={validationRows.filter((row) =>
                    ["axi_rvalid", "axi_rready", "axi_rdata[511:0]", "axi_rlast", "axi_rresp"].includes(row.signal),
                  )}
                  showResult
                />
              </>
            ) : null}

            {activeStage === 4 ? (
              <>
                <Header
                  eyebrow="Validation result"
                  title={failedRows.length === 0 ? "Implementation conforms to executable intent" : "Mismatch localized"}
                  copy={
                    failedRows.length === 0
                      ? "Every normalized EFS condition and signal event matched the corresponding observed evidence."
                      : "EFS identified the exact failing signal, expected value, observed value, and validation step."
                  }
                  icon={
                    failedRows.length === 0 ? (
                      <CheckCircle2 className="h-8 w-8 text-[#76b900]" />
                    ) : (
                      <ShieldCheck className="h-8 w-8 text-amber-400" />
                    )
                  }
                />

                <div className="mt-8 grid gap-5 sm:grid-cols-3">
                  <Metric value={String(validationRows.length)} label="Total checks" />
                  <Metric value={String(passed)} label="Passed" />
                  <Metric value={String(failedRows.length)} label="Failed" warn={failedRows.length > 0} />
                </div>

                {failedRows.length === 0 ? (
                  <div className="mt-8 border border-[#76b900]/35 bg-[#76b900]/8 p-7">
                    <p className="text-xl font-semibold text-[#9ddd20]">PASS - no mismatches detected</p>
                    <p className="mt-3 leading-7 text-white/60">
                      Reset or return to stage 04 and enable mismatch injection to demonstrate localization.
                    </p>
                  </div>
                ) : (
                  <div className="mt-8 border border-amber-400/35 bg-amber-400/5 p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Localized failure</p>
                    <div className="mt-5 grid gap-4 md:grid-cols-5">
                      <ResultField label="Step" value={String(failedRows[0].step)} />
                      <ResultField label="Signal" value={failedRows[0].signal} />
                      <ResultField label="Source" value={failedRows[0].source} />
                      <ResultField label="Expected" value={failedRows[0].expected} />
                      <ResultField label="Observed" value={failedRows[0].observed} />
                    </div>
                  </div>
                )}

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => setInjectMismatch(false)}
                    className="border border-white/15 px-5 py-3 text-sm font-semibold text-white/70 hover:border-[#76b900]"
                  >
                    Run matched case
                  </button>
                  <button
                    onClick={() => setInjectMismatch(true)}
                    className="bg-[#76b900] px-5 py-3 text-sm font-semibold text-black hover:bg-[#8bd000]"
                  >
                    Inject mismatch
                  </button>
                </div>
              </>
            ) : null}
          </section>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Header({
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

function EventTable({
  rows,
  showResult,
}: {
  rows: Array<{
    step: number;
    keyword: string;
    source: string;
    destination: string;
    signal: string;
    expected: string;
    observed?: string;
    match?: boolean;
  }>;
  showResult: boolean;
}) {
  return (
    <div className="mt-8 max-h-[520px] overflow-auto border border-white/10">
      <table className="w-full min-w-[900px] text-left text-sm">
        <thead className="sticky top-0 bg-[#131a22] text-white/45">
          <tr>
            <th className="px-4 py-3">Step</th>
            <th className="px-4 py-3">Keyword</th>
            <th className="px-4 py-3">Source</th>
            <th className="px-4 py-3">Destination</th>
            <th className="px-4 py-3">Signal</th>
            <th className="px-4 py-3">Expected</th>
            {showResult ? <th className="px-4 py-3">Observed</th> : null}
            {showResult ? <th className="px-4 py-3">Result</th> : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.step}-${row.signal}`} className="border-t border-white/8">
              <td className="px-4 py-3 font-mono text-[#76b900]">{row.step}</td>
              <td className="px-4 py-3 text-white/55">{row.keyword}</td>
              <td className="px-4 py-3 text-white/65">{row.source}</td>
              <td className="px-4 py-3 text-white/65">{row.destination}</td>
              <td className="px-4 py-3 font-mono text-xs text-white/80">{row.signal}</td>
              <td className="px-4 py-3 font-mono text-xs text-white/65">{row.expected}</td>
              {showResult ? <td className="px-4 py-3 font-mono text-xs text-white/65">{row.observed}</td> : null}
              {showResult ? (
                <td className={`px-4 py-3 font-semibold ${row.match ? "text-[#9ddd20]" : "text-amber-300"}`}>
                  {row.match ? "MATCH" : "MISMATCH"}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Metric({ value, label, warn = false }: { value: string; label: string; warn?: boolean }) {
  return (
    <div className="border border-white/10 bg-black/20 p-6 text-center">
      <p className={`text-3xl font-semibold ${warn ? "text-amber-300" : "text-[#76b900]"}`}>{value}</p>
      <p className="mt-2 text-sm text-white/45">{label}</p>
    </div>
  );
}

function ResultField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.16em] text-white/35">{label}</p>
      <p className="mt-2 break-all font-mono text-sm text-white/80">{value}</p>
    </div>
  );
}
