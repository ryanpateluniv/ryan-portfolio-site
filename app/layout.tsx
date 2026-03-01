import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Patel — CS Student & Builder",
  description:
    "Portfolio of Ryan Patel — CS freshman at ASU focused on ML, systems, and full-stack development.",
  openGraph: {
    title: "Ryan Patel — CS Student & Builder",
    description: "CS Student & Programmer · AI & ML Enthusiast · Quantitative Math",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
