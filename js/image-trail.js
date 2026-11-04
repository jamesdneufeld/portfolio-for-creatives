// CUSTOMIZE THESE

const images = ["./assets/image-trail/trail-01.svg", "./assets/image-trail/trail-02.svg", "./assets/image-trail/trail-03.svg", "./assets/image-trail/trail-04.svg", "./assets/image-trail/trail-05.svg", "./assets/image-trail/trail-06.svg", "./assets/image-trail/trail-07.svg", "./assets/image-trail/trail-08.svg", "./assets/image-trail/trail-09.svg", "./assets/image-trail/trail-10.svg", "./assets/image-trail/trail-11.svg", "./assets/image-trail/trail-12.svg", "./assets/image-trail/trail-13.svg", "./assets/image-trail/trail-14.svg", "./assets/image-trail/trail-15.svg", "./assets/image-trail/trail-16.svg", "./assets/image-trail/trail-17.svg", "./assets/image-trail/trail-18.svg"];

const spacing = 80; // Distance between images on desktop
const maxImages = 200; // Maximum number of images on screen
const imageSize = 80; // Maximum image width and height in pixels

// IMAGE TRAIL CONSTRAINED TO SELECTED ELEMENT

const trailContainer = document.querySelector(".has-image-trail");

if (trailContainer) {
  // Preload images
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  let lastUsedIndex = -1;
  let imageCount = 0;

  // Select a random image without consecutive repeats
  function getRandomIndex() {
    if (images.length < 2) return 0;

    let index;

    do {
      index = Math.floor(Math.random() * images.length);
    } while (index === lastUsedIndex);

    lastUsedIndex = index;
    return index;
  }

  // Create and place an image
  function placeImage(x, y) {
    const img = document.createElement("img");

    img.src = images[getRandomIndex()];
    img.alt = "";
    img.classList.add("trail-img");

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.maxWidth = `${imageSize}px`;
    img.style.maxHeight = `${imageSize}px`;

    trailContainer.appendChild(img);

    imageCount++;

    // Remove oldest image when limit is reached
    if (imageCount > maxImages) {
      trailContainer.querySelector(".trail-img").remove();
      imageCount--;
    }
  }

  // Detect touch-based devices
  const isMobile = () => window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  // Desktop: cursor trail
  let lastX = null;
  let lastY = null;

  trailContainer.addEventListener("mousemove", (e) => {
    if (isMobile()) return;

    const rect = trailContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (lastX === null) {
      lastX = x;
      lastY = y;
      placeImage(x, y);
      return;
    }

    const dx = x - lastX;
    const dy = y - lastY;
    const dist = Math.hypot(dx, dy);

    if (dist >= spacing) {
      placeImage(x, y);
      lastX = x;
      lastY = y;
    }
  });

  // Reset cursor position when leaving selected element
  trailContainer.addEventListener("mouseleave", () => {
    lastX = null;
    lastY = null;
  });

  // Mobile: random placement
  function spawnRandom() {
    const x = Math.random() * trailContainer.clientWidth;
    const y = Math.random() * trailContainer.clientHeight;

    placeImage(x, y);
  }

  let mobileInterval = null;

  if (isMobile()) {
    for (let i = 0; i < 8; i++) {
      setTimeout(spawnRandom, i * 200);
    }

    mobileInterval = setInterval(spawnRandom, 800);
  }

  // Pause mobile spawning when page is hidden
  document.addEventListener("visibilitychange", () => {
    if (!isMobile()) return;

    if (document.hidden) {
      clearInterval(mobileInterval);
      mobileInterval = null;
    } else if (mobileInterval === null) {
      mobileInterval = setInterval(spawnRandom, 800);
    }
  });

  // Click: clear images
  trailContainer.addEventListener("click", () => {
    trailContainer.querySelectorAll(".trail-img").forEach((img) => img.remove());
    imageCount = 0;
  });
}
