"use client";

import Image from "next/image";

export default function DemoPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">EFS Demo: Automation in Action</h1>
        <p className="mb-4 text-lg text-slate-600 dark:text-slate-300">
          Below is a simplified example of how Executable Flow Specification (EFS) transforms a natural-language spec into reusable design and validation components. This demo illustrates:
        </p>
        <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 mb-6">
          <li>Flow modeling using PlantUML</li>
        </ul>

        <div className="mt-8">
          <Image
            src="/986d922e-dbc2-4089-a81b-f57581bfa0c5.png"
            alt="EFS PlantUML Flow Diagram"
            width={1200}
            height={700}
            className="rounded border border-slate-300 dark:border-slate-600 shadow"
          />
        </div>
      </div>
    </main>
  );
}
