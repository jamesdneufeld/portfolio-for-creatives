const rotations = [-6, -4, -2, 2, 4, 6];

document.querySelectorAll(".rotate").forEach((image) => {
  image.addEventListener("pointerenter", () => {
    const angle = rotations[Math.floor(Math.random() * rotations.length)];
    image.style.transform = `rotate(${angle}deg)`;
  });

  image.addEventListener("pointerleave", () => {
    // Reset rotation
    image.style.transform = "rotate(0deg)";
  });
});
