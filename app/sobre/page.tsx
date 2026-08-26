import type { Metadata } from "next";
import { ScrollEffects } from "../scroll-effects";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WhatsAppIcon, whatsappLink } from "../site-shell";

export const metadata: Metadata = {
  title: { absolute: "Sobre a Disk Karaokê | Sua festa, seu palco" },
  description: "Conheça a Disk Karaokê e a experiência de levar repertório, equipamento e estrutura pronta para festas e eventos.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre a Disk Karaokê",
    description: "Mais do que equipamentos: uma experiência de karaokê preparada para conectar pessoas.",
    url: "/sobre",
    images: [{ url: "/experience-elegant-party.webp", width: 1400, height: 1050, alt: "Convidados reunidos em uma festa de karaokê elegante" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre a Disk Karaokê",
    description: "Mais do que equipamentos: uma experiência de karaokê preparada para conectar pessoas.",
    images: ["/experience-elegant-party.webp"],
  },
};

const principles = [
  { number: "01", title: "Diversão que aproxima", text: "O karaokê quebra o gelo, reúne gerações e transforma convidados em parte do evento." },
  { number: "02", title: "Estrutura sem complicação", text: "A equipe entrega, monta e configura os equipamentos para a festa começar com tudo funcionando." },
  { number: "03", title: "Recursos para soltar a voz", text: "Mais de 12 mil músicas, pontuação por microfone e controle de tom para cada convidado cantar do seu jeito." },
];

const commitments = [
  "Entender o espaço e o perfil de cada evento",
  "Indicar uma estrutura adequada para a ocasião",
  "Entregar os equipamentos organizados e configurados",
  "Explicar o funcionamento antes do primeiro refrão",
  "Manter um atendimento próximo do orçamento à retirada",
];

export default function AboutPage() {
  return (
    <main>
      <ScrollEffects />
      <SiteHeader active="about" />

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow"><span /> Sobre a Disk Karaokê</p>
          <h1>A festa muda<br />quando todo mundo <em>participa.</em></h1>
          <p>A Disk Karaokê leva uma experiência completa de música, interação e diversão para encontros de diferentes tamanhos.</p>
        </div>
      </section>

      <section className="about-story section">
        <div className="about-story-title">
          <div className="section-tag">Nossa proposta</div>
          <h2>Não alugamos apenas equipamentos. Preparamos o palco da sua festa.</h2>
        </div>
        <div className="about-story-copy">
          <p>A gente transforma a sua festa em um verdadeiro show onde todo mundo vira atração principal. O Disk Karaokê leva a estrutura completa pra colocar amigos e família cantando juntos, rindo alto e disputando cada nota no microfone.</p>
          <p>A gente entrega a desculpa perfeita pra transformar qualquer reunião num evento inesquecível. A Disk Karaokê nasceu de uma ideia simples: os melhores eventos são aqueles em que as pessoas realmente se encontram.</p>
          <p>Por isso, nosso serviço combina equipamento de karaokê, repertório amplo e uma estrutura pensada para cada ocasião. A gente cuida da parte técnica para o anfitrião aproveitar o evento e os convidados se concentrarem no que importa: cantar, rir e criar boas memórias.</p>
          <p className="about-highlight">Sua casa, chácara, salão ou empresa pode virar palco sem transformar a organização da festa em mais uma preocupação.</p>
        </div>
      </section>

      <section className="about-experience section">
        <div className="about-photo" role="img" aria-label="Convidados bem vestidos reunidos em uma festa de karaokê elegante" />
        <div className="about-experience-copy">
          <p className="eyebrow"><span /> Da entrega ao primeiro refrão</p>
          <h2>Uma experiência preparada para funcionar.</h2>
          <p>Cada evento tem um espaço, um número de convidados e um ritmo diferente. Antes da locação, buscamos entender esse cenário para orientar a escolha do pacote e organizar a estrutura necessária.</p>
          <ul>
            {commitments.map((commitment) => <li key={commitment}><span>✓</span>{commitment}</li>)}
          </ul>
        </div>
      </section>

      <section className="principles-section">
        <div className="section principles-inner">
          <div className="section-tag">O que orienta nosso trabalho</div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h2>{principle.title}</h2>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-audience section">
        <div>
          <div className="section-tag">Para diferentes encontros</div>
          <h2>Da sala de casa à confraternização da empresa.</h2>
        </div>
        <div className="about-audience-copy">
          <p>O karaokê se adapta a aniversários, churrascos, encontros em família, festas em chácaras, celebrações em condomínios e eventos corporativos.</p>
          <p>Os pacotes podem reunir karaokê, som, TV e iluminação. A combinação ideal depende do local e da experiência que você quer criar.</p>
          <a className="text-link pink" href="/produtos">Conhecer os pacotes <span>↗</span></a>
        </div>
      </section>

      <section className="about-cta section">
        <p className="eyebrow"><span /> Sua festa, seu palco</p>
        <h2>Conte o que você está planejando.</h2>
        <p>A gente ajuda a escolher a estrutura e prepara um orçamento conforme a data e o local do evento.</p>
        <a className="button button-large" href={whatsappLink} target="_blank" rel="noreferrer"><WhatsAppIcon /> Conversar pelo WhatsApp</a>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
