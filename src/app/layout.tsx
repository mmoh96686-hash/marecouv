import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marecouv | Recouvrement de créances au Maroc",
  description:
    "Marecouv accompagne les entreprises marocaines dans la récupération de leurs créances, par des procédures amiables et judiciaires, partout au Maroc.",
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/brand/favicon-180.png",
  },
  openGraph: {
    title: "Marecouv | Recouvrement de créances au Maroc",
    description:
      "Recouvrement amiable et judiciaire pour les entreprises marocaines, partout sur le territoire.",
    siteName: "Marecouv",
    locale: "fr_MA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy">
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
