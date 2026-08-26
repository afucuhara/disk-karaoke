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

document.querySelectorAll(".media-carousel").forEach((carousel) => {
  const track = carousel.querySelector(".media-carousel-track");
  const slides = Array.from(carousel.querySelectorAll(".media-carousel-slide"));
  const dots = Array.from(carousel.querySelectorAll(".media-carousel-dots button"));
  let active = 0;

  const show = (index) => {
    active = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${active * 100}%)`;
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === active);
      dot.setAttribute("aria-current", dotIndex === active ? "true" : "false");
    });
  };

  carousel.querySelector("[data-carousel-prev]").addEventListener("click", () => show(active - 1));
  carousel.querySelector("[data-carousel-next]").addEventListener("click", () => show(active + 1));
  dots.forEach((dot, index) => dot.addEventListener("click", () => show(index)));
});
