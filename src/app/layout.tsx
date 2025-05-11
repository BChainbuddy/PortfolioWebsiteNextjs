import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Image from "next/image";
import Head from "next/head";

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
      <>
        <Head>
          <link
            rel="preload"
            href="https://prod.spline.design/Cr3d2UjW5GiANCyV/scene.splinecode"
            as="fetch"
            crossOrigin="anonymous"
          />
        </Head>
        <body className={`flex flex-col`}>
          <Header />
          <div id="content">{children}</div>
          <div id="backgroundPicture" className="relative">
            <picture>
              <source srcSet="/backgroundBlurred.webp" type="image/webp" />
              <source srcSet="/backgroundBlurred.png" type="image/png" />
              <Image
                src="/backgroundBlurred.png"
                alt="backgroundPicture"
                quality={100}
                fill
                sizes="100%"
                placeholder="blur"
                blurDataURL={"/img/logo.png"}
                style={{
                  objectFit: "cover",
                }}
                priority={true}
              />
            </picture>
          </div>
        </body>
      </>
    </html>
  );
}
