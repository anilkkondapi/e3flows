import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" aria-label="SyncSilica home" className="inline-block">
            <Image
              src="/syncsilica-logo.png"
              alt="SyncSilica LLC"
              width={300}
              height={102}
              className="h-auto w-[220px]"
            />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
            Specification-driven automation for architecture, design, verification, validation, and first-silicon success.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Platform</div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <Link href="/#platform">EFS Engine</Link>
            <Link href="/demo">Technology</Link>
            <Link href="/try">Explore capabilities</Link>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Company</div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <Link href="/brochure">Product brochure</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/40">
        © 2026 SyncSilica LLC. All rights reserved.
      </div>
    </footer>
  );
}
