/**
 * Scroll Reveal
 *
 * Reveals elements when they enter the viewport.
 *
 * To customize:
 * 1. Add the class "reveal" to any element you want to animate.
 * 2. Change the transition and transform values in your CSS.
 * 3. Adjust threshold below if you want the animation to start
 *    when more of the element is visible.
 *
 * The animation respects the visitor's reduced-motion preference.
 */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});
