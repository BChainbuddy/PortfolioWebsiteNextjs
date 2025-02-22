import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Image from "next/image";
import VideoBackground from "@/components/VideoBackground";

export const metadata: Metadata = {
  title: "Jaka's Portfolio",
  description:
    "This is Jaka Potokar's portfolio presenting his projects, skills and contact",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "JakaP",
    capable: true,
    statusBarStyle: "default",
  },
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
