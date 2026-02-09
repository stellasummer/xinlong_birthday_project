const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const total = slides.length;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % total;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + total) % total;
  updateCarousel();
});

// Dot navigation
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
});

// Auto play (optional)
setInterval(() => {
  index = (index + 1) % total;
  updateCarousel();
}, 5000);
