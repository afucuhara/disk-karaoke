import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://disk-karaoke.patriciavolt9.chatgpt.site"),
  title: {
    default: "Disk Karaokê | Sua festa, seu palco",
    template: "%s | Disk Karaokê",
  },
  applicationName: "Disk Karaokê",
  description: "Aluguel de karaokê profissional com mais de 12 mil músicas, pontuação individual, entrega, montagem e configuração para o seu evento.",
  keywords: ["aluguel de karaokê", "karaokê para festa", "karaokê profissional", "Disk Karaokê"],
  authors: [{ name: "Disk Karaokê" }],
  creator: "Disk Karaokê",
  publisher: "Disk Karaokê",
  category: "Entretenimento e eventos",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Disk Karaokê | Sua festa, seu palco",
    description: "Transforme seu evento em um grande show com mais de 12 mil músicas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Disk Karaokê",
    images: [{ url: "/og.webp", width: 1200, height: 630, alt: "Disk Karaokê — Sua festa, seu palco" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disk Karaokê | Sua festa, seu palco",
    description: "Transforme seu evento em um grande show com mais de 12 mil músicas.",
    images: ["/og.webp"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.ico",
    apple: "/logo-disk-karaoke.webp",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Disk Karaokê",
  url: "https://disk-karaoke.patriciavolt9.chatgpt.site",
  logo: "https://disk-karaoke.patriciavolt9.chatgpt.site/logo-disk-karaoke.webp",
  description: "Locação de karaokê profissional para festas e eventos, com entrega, montagem e configuração.",
  sameAs: [
    "https://www.instagram.com/diskkaraoke/",
    "https://www.facebook.com/diskkaraoke",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
