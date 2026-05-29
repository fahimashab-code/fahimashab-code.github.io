import type { Metadata } from "next";
import Script from "next/script";
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const storedTheme = localStorage.getItem("theme");
              const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
              const theme = storedTheme || systemTheme;
              document.documentElement.dataset.theme = theme;
              document.documentElement.style.colorScheme = theme;
            } catch (error) {
              document.documentElement.dataset.theme = "light";
              document.documentElement.style.colorScheme = "light";
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
