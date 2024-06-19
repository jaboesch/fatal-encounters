import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootContainer from "@/components/rootContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fatal Encounters",
  description: "Fatal Encounters of the French Aristocracy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootContainer>{children}</RootContainer>
      </body>
    </html>
  );
}
