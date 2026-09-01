"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, Cpu, GraduationCap } from "lucide-react";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function NgitCollaborationPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <SiteNav />

      <section className="relative overflow-hidden pt-28">
        <div className="hero-grid absolute inset-0" />
        <div className="glow absolute -right-56 top-0 h-[700px] w-[700px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/50 transition hover:text-[#76b900]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to SyncSilica
          </Link>

          <div className="mt-10 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-black uppercase tracking-[.2em] text-[#76b900]">
                Company News
              </span>
              <span className="text-white/20">•</span>
              <span className="text-sm font-semibold text-white/45">August 1, 2026 • Hyderabad, India</span>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              From Specification to Silicon:
              <span className="block text-white">
                SyncSilica and NGIT
              </span>
              <span className="block text-white/55">
                Announce Strategic Collaboration
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-white/60 sm:text-xl">
              SyncSilica and Neil Gogte Institute of Technology (NGIT), Hyderabad, have
              entered into a collaboration agreement to explore innovative approaches in
              semiconductor architecture, design automation, verification, and AI-driven
              system development.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f14]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/syncsilica-ngit-collaboration.jpg"
                alt="SyncSilica and NGIT leaders during the collaboration signing ceremony in Hyderabad, India"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-white/40">
            Leaders from SyncSilica and NGIT during the signing ceremony for the
            collaboration agreement in Hyderabad, India.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080b0f]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-28">
          <article className="max-w-3xl">
            <div className="text-sm font-black uppercase tracking-[.2em] text-[#76b900]">
              The Collaboration
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-[-.04em] sm:text-4xl">
              Connecting industry experience with academic research.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-white/60 sm:text-lg">
              <p>
                The collaboration brings together SyncSilica&apos;s work on the EFS
                (Executable Functional Specification) platform and NGIT&apos;s academic
                and research environment.
              </p>

              <p>
                The organizations plan to explore new methods for improving productivity,
                quality, and engineering efficiency across semiconductor architecture,
                design, verification, and AI-assisted system development.
              </p>

              <p>
                The collaboration is intended to provide a framework for technical
                exploration, research engagement, and practical engineering work around
                next-generation semiconductor development workflows.
              </p>
            </div>
          </article>

          <div className="space-y-5">
            <div className="tech-panel p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#76b900]/30 bg-[#76b900]/10">
                  <Cpu className="h-5 w-5 text-[#76b900]" />
                </div>
                <div>
                  <h3 className="font-black">Semiconductor Engineering</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Architecture, design automation, verification, and executable
                    engineering workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="tech-panel p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#76b900]/30 bg-[#76b900]/10">
                  <GraduationCap className="h-5 w-5 text-[#76b900]" />
                </div>
                <div>
                  <h3 className="font-black">Academic Collaboration</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Combining industry expertise with academic research and student
                    engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="tech-panel p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#76b900]/30 bg-[#76b900]/10">
                  <Building2 className="h-5 w-5 text-[#76b900]" />
                </div>
                <div>
                  <h3 className="font-black">Industry Impact</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Advancing technologies that improve productivity, quality, and
                    efficiency in the semiconductor ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="tech-panel p-8 md:p-10">
              <div className="text-xs font-black uppercase tracking-[.2em] text-[#76b900]">
                SyncSilica
              </div>
              <h3 className="mt-4 text-2xl font-black">Executable Functional Specification</h3>
              <p className="mt-4 text-base leading-7 text-white/55">
                SyncSilica is developing EFS to transform semiconductor specifications
                into executable engineering intent that can drive synchronized
                architecture, implementation, and validation workflows.
              </p>
              <Link
                href="/product"
                className="mt-7 inline-flex items-center gap-2 font-extrabold text-[#76b900] transition hover:text-[#8bd000]"
              >
                Explore EFS
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="tech-panel p-8 md:p-10">
              <div className="text-xs font-black uppercase tracking-[.2em] text-[#76b900]">
                NGIT
              </div>
              <h3 className="mt-4 text-2xl font-black">Neil Gogte Institute of Technology</h3>
              <p className="mt-4 text-base leading-7 text-white/55">
                NGIT, based in Hyderabad, India, contributes an academic and research
                environment that supports technical exploration and engineering
                collaboration.
              </p>
              <a
                href="https://ngit.ac.in/"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-extrabold text-[#76b900] transition hover:text-[#8bd000]"
              >
                Visit NGIT
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050505]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="relative overflow-hidden border border-white/10 bg-[#0b0f14] px-7 py-12 md:px-12 md:py-16">
            <div className="glow absolute -right-40 -top-40 h-[450px] w-[450px]" />
            <div className="relative max-w-3xl">
              <div className="text-sm font-black uppercase tracking-[.2em] text-[#76b900]">
                Looking Ahead
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-[-.04em] sm:text-4xl">
                Advancing executable engineering workflows from specification to silicon.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                SyncSilica looks forward to sharing future technical developments and
                collaboration milestones as the work with NGIT progresses.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 bg-[#76b900] px-6 py-3 font-extrabold text-black transition hover:bg-[#8bd000]"
                >
                  Explore the EFS Platform
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/15 px-6 py-3 font-extrabold text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  Contact SyncSilica
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
