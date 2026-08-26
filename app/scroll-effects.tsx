"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".proof-grid article",
  ".section-tag",
  ".story h2",
  ".story-copy p",
  ".moment-card",
  ".section-heading > *",
  ".steps-grid article",
  ".real-media > *",
  ".real-media-layout > *",
  ".video-gallery video",
  ".occasions-copy > *",
  ".occasion-list div",
  ".manifesto .eyebrow",
  ".manifesto h2",
  ".manifesto-grid > div",
  ".faq > div",
  ".faq details",
  ".final-cta > *",
  ".products-hero-copy > *",
  ".products-intro > *",
  ".package-card",
  ".equipment-heading > *",
  ".equipment-grid article",
  ".product-media > *",
  ".product-media-grid img",
  ".quote-guide > *",
  ".products-cta > *",
  ".about-hero-copy > *",
  ".about-story > *",
  ".about-experience > *",
  ".principles-grid article",
  ".about-audience > *",
  ".about-cta > *",
  "footer > *",
];

export function ScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors.join(",")));

    if (reducedMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    targets.forEach((target, index) => {
      target.classList.add("reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 80}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
