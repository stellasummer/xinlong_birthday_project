
document.addEventListener("DOMContentLoaded", () => {

  const galleries = {
  gallery1: [
    "assets/img/170901.png",
    "assets/img/1709012.png",
    "assets/img/171002.png",
    "assets/img/171129.png",
    "assets/img/1805112.png",
    "assets/img/1805113.png",
    "assets/img/180707YBUqingdao.png",
    "assets/img/180813YBUbeijing.png",
    "assets/img/1808132.png",
    "assets/img/180916debut.png",
    "assets/img/180921.png",
    "assets/img/180921debut.png",
    "assets/img/1809212.png",
    "assets/img/181111.png",
    "assets/img/1811112.png"
  ],

  gallery2: [
    "assets/img/190406.png",
    "assets/img/190529.png",
    "assets/img/190601.png",
    "assets/img/190615.png",
    "assets/img/190802.png",
    "assets/img/190824.png",
    "assets/img/1908242.png",
    "assets/img/191208.png",
    "assets/img/200517.png",
    "assets/img/200723.png",
    "assets/img/200910.png",
    "assets/img/2009102.png",
    "assets/img/200920.png",
    "assets/img/2101101.png",
    "assets/img/210119.png",
    "assets/img/210515.png",
    "assets/img/2105152.png",
    "assets/img/210625.png",
    "assets/img/210820.png",
    "assets/img/210821.png",
    "assets/img/210903.png"
  ],

  gallery3: [
    "assets/img/220513.png",
    "assets/img/2205132.png",
    "assets/img/220722.png",
    "assets/img/220822.png",
    "assets/img/220928.png",
    "assets/img/2209282.png",
    "assets/img/221012.png",
    "assets/img/2210122.png",
    "assets/img/2210123.png",
    "assets/img/230131.png",
    "assets/img/230503.png",
    "assets/img/2305032.png",
    "assets/img/230626.png",
    "assets/img/230910.png",
    "assets/img/231009.png",
    "assets/img/231203.png",
    "assets/img/2312032.png"
  ],

  gallery4: [
    "assets/img/240214.png",
    "assets/img/240427.png",
    "assets/img/2404272.png",
    "assets/img/240720.png",
    "assets/img/241115.png",
    "assets/img/241201.png",
    "assets/img/241226.png",
    "assets/img/250125.png",
    "assets/img/250311.png",
    "assets/img/2500000.png"
  ]
};


  const modal = document.getElementById("tlModal");
  const image = modal.querySelector(".tl-image");
  const closeBtn = modal.querySelector(".tl-close");
  const prevBtn = modal.querySelector(".tl-prev");
  const nextBtn = modal.querySelector(".tl-next");

  let currentGallery = [];
  let currentIndex = 0;

  const items = document.querySelectorAll(".timeline-section .tl-item");

  items.forEach(item => {
    item.addEventListener("click", () => {
      const key = item.dataset.gallery;
      currentGallery = galleries[key] || [];
      currentIndex = 0;
      showImage();
      modal.style.display = "flex";
    });
  });

  function showImage() {
    if (currentGallery.length === 0) return;
    image.src = currentGallery[currentIndex];
  }

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    showImage();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex + 1) % currentGallery.length;
    showImage();
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});