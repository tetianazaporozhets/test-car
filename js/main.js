document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      1024: {
        spaceBetween: 60,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion-toggle").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const container = button.closest(".accordion-item");
      const preview = container.querySelector(".preview");
      const fullText = container.querySelector(".accordion-content");

      preview.classList.toggle("hidden");
      fullText.classList.toggle("hidden");

      const arrow = button.querySelector(".arrow-icon");
      if (arrow) {
        arrow.classList.toggle("rotate-180");
      }

      button.textContent = preview.classList.contains("hidden")
        ? "Zwiń"
        : "Rozwiń";
      button.appendChild(arrow);
    });
  });
});
