const revealSelectors = [
  ".proof-grid article",
  ".section-tag",
  ".story h2",
  ".story-copy p",
  ".moment-card",
  ".section-heading > *",
  ".steps-grid article",
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

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealTargets = Array.from(document.querySelectorAll(revealSelectors.join(",")));

if (prefersReducedMotion) {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
} else {
  revealTargets.forEach((target, index) => {
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

  revealTargets.forEach((target) => observer.observe(target));
}
