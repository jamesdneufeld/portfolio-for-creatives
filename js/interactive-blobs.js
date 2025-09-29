const blobs = document.querySelectorAll(".blob");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5; // range -0.5 → 0.5
  const y = e.clientY / window.innerHeight - 0.5;

  blobs.forEach((blob, i) => {
    const factor = (i + 1) * 10; // reduced factor for more subtle movement
    // Store the mouse transform separately using CSS variables
    blob.style.setProperty("--mouse-x", `${x * factor}px`);
    blob.style.setProperty("--mouse-y", `${y * factor}px`);
  });
});
