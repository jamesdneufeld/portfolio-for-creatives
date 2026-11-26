(() => {
  const thumbs = [...document.querySelectorAll(".gallery-thumb")];
  const stageButton = document.querySelector(".gallery-stage-button");
  const stageImage = document.querySelector(".gallery-stage-image");

  if (!thumbs.length || !stageButton || !stageImage) {
    return;
  }

  // -1 means nothing is featured yet.
  // showImage(0) below sets the initial featured thumbnail.
  let currentIndex = -1;

  function showImage(index) {
    if (index === currentIndex) {
      return;
    }

    if (currentIndex !== -1) {
      const previousThumb = thumbs[currentIndex];
      previousThumb.classList.remove("gallery-thumb-featured");
      previousThumb.removeAttribute("aria-current");
    }

    currentIndex = index;

    const currentThumb = thumbs[currentIndex];
    const currentImage = currentThumb.querySelector(".gallery-thumb-image");

    currentThumb.classList.add("gallery-thumb-featured");
    currentThumb.setAttribute("aria-current", "true");

    // Mirror the selected thumbnail into the stage.
    // getAttribute preserves the relative path the author wrote;
    // .src would return a resolved absolute URL.
    stageImage.src = currentImage.getAttribute("src");

    // Name the advance control by its current context, not just its action.
    stageButton.setAttribute("aria-label", `Show next image. Image ${currentIndex + 1} of ${thumbs.length} is currently displayed.`);
  }

  // Thumbnails select.
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      showImage(index);
    });
  });

  // The stage advances.
  stageButton.addEventListener("click", () => {
    showImage((currentIndex + 1) % thumbs.length);
  });

  showImage(0);
})();
