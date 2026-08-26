"use client";

import { useState } from "react";

const slides = [
  {
    type: "image",
    src: "/media/karaoke-setup-completo.webp",
    alt: "Estrutura completa de karaokê com TV e sistema de som",
  },
  { type: "video", src: "/media/karaoke-em-acao-01.mp4", poster: "/media/karaoke-em-acao-01.webp" },
  { type: "video", src: "/media/karaoke-em-acao-02.mp4", poster: "/media/karaoke-em-acao-02.webp" },
  { type: "video", src: "/media/karaoke-em-acao-03.mp4", poster: "/media/karaoke-em-acao-03.webp" },
] as const;

export function MediaCarousel() {
  const [active, setActive] = useState(0);
  const previous = () => setActive((current) => (current + slides.length - 1) % slides.length);
  const next = () => setActive((current) => (current + 1) % slides.length);

  return (
    <div className="media-carousel" aria-label="Fotos e vídeos do equipamento de karaokê">
      <div className="media-carousel-viewport">
        <div className="media-carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {slides.map((slide) => (
            <div className="media-carousel-slide" key={slide.src}>
              {slide.type === "image" ? (
                <img src={slide.src} alt={slide.alt} width={1600} height={1200} loading="lazy" />
              ) : (
                <video controls playsInline preload="metadata" poster={slide.poster}>
                  <source src={slide.src} type="video/mp4" />
                  Seu navegador não suporta vídeos em HTML5.
                </video>
              )}
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
