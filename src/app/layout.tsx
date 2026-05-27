import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fahim Ashab | Full Stack Developer",
  description:
    "Minimalist portfolio of Fahim Ashab, a full-stack developer focused on Next.js, AWS serverless, and cloud-based web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
