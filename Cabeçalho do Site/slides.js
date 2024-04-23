document.addEventListener("DOMContentLoaded", function() {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.opacity = 1;
  }

  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000); // Change slide every 5 seconds
});

