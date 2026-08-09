import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MariaChat from "@/components/MariaChat";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://camlogistic.cl"),
  title: {
    default: "CAM Logistic | Transporte y logística B2B",
    template: "%s | CAM Logistic",
  },
  description:
    "CAM Logistic diseña y ejecuta operaciones de transporte dedicadas de primera y última milla para retail, industria, courier y consumo masivo en la Región Metropolitana.",
  keywords: [
    "logística B2B Chile",
    "transporte de carga Santiago",
    "primera milla",
    "última milla",
    "transporte dedicado",
    "CAM Logistic",
  ],
  openGraph: {
    title: "CAM Logistic | Transporte y logística B2B",
    description:
      "Movemos más que carga. Movemos su operación. Tecnología, personas y resultados para su próxima operación logística.",
    url: "https://camlogistic.cl",
    siteName: "CAM Logistic",
    locale: "es_CL",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body
        className={`${poppins.variable} ${inter.variable} ${jbMono.variable} antialiased bg-white text-[var(--color-ink)]`}
      >
        <a
          href="#site-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-[var(--color-gold)] focus:text-[var(--color-blue-deep)] focus:px-4 focus:py-2 focus:m-2 focus:rounded"
        >
          Saltar al contenido
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CAM Logistic",
              url: "https://camlogistic.cl",
              email: "ricardo.cotapos@camlogistic.cl",
              telephone: "+56992507629",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Guardia Vieja 202, Of. 403",
                addressLocality: "Providencia, Santiago",
                addressCountry: "CL",
              },
              areaServed: "Región Metropolitana, Chile",
              description:
                "Soluciones logísticas de primera y última milla, transporte dedicado y distribución para empresas.",
            }),
          }}
        />
        <TopBar />
        <Navbar />
        <main id="site-content">{children}</main>
        <Footer />
        <MariaChat />
      </body>
    </html>
  );
}
