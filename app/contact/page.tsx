"use client";

import { ArrowRight, CheckCircle2, Mail, MessageSquare, Workflow } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <SiteNav />
      <section className="relative overflow-hidden pt-28">
        <div className="hero-grid absolute inset-0" />
        <div className="glow absolute -right-56 top-0 h-[700px] w-[700px]" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-32">
          <div>
            <div className="text-sm font-black uppercase tracking-[.2em] text-[#76b900]">Start a conversation</div>
            <h1 className="mt-6 text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl">Explore an EFS pilot for your engineering workflow.</h1>
            <p className="mt-7 text-lg leading-8 text-white/60">Tell us about the specification, protocol, IP, subsystem, or validation challenge you want to automate.</p>
            <div className="mt-12 space-y-7">
              {[
                [Workflow, "Technical fit", "Map EFS capabilities to your architecture, design, or validation workflow."],
                [MessageSquare, "Focused demonstration", "Use a representative flow or requirement from your target use case."],
                [CheckCircle2, "Pilot definition", "Identify inputs, outputs, success criteria, and integration boundaries."],
              ].map(([Icon, title, text]: any) => (
                <div key={title} className="flex gap-5">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-[#76b900]" />
                  <div><div className="font-bold">{title}</div><div className="mt-2 text-sm leading-6 text-white/50">{text}</div></div>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-panel p-7 md:p-10">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
              <Mail className="h-6 w-6 text-[#76b900]" />
              <h2 className="text-2xl font-black">Request a demo</h2>
            </div>
            <form action="https://formsubmit.co/anilkondapi@gmail.com" method="POST" className="mt-8 space-y-5">
              <input type="hidden" name="_subject" value="New EFS website inquiry" />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-white/70">Name<input type="text" name="name" required className="mt-2 w-full border border-white/15 bg-black/50 px-4 py-3 text-white outline-none focus:border-[#76b900]" /></label>
                <label className="text-sm font-semibold text-white/70">Work email<input type="email" name="email" required className="mt-2 w-full border border-white/15 bg-black/50 px-4 py-3 text-white outline-none focus:border-[#76b900]" /></label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-white/70">Company<input type="text" name="company" className="mt-2 w-full border border-white/15 bg-black/50 px-4 py-3 text-white outline-none focus:border-[#76b900]" /></label>
                <label className="text-sm font-semibold text-white/70">Role<input type="text" name="role" className="mt-2 w-full border border-white/15 bg-black/50 px-4 py-3 text-white outline-none focus:border-[#76b900]" /></label>
              </div>
              <label className="block text-sm font-semibold text-white/70">What would you like to automate?<textarea name="message" required rows={6} placeholder="Describe the specification, workflow, protocol, or validation challenge." className="mt-2 w-full resize-none border border-white/15 bg-black/50 px-4 py-3 text-white outline-none placeholder:text-white/25 focus:border-[#76b900]" /></label>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 bg-[#76b900] px-7 py-4 font-extrabold text-black transition hover:bg-[#8bd000]">Submit request <ArrowRight className="h-5 w-5" /></button>
              <p className="text-center text-xs leading-5 text-white/30">Your information will be used only to respond to this inquiry.</p>
            </form>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
