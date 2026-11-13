import type { Metadata, Viewport } from "next";
import "./globals.css";
import LoaderGate from "@/components/LoaderGate";

export const metadata: Metadata = {
  title: "Bhargava Nandan Kammela — Portfolio",
  description: "Video Editor & Content Creator Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/tailwind.css" />
      </head>
      <body suppressHydrationWarning>
        <LoaderGate>
          {children}
        </LoaderGate>
      </body>
    </html>
  );
}
