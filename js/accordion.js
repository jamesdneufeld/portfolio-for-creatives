document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.dataset.panel);
    const isActive = button.classList.contains("active");

    // Close all panels
    document.querySelectorAll(".accordion-button").forEach((btn) => btn.classList.remove("active"));
    document.querySelectorAll(".accordion-panel").forEach((pnl) => pnl.classList.remove("active"));

    // Toggle the clicked panel
    if (!isActive) {
      button.classList.add("active");
      panel.classList.add("active");
    }
  });
});
