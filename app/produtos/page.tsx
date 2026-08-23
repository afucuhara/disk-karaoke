import type { Metadata } from "next";
import { ScrollEffects } from "../scroll-effects";
import { FloatingWhatsApp, packageWhatsappLink, SiteFooter, SiteHeader, WhatsAppIcon } from "../site-shell";

export const metadata: Metadata = {
  title: "Pacotes de locação | Disk Karaokê",
  description: "Conheça as opções de locação de karaokê, som, TV e iluminação para festas e eventos.",
  openGraph: {
    title: "Pacotes de locação | Disk Karaokê",
    description: "Escolha a estrutura ideal para o seu evento e solicite um orçamento personalizado.",
  },
};

const packages = [
  {
    number: "01",
    title: "Locação do Karaokê",
    description: "A experiência essencial para quem já possui televisão e estrutura de som no local.",
    includes: ["Equipamento de karaokê", "2 microfones sem fio", "Mais de 12 mil músicas", "Pontuação individual", "Entrega, montagem e configuração"],
    ideal: "Encontros menores e locais que já tenham TV e som compatíveis.",
  },
  {
    number: "02",
    title: "Karaokê + Som",
    description: "Karaokê completo com sistema de som dimensionado para o ambiente do evento.",
    includes: ["Tudo do pacote Karaokê", "Sistema de som", "Cabos e conexões necessários", "Configuração de áudio", "Orientação para utilização"],
    ideal: "Casas, salões e espaços que já tenham uma tela disponível.",
  },
  {
    number: "03",
    title: "Karaokê + Som + TV",
    description: "Uma estrutura pronta para transformar qualquer ambiente em palco, do áudio à letra na tela.",
    includes: ["Equipamento de karaokê", "2 microfones sem fio", "Sistema de som", "TV com suporte", "Montagem completa"],
    ideal: "Eventos que precisam de uma solução completa de áudio e imagem.",
  },
  {
    number: "04",
    title: "Kit Festa Completo",
    description: "O pacote mais completo, com som, imagem e iluminação para criar clima de show.",
    includes: ["Karaokê e 2 microfones sem fio", "Sistema de som", "TV com suporte", "Jogo de luzes", "Entrega, instalação e retirada"],
    ideal: "Aniversários, confraternizações e festas que pedem uma produção marcante.",
    featured: true,
  },
];

const equipmentDetails = [
  { value: "+12 mil", label: "músicas disponíveis", text: "Sucessos de diferentes estilos e gerações para ninguém ficar sem cantar." },
  { value: "2", label: "microfones sem fio", text: "Mais liberdade para duetos, desafios e interação com os convidados." },
  { value: "100%", label: "pronto para usar", text: "A equipe entrega, instala, configura e explica o funcionamento." },
  { value: "1 a 10", label: "pontuação individual", text: "Cada apresentação ganha nota e deixa a disputa ainda mais divertida." },
];

export default function ProductsPage() {
  return (
    <main>
      <ScrollEffects />
      <SiteHeader active="products" />

      <section className="products-hero">
        <div className="products-hero-copy">
          <p className="eyebrow"><span /> Pacotes para cada tipo de festa</p>
          <h1>Escolha o tamanho<br />do seu <em>show.</em></h1>
          <p>Do karaokê essencial à produção completa com som, TV e iluminação. Você escolhe a experiência e a gente prepara tudo para o seu evento.</p>
          <a className="text-link pink" href="#pacotes">Ver opções <span>↓</span></a>
        </div>
      </section>

      <section className="packages-section section" id="pacotes">
        <div className="products-intro">
          <div>
            <div className="section-tag">Opções de locação</div>
            <h2>Quatro maneiras de colocar todo mundo para cantar.</h2>
          </div>
          <p>Os valores são personalizados conforme data, endereço e estrutura necessária. Escolha uma opção para iniciar seu orçamento.</p>
        </div>

        <div className="packages-grid">
          {packages.map((item) => (
            <article className={`package-card${item.featured ? " featured" : ""}`} key={item.title}>
              <div className="package-topline">
                <span>{item.number}</span>
                {item.featured && <strong>Experiência completa</strong>}
              </div>
              <h2>{item.title}</h2>
              <p className="package-description">{item.description}</p>
              <h3>O que acompanha</h3>
              <ul>
                {item.includes.map((included) => <li key={included}><span>✓</span>{included}</li>)}
              </ul>
              <div className="package-ideal"><strong>Ideal para</strong><p>{item.ideal}</p></div>
              <a className={item.featured ? "button" : "package-button"} href={packageWhatsappLink(item.title)} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Solicitar orçamento
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="equipment-section">
        <div className="section equipment-inner">
          <div className="equipment-heading">
            <p className="eyebrow"><span /> O karaokê por dentro</p>
            <h2>Mais repertório.<br /><em>Menos preocupação.</em></h2>
            <p>Independentemente do pacote, o coração da experiência é o mesmo: um karaokê preparado para reunir pessoas e manter a festa acontecendo.</p>
          </div>
          <div className="equipment-grid">
            {equipmentDetails.map((detail) => (
              <article key={detail.label}>
                <strong>{detail.value}</strong>
                <h3>{detail.label}</h3>
                <p>{detail.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-guide section">
        <div>
          <div className="section-tag">Orçamento sob medida</div>
          <h2>O pacote certo também depende do lugar.</h2>
        </div>
        <div className="quote-guide-copy">
          <p>O valor final varia principalmente conforme a localização da festa, a data e a estrutura escolhida. Por isso, não exibimos um preço único que possa não representar o seu evento.</p>
          <p>Ao pedir o orçamento, envie estas três informações:</p>
          <ol>
            <li><span>1</span>Data do evento</li>
            <li><span>2</span>Cidade e bairro</li>
            <li><span>3</span>Número aproximado de convidados</li>
          </ol>
        </div>
      </section>

      <section className="products-cta section">
        <p className="eyebrow"><span /> Vamos montar o seu evento</p>
        <h2>Ainda não sabe qual pacote escolher?</h2>
        <p>Conte como será a festa. A equipe ajuda a definir a estrutura mais adequada para o espaço e para os convidados.</p>
        <a className="button button-large" href={packageWhatsappLink("a definir")} target="_blank" rel="noreferrer"><WhatsAppIcon /> Falar com a equipe</a>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
