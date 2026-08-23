import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanuku Akhil — AI/ML Engineer",
  description:
    "Portfolio of Tanuku Akhil, an AI/ML undergraduate building practical intelligent systems with Python, machine learning and full-stack engineering.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Tanuku Akhil — AI/ML Engineer",
    description: "Building intelligence into useful systems.",
  },
  twitter: {
    card: "summary",
    title: "Tanuku Akhil — AI/ML Engineer",
    description: "Building intelligence into useful systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
