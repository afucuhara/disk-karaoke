"use client";

import { useState } from "react";

const slides = [
  {
    src: "/media/karaoke-setup-completo.webp",
    alt: "Estrutura completa de karaokê com TV e sistema de som",
  },
  {
    src: "/media/karaoke-estrutura-tv-som.webp",
    alt: "TV, microfones e caixa de som da estrutura de karaokê",
  },
  {
    src: "/media/karaoke-microfones.webp",
    alt: "Dois microfones sem fio diante da tela do karaokê",
  },
  {
    src: "/media/karaoke-pontuacao.webp",
    alt: "Tela do karaokê exibindo a pontuação da apresentação",
  },
  {
    src: "/media/karaoke-tela-repertorio.webp",
    alt: "Tela de seleção de músicas do karaokê",
  },
] as const;

export function MediaCarousel() {
  const [active, setActive] = useState(0);
  const previous = () => setActive((current) => (current + slides.length - 1) % slides.length);
  const next = () => setActive((current) => (current + 1) % slides.length);

  return (
    <div className="media-carousel" aria-label="Fotos do equipamento de karaokê">
      <div className="media-carousel-viewport">
        <div className="media-carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {slides.map((slide) => (
            <div className="media-carousel-slide" key={slide.src}>
              <img src={slide.src} alt={slide.alt} width={1600} height={1200} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <div className="media-carousel-controls">
        <button type="button" onClick={previous} aria-label="Mídia anterior">←</button>
        <div className="media-carousel-dots" aria-label="Selecionar mídia">
          {slides.map((slide, index) => (
            <button key={slide.src} type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Exibir mídia ${index + 1}`} aria-current={index === active ? "true" : undefined} />
          ))}
        </div>
        <button type="button" onClick={next} aria-label="Próxima mídia">→</button>
      </div>
    </div>
  );
}
