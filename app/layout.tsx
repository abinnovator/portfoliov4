import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aadit Bhambri",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased bg-[#131313] overflow-x-hidden`}
      >
        <div className="flex flex-col w-screen">
          <div className="border-dashed border-[#262626] border-x-2 flex-1 flex flex-col">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
