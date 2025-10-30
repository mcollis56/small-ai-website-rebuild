import type { Metadata } from "next";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import CalProvider from "@/app/components/cal-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "small-ai | AI Made Simple for Small Businesses",
  description: "Save time, save money, and stay ahead with practical AI solutions for small business owners. No tech jargon, just solutions that work.",
  keywords: "AI, small business, automation, chatbots, artificial intelligence, business tools",
  authors: [{ name: "Mark" }],
  openGraph: {
    title: "small-ai | AI Made Simple for Small Businesses",
    description: "Save time, save money, and stay ahead with practical AI solutions for small business owners.",
    type: "website",
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-[#0D0D0D]">
        <CalProvider>
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </CalProvider>
      </body>
    </html>
  );
}
