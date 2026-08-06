"use client";

import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  FlaskConical,
  Network,
  ShieldCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

const demos = [
  {
    useCase: "01",
    title: "AXI → EFS Generation",
    description:
      "Generate executable protocol and subsystem flows from the AMBA AXI specification, matrix-compute specification, and control-table intent.",
    href: "/demo/axi-generation",
    icon: Cpu,
    status: "Available",
    enabled: true,
  },
  {
    useCase: "02",
    title: "AXI EFS Validation",
    description:
      "Parse generated AXI EFS into normalized validation events, compare expected behavior with implementation evidence, and localize exact mismatches.",
    href: "/demo/axi-validation",
    icon: ShieldCheck,
    status: "Available",
    enabled: true,
  },
  {
    useCase: "03",
    title: "PCIe / CXL Extraction",
    description:
      "Convert PCIe and CXL specifications into executable link-training, transaction, recovery, and power-management flows.",
    href: "#",
    icon: Network,
    status: "Coming soon",
    enabled: false,
  },
  {
    useCase: "04",
    title: "OIF 1600ZR Validation",
    description:
      "Execute optical-compliance calculations, evaluate measured data, and generate traceable pass/fail evidence.",
    href: "#",
    icon: ShieldCheck,
    status: "Coming soon",
    enabled: false,
  },
  {
    useCase: "05",
    title: "Specification → Testbench",
    description:
      "Generate RTL scaffolding, stimulus, assertions, protocol checkers, and reusable testbench components from executable intent.",
    href: "#",
    icon: FlaskConical,
    status: "Coming soon",
    enabled: false,
  },
];

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#080b0f] text-white">
      <SiteNav />

      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_75%_15%,rgba(118,185,0,0.16),transparent_34%)]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#76b900]">
            SyncSilica live demonstrations
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-7xl">
            See executable specifications in action.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
            Explore how EFS generates executable flows from semiconductor
            specifications and validates implementation evidence against that
            executable intent.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-8">
          {demos.map((demo) => {
            const Icon = demo.icon;

            const content = (
              <>
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#76b900]/30 bg-[#76b900]/8">
                    <Icon className="h-6 w-6 text-[#76b900]" />
                  </div>

                  <span
                    className={`border px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] ${
                      demo.enabled
                        ? "border-[#76b900]/35 bg-[#76b900]/8 text-[#9ddd20]"
                        : "border-white/10 bg-white/[0.025] text-white/35"
                    }`}
                  >
                    {demo.status}
                  </span>
                </div>

                <p className="mt-8 font-mono text-xs text-[#76b900]">
                  USE CASE {demo.useCase}
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  {demo.title}
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/58">
                  {demo.description}
                </p>

                <div
                  className={`mt-9 inline-flex items-center gap-2 text-sm font-semibold ${
                    demo.enabled ? "text-[#9ddd20]" : "text-white/30"
                  }`}
                >
                  {demo.enabled ? "Launch live demo" : "In development"}
                  {demo.enabled ? <ArrowRight className="h-4 w-4" /> : null}
                </div>
              </>
            );

            return demo.enabled ? (
              <Link
                key={demo.title}
                href={demo.href}
                className="group min-h-[330px] border border-white/10 bg-[#10161d] p-8 transition hover:-translate-y-1 hover:border-[#76b900]/60 hover:bg-[#111a20]"
              >
                {content}
              </Link>
            ) : (
              <article
                key={demo.title}
                className="min-h-[330px] border border-white/10 bg-[#0d1218] p-8 opacity-75"
              >
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1218] py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-semibold">
            Generate AXI EFS, then validate it.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-7 text-white/55">
            Use Case 01 generates executable AXI protocol and subsystem flows.
            Use Case 02 parses those flows, compares expected behavior with
            implementation evidence, and localizes signal or condition mismatches.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/demo/axi-generation"
              className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-3.5 font-semibold text-white hover:border-[#76b900]"
            >
              Open AXI generation
            </Link>

            <Link
              href="/demo/axi-validation"
              className="inline-flex items-center justify-center gap-2 bg-[#76b900] px-6 py-3.5 font-semibold text-black transition hover:bg-[#8bd000]"
            >
              Open AXI validation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
