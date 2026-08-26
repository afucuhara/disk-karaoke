import type { Metadata } from "next";
import { ScrollEffects } from "./scroll-effects";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WhatsAppIcon, whatsappLink } from "./site-shell";

export const metadata: Metadata = {
  title: { absolute: "Disk Karaokê | Sua festa, seu palco" },
  description: "Aluguel de karaokê profissional com mais de 12 mil músicas, pontuação individual, entrega, montagem e configuração para o seu evento.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Disk Karaokê | Sua festa, seu palco",
    description: "Transforme seu evento em um grande show com mais de 12 mil músicas.",
    url: "/",
    images: [{ url: "/og.webp", width: 1200, height: 630, alt: "Disk Karaokê — Sua festa, seu palco" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disk Karaokê | Sua festa, seu palco",
    description: "Transforme seu evento em um grande show com mais de 12 mil músicas.",
    images: ["/og.webp"],
  },
};

const benefits = [
  {
    icon: "music",
    title: "+12.000 músicas atualizadas",
    text: "Do clássico ao hit atual, com repertório nacional e internacional.",
  },
  {
    icon: "microphone",
    title: "pontuação por microfone",
    text: "Cada microfone marca pontos separadamente, perfeito para duelos e competições.",
  },
  {
    icon: "check",
    title: "controle de tom",
    text: "Suba ou desça a tonalidade para a música encaixar certinho na sua voz.",
  },
];

const occasions = [
  "Aniversários",
  "Churrascos",
  "Festas da firma",
  "Confraternizações",
  "Encontros em família",
  "Resenhas entre amigos",
];

const faqs = [
  {
    question: "O equipamento já vai pronto para usar?",
    answer:
      "Sim. A equipe entrega, monta e configura o sistema para você começar a festa sem preocupação.",
  },
  {
    question: "O repertório tem músicas novas e antigas?",
    answer:
      "Sim. São mais de 12.000 músicas atualizadas, reunindo sucessos de diferentes estilos e gerações.",
  },
  {
    question: "Como consulto valores e disponibilidade?",
    answer:
      "Clique em qualquer botão de orçamento e envie a data, a região e o tipo de evento pelo WhatsApp.",
  },
  {
    question: "Para quais eventos o karaokê é indicado?",
    answer:
      "Aniversários, churrascos, festas corporativas, encontros em família e qualquer ocasião que mereça mais conexão e diversão.",
  },
];

function FeatureIcon({ name }: { name: string }) {
  if (name === "music") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 18V5l11-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="17" cy="16" r="3" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 11.1V12a8 8 0 1 1-4.7-7.3" /><path d="m9 11 3 3L22 4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8" />
    </svg>
  );
}

function StepIcon({ name }: { name: "whatsapp" | "delivery" | "show" }) {
  if (name === "whatsapp") return <WhatsAppIcon />;

  if (name === "delivery") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="11" height="18" rx="2" />
        <circle cx="8.5" cy="9" r="2" /><circle cx="8.5" cy="16" r="3" />
        <path d="m16 15 2 2 4-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="8.5" y="2" width="7" height="12" rx="3.5" />
      <path d="M5 10a7 7 0 0 0 14 0M12 17v4M8.5 21h7M19 3v3M20.5 4.5h-3" />
    </svg>
  );
}

