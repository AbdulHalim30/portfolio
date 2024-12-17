import type { Metadata } from "next";
import { Jost, Open_Sans } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/code.svg",
  },
  title: "Abdul Halim",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
