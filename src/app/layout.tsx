import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Image from "next/image";
import VideoBackground from "@/components/VideoBackground";

export const metadata: Metadata = {
  title: "Jaka's Portfolio",
  description:
    "This is Jaka Potokar's portfolio presenting his projects, skills and contact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="JakaP" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`flex flex-col`}>
        <Header />
        <div id="content">{children}</div>
        <div id="backgroundPicture" className="relative">
          <Image
            src="/backgroundBlurred.png"
            alt="bakgroundPicture"
            quality={100}
            fill
            sizes="100%"
            placeholder="blur"
            blurDataURL={"/img/logo.png"}
            style={{
              objectFit: "cover",
            }}
          />
          {/* <VideoBackground /> */}
        </div>
      </body>
    </html>
  );
}
