import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Jaka's Portfolio",
  description: "This is Jaka Potokar's portfolio presenting his projects, skills and contact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col`}>
        <Header />
        {children}</body>
    </html>
  );
}