function ManifestoIcon({ name }: { name: "repertoire" | "connection" | "easy" }) {
  if (name === "repertoire") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5h9M5 9h7M5 13h5" /><path d="M17 7v10" /><circle cx="14" cy="17" r="3" /><path d="m17 9 4-1v7" /><circle cx="19" cy="15" r="2" />
      </svg>
    );
  }

  if (name === "connection") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" />
        <path d="M2.5 20a5.5 5.5 0 0 1 11 0M13 19a4.5 4.5 0 0 1 8.5 0" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 20 6v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4Z" /><path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollEffects />
      <SiteHeader active="home" />

      <section className="hero" id="inicio">
        <div className="hero-slides" aria-hidden="true">
          <div className="hero-slide hero-slide-one" />
          <div className="hero-slide hero-slide-two" />
          <div className="hero-slide hero-slide-three" />
        </div>
        <div className="hero-noise" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Aluguel de karaokê profissional</p>
          <h1>Sua festa.<br /><em>Seu palco.</em></h1>
          <p className="hero-text">
            Tire a galera do scroll infinito e transforme seu evento em um grande show — com som, diversão e mais de 12 mil músicas para cantar.
          </p>
          <div className="hero-actions">
            <a className="button" href={whatsappLink} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Consultar minha data
            </a>
            <a className="text-link" href="/sobre">Conhecer a experiência <span>↗</span></a>
          </div>
          <p className="microcopy"><span>●</span> Agenda aberta para reservas</p>
        </div>

      </section>

      <section className="proof-grid" aria-label="Diferenciais da Disk Karaokê">
        {benefits.map((benefit) => (
          <article key={benefit.title}>
            <div className={`feature-icon feature-icon-${benefit.icon}`}><FeatureIcon name={benefit.icon} /></div>
            <div><h2>{benefit.title}</h2><p>{benefit.text}</p></div>
          </article>
        ))}
      </section>

      <section className="story section" id="sobre">
        <div className="section-tag">A experiência</div>
        <div className="story-grid">
          <div><h2>Chega de festa com todo mundo <span>olhando para a tela.</span></h2></div>
          <div className="story-copy">
            <p>A gente transforma a sua festa em um verdadeiro show onde todo mundo vira atração principal. O Disk Karaokê leva a estrutura completa pra colocar amigos e família cantando juntos, rindo alto e disputando cada nota no microfone.</p>
            <p>Quando o karaokê entra em cena, o celular sai da mão. A sala vira palco, os amigos viram torcida e aquela reunião comum ganha histórias que todo mundo vai lembrar.</p>
            <p className="highlight-line">Não é só aluguel de equipamento. É conexão real, ao vivo e sem filtro.</p>
          </div>
        </div>

        <div className="moment-card">
          <div className="moment-visual" role="img" aria-label="Amigos brasileiros cantando juntos em uma festa de karaokê em casa" />
          <div className="moment-copy">
            <p className="eyebrow"><span /> A energia muda na hora</p>
            <h3>Um show montado onde a sua festa estiver.</h3>
            <p>Você escolhe a data. A Disk Karaokê leva a experiência, monta e configura tudo. Depois é só escolher entre mais de 12.000 músicas, ajustar o tom, pegar o microfone e soltar a voz.</p>
            <a className="text-link pink" href={whatsappLink} target="_blank" rel="noreferrer">Quero levar para meu evento <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="steps section" id="como-funciona">
        <div className="section-heading">
          <div>
            <div className="section-tag">Como funciona</div>
            <h2>Do orçamento ao refrão<br /><span>em três passos.</span></h2>
          </div>
          <p>Sem complicação, sem improviso e sem perder tempo configurando equipamento no meio da festa.</p>
        </div>

        <div className="steps-grid">
          <article>
            <div className="step-icon whatsapp"><StepIcon name="whatsapp" /></div>
            <h3>Chame no WhatsApp</h3>
            <p>Conte a data, a região e como será o seu evento para consultar disponibilidade e valores.</p>
          </article>
          <article>
            <div className="step-icon green"><StepIcon name="delivery" /></div>
            <h3>A gente monta tudo</h3>
            <p>Entregamos, instalamos e configuramos a estrutura para a experiência começar sem estresse.</p>
          </article>
          <article>
            <div className="step-icon orange"><StepIcon name="show" /></div>
            <h3>Você vira o show</h3>
            <p>Escolha entre mais de 12 mil músicas, desafie a galera na pontuação e crie memórias.</p>
          </article>
        </div>
      </section>

      <section className="real-media section" aria-label="Karaokê Disk Karaokê em ação">
        <div className="real-media-intro">
          <div className="section-tag">O equipamento em ação</div>
          <h2>Estrutura de verdade<br /><span>para a sua festa.</span></h2>
          <p>TV, som, microfones sem fio e um sistema simples de usar para a festa começar sem espera.</p>
        </div>
        <div className="real-media-layout">
          <img src="/media/karaoke-setup-completo.webp" alt="Estrutura completa de karaokê com TV e sistema de som" width={1600} height={1200} loading="lazy" />
          <div className="video-gallery">
            {["01", "02", "03"].map((video) => (
              <video key={video} controls playsInline preload="metadata" poster={`/media/karaoke-em-acao-${video}.webp`}>
                <source src={`/media/karaoke-em-acao-${video}.mp4`} type="video/mp4" />
                Seu navegador não suporta vídeos em HTML5.
              </video>
            ))}
          </div>
        </div>
      </section>

      <section className="occasions section">
        <div className="occasions-copy">
          <div className="section-tag">Cabe na sua comemoração</div>
          <h2>Qualquer encontro fica melhor <span>com um refrão.</span></h2>
          <p>Do parabéns ao happy hour, o palco acompanha a ocasião.</p>
        </div>
        <div className="occasion-list">
          {occasions.map((occasion) => (
            <div key={occasion}>{occasion}</div>
          ))}
        </div>
      </section>

      <section className="manifesto section">
        <p className="eyebrow"><span /> Por que escolher a Disk Karaokê?</p>
        <h2>Porque a melhor parte da festa <em>não cabe em um post.</em></h2>
        <div className="manifesto-grid">
          <div><div className="manifesto-icon"><ManifestoIcon name="repertoire" /></div><h3>Repertório de verdade</h3><p>Mais de 12.000 opções para ninguém ficar sem a música que ama.</p></div>
          <div><div className="manifesto-icon"><ManifestoIcon name="connection" /></div><h3>Diversão que conecta</h3><p>Pontuação individual por microfone para criar torcida, risadas e uma disputa saudável.</p></div>
          <div><div className="manifesto-icon"><ManifestoIcon name="easy" /></div><h3>Praticidade completa</h3><p>Controle de tom, entrega, montagem e configuração para você curtir o evento.</p></div>
        </div>
      </section>

      <section className="faq section" id="duvidas">
        <div>
          <div className="section-tag">Dúvidas frequentes</div>
          <h2>Antes de<br /><span>soltar a voz.</span></h2>
          <p>Não encontrou sua resposta? Chame a equipe e fale sobre o seu evento.</p>
          <a className="text-link pink" href={whatsappLink} target="_blank" rel="noreferrer">Conversar com a equipe <span>↗</span></a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<span>+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta section">
        <div className="cta-orbit" />
        <p className="eyebrow"><span /> Agenda aberta</p>
        <h2>A próxima música<br />pode começar <em>agora.</em></h2>
        <p>Consulte disponibilidade para sua data e leve uma experiência completa de karaokê para o seu evento.</p>
        <a className="button button-large" href={whatsappLink} target="_blank" rel="noreferrer"><WhatsAppIcon /> Pedir orçamento no WhatsApp</a>
        <span className="cta-note">Resposta rápida • Orçamento sem compromisso</span>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
