import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  FileText,
  GitBranch,
  Search,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { EfsExecutionGraph } from "@/components/home/efs-execution-graph";

const executionSteps = [
  ["01", "Specification", "PDF, DOCX, PPT, tables, diagrams, and protocol documents."],
  ["02", "Architecture intent", "Requirements, interfaces, states, constraints, and expected behavior."],
  ["03", "Executable flows", "Machine-executable control, protocol, state, and transaction models."],
  ["04", "Design + verification", "RTL templates, testbench scaffolding, assertions, checkers, and coverage."],
  ["05", "EDA implementation", "Simulation, synthesis, static checks, timing, power, and implementation flows."],
  ["06", "Silicon validation", "Waveform conformance, mismatch localization, regression, and volume validation."],
];

const artifacts = [
  ["RTL templates", "Architecture-derived RTL skeletons and interface logic."],
  ["Verification", "UVM scaffolding, stimulus, monitors, assertions, and protocol checkers."],
  ["Validation", "Executable checkers for VCD/FSDB analysis and implementation conformance."],
  ["Documentation", "Traceable flows, state diagrams, sequence views, and generated collateral."],
];

const agents = [
  "Specification agent",
  "Protocol agent",
  "Architecture agent",
  "RTL agent",
  "Verification agent",
  "Validation agent",
  "Analytics agent",
];

const capabilities = [
  ["Specification parsing", true, false],
  ["Protocol extraction", true, false],
  ["Executable specifications", true, false],
  ["Architecture modeling", true, "Limited"],
  ["Verification automation", true, "Partial"],
  ["Specification conformance", true, false],
  ["EDA flow integration", "Planned", true],
];


function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#76b900]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg">{copy}</p>
      ) : null}
    </div>
  );
}

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <SiteNav />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(118,185,0,0.18),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_55%)]" />
        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#76b900]">
              SyncSilica EFS Platform
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-7xl">
              Engineer silicon from a single source of intent.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
              EFS transforms semiconductor specifications into executable workflows
              for architecture, design, verification, implementation conformance,
              and silicon validation.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#76b900] px-6 py-3.5 font-semibold text-black transition hover:bg-[#8bd000]"
              >
                Request a demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-[#76b900] hover:bg-white/5"
              >
                Explore the technology
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-[#76b900]/10 blur-3xl" />
            <div className="relative">
              <EfsExecutionGraph />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="The industry gap"
            title="Traditional EDA starts too late."
            copy="Semiconductor programs still rely on static documents, manual interpretation, and disconnected handoffs between architecture, design, verification, and validation."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              ["Static specifications", "PDF, DOCX, presentations, tables, and diagrams contain critical intent but are not executable.", FileText],
              ["Manual translation", "Each downstream team independently interprets requirements, creating ambiguity and duplicated effort.", GitBranch],
              ["Late discovery", "Specification gaps and behavior mismatches often surface only during verification or silicon bring-up.", Search],
            ].map(([title, text, Icon]) => (
              <article key={title as string} className="rounded-xl border border-white/10 bg-[#111820] p-7">
                <Icon className="h-7 w-7 text-[#76b900]" />
                <h3 className="mt-6 text-xl font-semibold">{title as string}</h3>
                <p className="mt-3 leading-7 text-white/60">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="EFS execution model"
            title="One continuous engineering thread."
            copy="EFS preserves architecture intent as executable models and carries it through design, verification, EDA implementation, and silicon validation."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-3">
            {executionSteps.map(([number, title, text]) => (
              <div key={number} className="bg-[#111820] p-7">
                <span className="font-mono text-xs text-[#76b900]">{number}</span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/58">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Agent-centric AI"
            title="Specialized agents coordinated around engineering intent."
            copy="The platform applies semantic inference, dynamic parsing, event extraction, protocol reasoning, FSM construction, and continuous validation."
          />

          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {agents.map((agent) => (
              <div
                key={agent}
                className="rounded-full border border-[#76b900]/30 bg-[#76b900]/5 px-5 py-3 text-sm font-medium text-white/85"
              >
                {agent}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f141b] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#76b900]">
              Executable language
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Model real hardware behavior.</h2>
            <p className="mt-6 leading-8 text-white/65">
              EFS represents sequential, conditional, asynchronous, event-driven,
              and state-based behavior using simple, analyzable, modular constructs.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["IF", "ELSE IF", "WHILE", "WAIT", "START ASYNC", "SUBFLOW", "TIMEOUT", "STATE"].map(
                (item) => (
                  <span key={item} className="rounded border border-white/12 bg-white/5 px-3 py-2 font-mono text-xs text-white/75">
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#080b0f] p-6 text-sm leading-7 text-white/75">
            <code>{`IF arvalid == 1 && arready == 1

    START ASYNC

        execute_read()

        monitor_timeout()

    END ASYNC

END IF

WAIT done == 1`}</code>
          </pre>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Generated engineering assets"
            title="Turn specifications into reusable collateral."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {artifacts.map(([title, text]) => (
              <article key={title} className="rounded-xl border border-white/10 bg-[#111820] p-7">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f141b] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Conformance"
            title="Prove that implementation matches intent."
            copy="EFS compares the specification-derived executable model with implementation evidence to identify the exact requirement, condition, or transaction that diverged."
          />

          <div className="mx-auto mt-16 grid max-w-5xl gap-3 md:grid-cols-5">
            {["Specification", "Executable flow", "RTL", "Waveform", "PASS / FAIL"].map((item) => (
              <div key={item} className="rounded-lg border border-[#76b900]/25 bg-[#111820] px-4 py-5 text-center font-medium">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {["VCD / FSDB ingestion", "Protocol validation", "Mismatch localization", "Coverage closure"].map(
              (item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.025] p-5 text-center text-white/75">
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Competitive position" title="Complement EDA. Start where EDA does not." />

          <div className="mt-16 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="bg-[#131a22]">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-white/70">Capability</th>
                  <th className="px-6 py-4 text-sm font-semibold text-[#76b900]">EFS</th>
                  <th className="px-6 py-4 text-sm font-semibold text-white/70">Traditional EDA / RTL AI</th>
                </tr>
              </thead>
              <tbody>
                {capabilities.map(([capability, efs, traditional]) => (
                  <tr key={capability as string} className="border-t border-white/8">
                    <td className="px-6 py-4 text-white/80">{capability as string}</td>
                    <td className="px-6 py-4 font-semibold text-[#76b900]">
                      {efs === true ? "Yes" : String(efs)}
                    </td>
                    <td className="px-6 py-4 text-white/55">
                      {traditional === true ? "Yes" : traditional === false ? "No" : String(traditional)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Business impact"
            title="Improve quality while compressing the development cycle."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-4">
            {[
              ["Earlier", "Find ambiguity before RTL and verification environments diverge."],
              ["Reusable", "Carry architecture-derived collateral across products and derivatives."],
              ["Traceable", "Connect requirements, flows, artifacts, tests, and evidence."],
              ["Scalable", "Apply the same methodology to functional, volume, and cross-feature validation."],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#111820] p-7">
                <h3 className="text-2xl font-semibold text-[#76b900]">{title}</h3>
                <p className="mt-3 leading-7 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-2xl border border-[#76b900]/25 bg-[linear-gradient(135deg,rgba(118,185,0,0.16),rgba(17,24,32,0.85))] px-7 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-semibold sm:text-5xl">Make specification intent executable.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              See how EFS can connect architecture, design, verification, implementation,
              and validation for your next SoC or IP program.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-sm bg-[#76b900] px-6 py-3.5 font-semibold text-black transition hover:bg-[#8bd000]"
            >
              Request a technical briefing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
