import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Image from "next/image";

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
        <div id="content">{children}</div>
        <div id="backgroundPicture">
          <Image src="/backgroundBlurred.png" alt="bakgroundPicture" quality={100} fill sizes="100%" placeholder="blur" blurDataURL={'/img/logo.png'}
            style={{
            objectFit: 'cover',
            }} 
          />
        </div>
      </body>
    </html>
  );
}
