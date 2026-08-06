"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/product", label: "Platform" },
  { href: "/demo", label: "Live Demos" },
  { href: "/solutions", label: "Solutions" },
  { href: "/brochure", label: "Resources" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="SyncSilica home">
          <Image
            src="/syncsilica-logo.png"
            alt="SyncSilica LLC"
            width={260}
            height={89}
            priority
            className="h-auto w-[178px] sm:w-[205px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/70 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="inline-flex items-center bg-[#76b900] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#8bd000]">
            Request a demo
          </Link>
        </div>

        <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-base font-medium text-white/75">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 bg-[#76b900] px-5 py-3 text-center font-bold text-black">
              Request a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
