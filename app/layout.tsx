import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SyncSilica EFS | From Specification to Silicon",
    template: "%s | SyncSilica",
  },
  description:
    "Executable Functional Specification automation for semiconductor architecture, design, verification, validation, and implementation conformance.",
  metadataBase: new URL("https://www.e3flows.com"),
  icons: {
    icon: "/syncsilica-mark.png",
    shortcut: "/syncsilica-mark.png",
    apple: "/syncsilica-mark.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
