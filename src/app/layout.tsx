import type { Metadata } from "next";
import Header from "../components/Header";
import { Oswald, Raleway } from "next/font/google";
import "./globals.css";

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
});
export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leandro Vieira - Tatuador profissional",
  description: "By Matheus de Oliveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={oswald.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
