import "./globals.css";
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">
        <CalProvider>
          <main>{children}</main>
        </CalProvider>
      </body>
    </html>
  );
}
