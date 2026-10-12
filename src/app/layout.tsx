import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Layavardhan Reddy — Blockchain Developer (Smart Contracts & VM-Executor)",
  description:
    "Layavardhan Reddy is a blockchain developer working on the Dharitri blockchain — building the Rust↔Go vm-executor bridge, smart contracts, and high-throughput infra. Rust, Go, JavaScript & TypeScript.",
  keywords: [
    "blockchain developer",
    "smart contracts",
    "vm-executor",
    "Rust developer",
    "Go developer",
    "Dharitri blockchain",
    "WebAssembly",
    "Web3",
    "Layavardhan Reddy",
  ],
  authors: [{ name: "Layavardhan Reddy" }],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Layavardhan Reddy — Blockchain Developer",
    description:
      "Smart contracts & VM-executor Dharitri blockchain engineering. Rust, Go, JavaScript & TypeScript.",
    url: "https://www.linkedin.com/in/layavardhanreddy/",
    siteName: "Layavardhan Reddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Layavardhan Reddy — Blockchain Developer",
    description:
      "Smart contracts & VM-executor Dharitri blockchain engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta name="darkreader-lock" content="" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <SonnerToaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
