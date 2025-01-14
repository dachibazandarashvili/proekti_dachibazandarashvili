// FIRST SECTION

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  slides[currentSlide].classList.add("inactive");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
  slides[currentSlide].classList.remove("inactive");
}

setInterval(showNextSlide, 5000);