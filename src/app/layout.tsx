import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
const orbitron = Orbitron({ subsets: ["latin"] });
import TelegramWebAppProvider from "@/providers/telegram-webapp-provider";
import { ReactQueryClientProvider } from "@/providers/react-query-provider";
import Header from "@/components/header";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={`${orbitron.className} antialiased overflow-hidden`}>
          <TelegramWebAppProvider>
            <AuroraBackground >
              <main className="min-h-screen overflow-hidden flex flex-col justify-around items-center w-full">
                <Header />
                {children}
                <Footer />
              </main>
            </AuroraBackground >
          </TelegramWebAppProvider>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
