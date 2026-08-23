import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://disk-karaoke.patriciavolt9.chatgpt.site"),
  title: "Disk Karaokê | Sua festa, seu palco",
  description: "Aluguel de karaokê profissional com mais de 12 mil músicas, pontuação individual, entrega, montagem e configuração para o seu evento.",
  keywords: ["aluguel de karaokê", "karaokê para festa", "karaokê profissional", "Disk Karaokê"],
  openGraph: {
    title: "Disk Karaokê | Sua festa, seu palco",
    description: "Transforme seu evento em um grande show com mais de 12 mil músicas.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Disk Karaokê — Sua festa, seu palco" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disk Karaokê | Sua festa, seu palco",
    description: "Transforme seu evento em um grande show com mais de 12 mil músicas.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/logo-disk-karaoke.png",
    shortcut: "/logo-disk-karaoke.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
