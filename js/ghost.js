/* ------------------------------------------------------------------- */
/* Ghost Animation                                                     */
/* Click the hero icon to show or hide the flying ghost.               */
/* Pairs with styles/make-something-fly.css.                           */
/* If you remove the ghost, also remove .hero-icon in style.css.       */
/* Safely delete this file if you are not using this effect.           */
/* ------------------------------------------------------------------- */

const ghost = document.getElementById("ghostanimation");
const ghostButton = document.getElementById("ghostButton");

if (ghost && ghostButton) {
  ghostButton.addEventListener("click", () => {
    const playing = ghost.classList.toggle("is-playing");

    ghostButton.setAttribute("aria-label", playing ? "Hide ghost" : "Play ghost");
  });
}
