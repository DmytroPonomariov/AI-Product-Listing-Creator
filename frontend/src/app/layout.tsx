import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@/shared/styles/globals.css";
import { cn } from "@/shared/utils/clsx";
import { LandingFooter } from "@/features/homepage/LandingFooter";
import { MainProvider } from "@/shared/providers/MainProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SellFaster | AI-Powered Marketplace Listing Creator",
  description:
    "Create marketplace-ready product listings instantly from a single photo. Upload, optimize, and sell faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <MainProvider>{children}</MainProvider>
        <LandingFooter />
      </body>
    </html>
  );
}
