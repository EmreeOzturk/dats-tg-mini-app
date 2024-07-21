import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
const orbitron = Orbitron({ subsets: ["latin"] });
import TelegramWebAppProvider from "@/providers/telegram-webapp-provider";
import ReactQueryProvider from "@/providers/react-query-provider";
import Header from "@/components/header";
import { AuroraBackground } from "@/components/ui/aurora-background";
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
    <html lang="en">
      <body className={`${orbitron.className} antialiased overflow-hidden`}>
        <ReactQueryProvider>
          <TelegramWebAppProvider>
            <AuroraBackground >
            <main className="min-h-screen overflow-hidden flex flex-col justify-between ">
              <Header />
              {children}
            </main>
            </AuroraBackground >
          </TelegramWebAppProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
