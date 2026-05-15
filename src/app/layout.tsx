import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://main.d12146rxri0v53.amplifyapp.com"),
  title: "Hiiren Rathod — Product Manager Portfolio",
  description:
    "Associate PM with 2+ years of direct product ownership. Built AI-powered products from zero — 3.5× lead growth, 60% conversion, AWS Amplify deployed dashboard. Open to PM roles.",
  openGraph: {
    title: "Hiiren Rathod — PM Portfolio",
    description:
      "Built AI-powered products from zero. 10 case studies across fintech, e-commerce, AI, and SaaS.",
    url: "https://main.d12146rxri0v53.amplifyapp.com",
    siteName: "Hiiren Rathod Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiiren Rathod — PM Portfolio",
    description: "Built AI-powered products from zero. 10 case studies.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
