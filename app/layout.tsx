import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Askatuak SBT | 50 años de pasión por el baloncesto",
    template: "%s | Askatuak SBT",
  },
  description:
    "Club de baloncesto Askatuak SaskiBaloi Taldea. Fundado en 1975 en Donostia-San Sebastián. Deporte escolar, equipos competitivos y baloncesto para todos.",
  keywords: [
    "Askatuak",
    "baloncesto",
    "saskibaloia",
    "Donostia",
    "San Sebastián",
    "deporte escolar",
    "campus verano",
    "club baloncesto",
  ],
  authors: [{ name: "Askatuak SBT" }],
  creator: "Askatuak SBT",
  publisher: "Askatuak SBT",
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["eu_ES"],
    url: "https://www.askatuak.com",
    siteName: "Askatuak SBT",
    title: "Askatuak SBT | 50 años de pasión por el baloncesto",
    description:
      "Club de baloncesto fundado en 1975 en Donostia-San Sebastián. Deporte escolar, equipos competitivos y baloncesto para todos.",
    images: [
      {
        url: "/images/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Askatuak SBT - 50 años de historia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Askatuak SBT | 50 años de pasión por el baloncesto",
    description:
      "Club de baloncesto fundado en 1975. Deporte escolar, equipos competitivos y baloncesto para todos.",
    images: ["/images/brand/og-image.png"],
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
  verification: {
    // TODO: Add Google Search Console verification
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
