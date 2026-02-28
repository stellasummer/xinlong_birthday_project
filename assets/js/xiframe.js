document.querySelectorAll(".xiframe-wrapper").forEach(wrapper => {

  const track = wrapper.querySelector(".xiframe-track");
  const pages = wrapper.querySelectorAll(".xiframe-page");
  const prev = wrapper.querySelector(".xiframe-btn-left");
  const next = wrapper.querySelector(".xiframe-btn-right");

  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  next?.addEventListener("click", () => {
    if (index < pages.length - 1) {
      index++;
      update();
    }
  });

  prev?.addEventListener("click", () => {
    if (index > 0) {
      index--;
      update();
    }
  });

});

document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector(".wiframe-track");
  const pages = document.querySelectorAll(".wiframe-page");
  const btnLeft = document.querySelector(".wiframe-btn-left");
  const btnRight = document.querySelector(".wiframe-btn-right");

  let index = 0;
  const total = pages.length;

  function updateXFeed() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  btnRight.addEventListener("click", () => {
    index = (index + 1) % total;
    updateXFeed();
  });

  btnLeft.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateXFeed();
  });

});

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".xiframe-wrapper").forEach(wrapper => {

    const track = wrapper.querySelector(".video-track");
    const pages = wrapper.querySelectorAll(".video-page");
    const btnLeft = wrapper.querySelector(".video-btn-left");
    const btnRight = wrapper.querySelector(".video-btn-right");

    if (!track || pages.length === 0) return;

    let index = 0;
    const total = pages.length;

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    btnRight?.addEventListener("click", () => {
      if (total <= 1) return;
      index = (index + 1) % total;
      update();
    });

    btnLeft?.addEventListener("click", () => {
      if (total <= 1) return;
      index = (index - 1 + total) % total;
      update();
    });

  });

});