// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add hover effect to professional cards
document.querySelectorAll(".professional-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Add iframe resize observer
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const iframe = entry.target;
    const containerWidth = entry.contentRect.width;
    iframe.style.height = `${containerWidth * 0.75}px`;
  }
});

document.querySelectorAll(".project-frame").forEach((iframe) => {
  resizeObserver.observe(iframe.parentElement);
});
