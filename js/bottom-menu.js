/* ------------------------------------------------------------------- */
/* Bottom Menu                                                         */
/* Shows the bottom menu after scrolling down the page.                */
/* Controlled by styles/bottom-menu.css, which styles .show and .hide. */
/* Safely delete this file if you are not using this component.        */
/* ------------------------------------------------------------------- */

const menu = document.getElementById("bottomMenu");

if (menu) {
  const showAfter = 800; // px scrolled before the menu appears

  const onScroll = () => {
    menu.classList.toggle("show", window.scrollY >= showAfter);
    menu.classList.toggle("hide", window.scrollY < showAfter);
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  onScroll();
}
