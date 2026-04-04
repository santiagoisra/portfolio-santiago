import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio-santiago-cyan.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Santiago Israelevich — UX Lead Portfolio",
    template: "%s — Santiago Israelevich",
  },
  description:
    "Portfolio UX de Santiago Israelevich, UX Lead en Buenos Aires. Case studies de Totalcoin, EntrenadorPro, MercadoGasolinero y AoElec con proceso de investigación, personas, journey maps y métricas de impacto.",
  keywords: [
    "UX Designer",
    "UX Lead",
    "Portfolio UX",
    "Santiago Israelevich",
    "Diseño de experiencia de usuario",
    "User Research",
    "Fintech UX",
    "Buenos Aires",
    "Argentina",
    "Case Study UX",
    "Design System",
    "Usability Testing",
  ],
  authors: [{ name: "Santiago Israelevich" }],
  creator: "Santiago Israelevich",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Santiago Israelevich — UX Portfolio",
    title: "Santiago Israelevich — UX Lead Portfolio",
    description:
      "Portfolio UX con case studies detallados: investigación, personas, journey maps, pruebas de usabilidad y métricas de impacto real.",
    images: [
      {
        url: "/images/santiago.png",
        width: 600,
        height: 600,
        alt: "Santiago Israelevich — UX Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Israelevich — UX Lead Portfolio",
    description:
      "Portfolio UX con case studies detallados: investigación, personas, journey maps y métricas de impacto.",
    images: ["/images/santiago.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
