import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

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

export const metadata: Metadata = {
  title: "Gamma Gemini",
  description: "Soluções completas de desenvolvimento web e hospedagem para empresas e profissionais criativos no Brasil.",
  icons: {
    icon: [
      { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    ],
  },
  manifest: "/site.webmanifest",
  keywords: "desenvolvimento web, hospedagem, criação de API, integração de API, gerenciamento de banco de dados, portfólio online, artistas, prestadores de serviços, Brasil",
  authors: [{ name: "Gamma Gemini" }],
  robots: "index, follow",
  openGraph: {
    title: "Desenvolvimento Web e Hospedagem - Gamma Gemini",
    description: "Soluções completas de desenvolvimento web e hospedagem para empresas e profissionais criativos no Brasil.",
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
    description: "Desenvolvimento web, APIs, e hospedagem para empresas e criativos no Brasil.",
    images: {
      url: "/share.png",
    },
    site: "@Gammageminiweb",
  },
  other: {
    "geo.region": "BR",
    "geo.placename": "Brasil",
    "geo.position": "-15.779724;-47.929720",
    "ICBM": "-15.779724, -47.929720",
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
