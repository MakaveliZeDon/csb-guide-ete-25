import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Guide Anti-Cystite - Votre Été Serein | Téléchargement Gratuit",
  description:
    "Découvrez les conseils d'experts pour prévenir les cystites pendant vos vacances d'été. Guide gratuit rédigé par 6 professionnels de santé.",
  keywords: "cystite, été, vacances, prévention, infection urinaire, guide gratuit, santé féminine",
  authors: [{ name: "Équipe Santé" }],
  openGraph: {
    title: "Guide Anti-Cystite - Votre Été Serein",
    description: "Guide gratuit pour prévenir les cystites pendant vos vacances",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
