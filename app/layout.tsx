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
