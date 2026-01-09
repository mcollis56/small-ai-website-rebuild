import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import CalProvider from "./components/cal-provider";

export const metadata = {
  title: "small-ai | AI Made Simple for Small Businesses",
  description: "Save time, save money, and stay ahead with AI solutions designed for small business owners. No tech jargon — just results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[#0D0D0D] text-white">
        <CalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CalProvider>
      </body>
    </html>
  );
}
