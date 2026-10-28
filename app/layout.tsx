import type { Metadata, Viewport } from "next";
import { Archivo, Great_Vibes, Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Local Business Media Growth | Social Media Marketing for Local Businesses",
  description:
    "Helping local businesses grow online with social media marketing, SEO, website development, and Google Business Profile optimization.",
};

export const viewport: Viewport = {
  themeColor: "#5f4cc3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${archivo.variable} ${greatVibes.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
