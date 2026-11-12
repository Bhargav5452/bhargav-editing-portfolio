import type { Metadata } from "next";
import "./globals.css";
import LoaderGate from "@/components/LoaderGate";

export const metadata: Metadata = {
  title: "Bhargava Nandan Kammela — Portfolio",
  description: "Video Editor & Content Creator Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0d0d0d', overflow: 'hidden' }}>
        <LoaderGate>
          {children}
        </LoaderGate>
      </body>
    </html>
  );
}
