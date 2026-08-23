import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://akhil-aiml-portfolio.tanukuakhil-codes.chatgpt.site"),
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
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tanuku Akhil — AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanuku Akhil — AI/ML Engineer",
    description: "Building intelligence into useful systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
