import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import Message from "@/components/ui/fragments/Message";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const nippo = localFont({
  src: "./fonts/Nippo-Variable.woff2",
  variable: "--font-nippo",
  weight: "200 600",
});
const RmMono = localFont({
  src: [
    {
      path: "./fonts/rm/RMMono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/rm/RMMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/rm/RMMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/rm/RMMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/rm/RMMono-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  weight: "300 900",
  variable: "--font-rm-mono",
});

export const metadata: Metadata = {
  title: "Gamma Gemini",
  description:
    "Soluções completas de desenvolvimento web e hospedagem para empresas e profissionais criativos no Brasil.",
  icons: {
    icon: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  keywords:
    "desenvolvimento web, hospedagem, criação de API, integração de API, gerenciamento de banco de dados, portfólio online, artistas, prestadores de serviços, Brasil",
  authors: [{ name: "Gamma Gemini" }],
  robots: "index, follow",
  openGraph: {
    title: "Desenvolvimento Web e Hospedagem - Gamma Gemini",
    description:
      "Soluções completas de desenvolvimento web e hospedagem para empresas e profissionais criativos no Brasil.",
    type: "website",
    url: "gammagemini.com",
    images: [
      {
        url: "/share.png",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desenvolvimento Web e Hospedagem - Gamma Gemini",
    description:
      "Desenvolvimento web, APIs, e hospedagem para empresas e criativos no Brasil.",
    images: {
      url: "/share.png",
    },
    site: "@Gammageminiweb",
  },
  other: {
    "geo.region": "BR",
    "geo.placename": "Brasil",
    "geo.position": "-15.779724;-47.929720",
    ICBM: "-15.779724, -47.929720",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${RmMono.variable} ${nippo.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Message />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
