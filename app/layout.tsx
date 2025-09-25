import type { Metadata } from "next";
import { Inter, Inria_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const inria = Inria_Serif({
  subsets: ['latin'],
  variable: '--font-inria',
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: "small-ai | Your AI Partner for Small Business Success",
  description: "Practical, easy-to-understand AI tools that deliver immediate value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${inria.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
