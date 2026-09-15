document.addEventListener("DOMContentLoaded", () => {
  // Menu Mobile Responsivo
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });

  // Accordion FAQ
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      // Fecha os outros
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      // Alterna o atual
      item.classList.toggle("active");
    });
  });

  // Animações ao Rolar (Scroll Animation)
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
  elementsToAnimate.forEach((el) => observer.observe(el));
});
