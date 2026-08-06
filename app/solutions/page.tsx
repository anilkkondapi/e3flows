import {
  Boxes,
  Cpu,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

const solutions = [
  {
    title: "AI accelerators",
    challenge:
      "Complex tensor pipelines, DMA engines, HBM traffic, coherency, and command sequencing create cross-layer validation risk.",
    application:
      "Generate executable data-movement, memory, reset, error-handling, and accelerator-control flows.",
    outcome:
      "Earlier coverage of architecture intent and fewer integration escapes.",
    icon: Cpu,
  },
  {
    title: "CPU and GPU subsystems",
    challenge:
      "Cache coherency, interconnect behavior, power states, and multi-cycle control sequences span many specifications.",
    application:
      "Model protocol interactions, state transitions, reset, memory ordering, and subsystem dependencies.",
    outcome:
      "Reusable architecture-derived collateral across product derivatives.",
    icon: Boxes,
  },
  {
    title: "Networking and high-speed I/O",
    challenge:
      "AXI, CHI, PCIe, CXL, and Ethernet requirements are distributed across protocol and implementation documents.",
    application:
      "Extract transactions, link states, register programming, error recovery, and interoperability behavior.",
    outcome:
      "Traceable protocol flows and faster compliance-debug cycles.",
    icon: Network,
  },
  {
    title: "Automotive systems",
    challenge:
      "ADAS, zonal controllers, BMS, and safety functions require deterministic behavior across interacting features.",
    application:
      "Create executable functional, safety, reset, fault, and cross-feature validation flows.",
    outcome:
      "Better change-impact analysis and broader pre-silicon scenario coverage.",
    icon: ShieldCheck,
  },
  {
    title: "Datacenter and cloud silicon",
    challenge:
      "Server fabrics, accelerators, memory expansion, and platform initialization must work across large configuration spaces.",
    application:
      "Automate initialization, protocol interoperability, configuration, error, and fleet-scale validation scenarios.",
    outcome:
      "Scalable validation assets from subsystem simulation through silicon.",
    icon: Server,
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <SiteNav />

      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_75%_12%,rgba(118,185,0,0.16),transparent_34%)]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#76b900]">
            Industry solutions
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-7xl">
            Apply executable intent to complex semiconductor systems.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
            Each solution combines the EFS platform with the specifications,
            protocol knowledge, generated collateral, and validation evidence
            needed for a particular class of silicon.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                className="border border-white/10 bg-[#111820] p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-[#76b900]/30 bg-[#76b900]/8">
                  <Icon className="h-6 w-6 text-[#76b900]" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold">{solution.title}</h2>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#76b900]">
                      Engineering challenge
                    </p>
                    <p className="mt-2 leading-7 text-white/58">
                      {solution.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#76b900]">
                      EFS application
                    </p>
                    <p className="mt-2 leading-7 text-white/58">
                      {solution.application}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <p className="font-semibold text-white/85">
                      {solution.outcome}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
