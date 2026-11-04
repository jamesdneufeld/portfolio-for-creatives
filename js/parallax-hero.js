/* Parallax Illustration Project Page
   Translates each hero layer at a different rate as the page scrolls.
   Safely delete this file and its <script> tag in project-parallax.html
   if you are not using the Parallax Illustration Project Page. */

(function () {
  const hero = document.querySelector(".parallax-hero");
  if (!hero) return;

  // Respect users who prefer reduced motion.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Larger speed = layer moves slower (feels further away).
  // Front = 0 means it scrolls exactly with the page.
  // Each layer's buffer in parallax.css is sized to match its speed.
  const layers = [
    { el: hero.querySelector(".parallax-layer-bg"), speed: 0.6 },
    { el: hero.querySelector(".parallax-layer-far"), speed: 0.44 },
    { el: hero.querySelector(".parallax-layer-mid"), speed: 0.3 },
    { el: hero.querySelector(".parallax-layer-close"), speed: 0.14 },
    { el: hero.querySelector(".parallax-layer-front"), speed: 0.0 },
  ].filter((layer) => layer.el);

  if (layers.length === 0) return;

  let ticking = false;

  function update() {
    ticking = false;

    const rect = hero.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.bottom < 0 || rect.top > vh) return;

    // As the hero moves up the page, move each layer at a different speed.
    const progress = -rect.top;

    for (const { el, speed } of layers) {
      el.style.transform = `translate3d(0, ${progress * speed}px, 0)`;
    }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  update();
})();
