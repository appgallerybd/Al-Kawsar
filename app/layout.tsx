import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: { default: "Al-Kawsar — Read. Write. Share.", template: "%s | Al-Kawsar" },
  description: "A modern editorial and social publishing platform for thoughtful writing, discovery, and conversation.",
  applicationName: "Al-Kawsar",
  keywords: ["blog", "publishing", "writing", "articles", "community", "Al-Kawsar"],
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "Al-Kawsar", title: "Al-Kawsar — Read. Write. Share.", description: "A modern editorial and social publishing platform." },
  twitter: { card: "summary_large_image", title: "Al-Kawsar — Read. Write. Share.", description: "A modern editorial and social publishing platform." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
