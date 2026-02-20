const galleries = {
  gallery1: [
    "assets/img/hero-1.jpg",
    "assets/images/2017-2.jpg"
  ],
  gallery2: [
    "assets/images/2018-1.jpg",
    "assets/images/2018-2.jpg"
  ],
  gallery3: [
    "assets/images/2020-1.jpg",
    "assets/images/2020-2.jpg"
  ],
  gallery4: [
    "assets/images/2020-1.jpg",
    "assets/images/2020-2.jpg"
  ]
};

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentGallery = [];
let currentIndex = 0;

document.querySelectorAll(".timeline-item").forEach(item => {
  item.addEventListener("click", () => {
    const key = item.dataset.gallery;
    currentGallery = galleries[key];
    currentIndex = 0;
    showImage();
    lightbox.style.display = "flex";
  });
});

function showImage() {
  lightboxImg.src = currentGallery[currentIndex];
}

prevBtn.onclick = () => {
  currentIndex =
    (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  showImage();
};

nextBtn.onclick = () => {
  currentIndex =
    (currentIndex + 1) % currentGallery.length;
  showImage();
};

closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};

