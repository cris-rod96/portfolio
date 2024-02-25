import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Sidebar from "@/components/shared/sidebar";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Cristhian Rodríguez",
  description:
    "Web Portfolio created by Cristhian Rodríguez - FullStack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-dark text-gray-300 ${font.className}`}>
        <Sidebar />
        <main className="lg:pl-[13vw] pt-[13vh] lg:pt-0 px-8">{children}</main>
      </body>
    </html>
  );
}
