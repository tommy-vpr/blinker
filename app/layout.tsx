import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import NavButton from "./components/NavButton";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const DynamicHeader = dynamic(() => import('./components/Header'), {ssr: false})


export const metadata: Metadata = {
  title: "Blinker",
  description: "Hit it pass it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicHeader />
        {children}
      </body>
    </html>
  );
}
