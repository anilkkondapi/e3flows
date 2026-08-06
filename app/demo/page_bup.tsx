"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const imageGallery = [
  "/efs-overview.png",
  "/flow-image.png",
  "/func_val_match.png",
  "/func_val_mismatch1.png",
  "/func_val_mismatch2.png"
];

export default function DemoPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openImage = (index: number) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);
  const nextImage = () => setCurrentIndex((currentIndex! + 1) % imageGallery.length);
  const prevImage = () => setCurrentIndex((currentIndex! - 1 + imageGallery.length) % imageGallery.length);

  return (
    <main className="min-h-screen px-6 py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-yellow-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">EFS: Automation in Action</h1>
        <p className="mb-4 text-lg">E2E automation implemented by EFS tool chain is summarized below:</p>

        {imageGallery.map((src, i) => (
          <div key={src} className="mt-8 mb-8 cursor-pointer" onClick={() => openImage(i)}>
            <img
              src={src}
              alt={src}
              className="w-full rounded border border-slate-300 dark:border-slate-600 shadow hover:scale-105 transition"
            />
          </div>
        ))}

        <ul className="list-disc list-inside mb-6">
          <li>1. SOC/IP or Subsystem architect specifies the flow using PlantUML based on EFS syntax...</li>
          <li>2. EFS tool chain retrieves all relevant information...</li>
          <li>3. EFS tool chain generates test stimulus...</li>
          <li>4. EFS tool chain integrates with EDA waveform formats...</li>
          <li>5. EFS tool chain interacts with RDL database...</li>
          <li>6. EFS tool chain supports generation of checkers...</li>
          <li>6a. <strong>Perfect Match</strong>...</li>
          <li>6b. <strong>Mismatch</strong> (Incorrect Values)</li>
          <li>6c. <strong>Mismatch</strong> (Incorrect Sequence and Values)</li>
        </ul>

        <p className="text-center text-slate-600 text-lg mb-6">
          If you are interested in learning more about EFS tools or watch a demo, please <Link href="/contact" className="text-blue-600 hover:underline">contact InSync</Link>.
        </p>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center text-blue-600 dark:text-yellow-300 hover:underline">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>

      {currentIndex !== null && (
        <Dialog open={true} onClose={closeImage} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative">
            <img
              src={imageGallery[currentIndex]}
              alt="Fullscreen"
              className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
            />
            <button onClick={prevImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white hover:text-yellow-300">
              <ChevronLeft size={32} />
            </button>
            <button onClick={nextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white hover:text-yellow-300">
              <ChevronRight size={32} />
            </button>
          </div>
        </Dialog>
      )}
    </main>
  );
}
