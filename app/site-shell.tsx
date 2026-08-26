export const whatsappBaseMessage =
  "Olá! Vi o site da Disk Karaokê e quero consultar disponibilidade e valores para o meu evento.";

export const whatsappPhone = "5511924813930";
export const whatsappLink = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappBaseMessage)}`;

export function packageWhatsappLink(packageName: string) {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    `Olá! Tenho interesse no pacote ${packageName}. Meu evento será no dia ___, em ___, para aproximadamente ___ pessoas. Gostaria de consultar disponibilidade e receber um orçamento.`,
  )}`;
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16.01 3.2A12.74 12.74 0 0 0 5.07 22.5L3.8 28.8l6.45-1.53A12.73 12.73 0 1 0 16.01 3.2Zm0 23.22c-1.83 0-3.62-.48-5.2-1.39l-.43-.25-3.8.9.76-3.72-.28-.46A10.5 10.5 0 1 1 16 26.42Zm5.74-7.84c-.31-.16-1.85-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1-.99 1.2-.18.21-.37.23-.68.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.76.75.32 1.34.52 1.8.66.76.24 1.45.2 1.99.12.61-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}

function SocialIcon({ name }: { name: "instagram" | "facebook" }) {
  if (name === "facebook") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.4l.6-4h-4V9c0-.7.3-1 1-1Z" /></svg>;
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="social-dot" />
    </svg>
  );
}

export function SiteHeader({ active }: { active?: "home" | "about" | "products" }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Disk Karaokê — início">
        <img src="/logo-disk-karaoke.webp" alt="Disk Karaokê" width={500} height={253} />
      </a>
      <nav aria-label="Navegação principal">
        <a href="/" aria-current={active === "home" ? "page" : undefined}>Início</a>
        <a href="/sobre" aria-current={active === "about" ? "page" : undefined}>Sobre</a>
        <a href="/produtos" aria-current={active === "products" ? "page" : undefined}>Produtos</a>
        <a href="/#como-funciona">Como funciona</a>
        <a href="/#duvidas">Dúvidas</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contato">
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/logo-disk-karaoke.webp" alt="Disk Karaokê" width={500} height={253} loading="lazy" />
          <p>Sua festa, seu palco.</p>
        </div>

        <div className="footer-column">
          <h2>Navegue</h2>
          <a href="/">Início</a>
          <a href="/sobre">Sobre</a>
          <a href="/produtos">Produtos</a>
          <a href="/#como-funciona">Como funciona</a>
          <a href="/#duvidas">Dúvidas</a>
        </div>

        <div className="footer-column footer-contact">
          <h2>Fale com a gente</h2>
          <a href="mailto:contato@diskkaraoke.com.br">contato@diskkaraoke.com.br</a>
          <a href={`tel:+${whatsappPhone}`}>11 92481-3930</a>
          <span>Atendimento em São Paulo e região</span>
        </div>

        <div className="footer-column">
          <h2>Acompanhe</h2>
          <div className="social-links">
            <a href="https://www.instagram.com/diskkaraoke/" target="_blank" rel="noreferrer" aria-label="Instagram da Disk Karaokê"><SocialIcon name="instagram" /></a>
            <a href="https://www.facebook.com/diskkaraoke" target="_blank" rel="noreferrer" aria-label="Facebook da Disk Karaokê"><SocialIcon name="facebook" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Disk Karaokê. Todos os direitos reservados.</p>
        <p>Valores definidos conforme data, local e logística do evento.</p>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar com a Disk Karaokê pelo WhatsApp">
      <WhatsAppIcon />
    </a>
  );
}
