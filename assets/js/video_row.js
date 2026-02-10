document.querySelectorAll(".video-row").forEach(row => {
  const track = row.querySelector(".video-track");
  const pages = row.querySelectorAll(".video-page");
  const prev = row.querySelector(".prev");
  const next = row.querySelector(".next");

  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % pages.length;
    update();
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + pages.length) % pages.length;
    update();
  });
});