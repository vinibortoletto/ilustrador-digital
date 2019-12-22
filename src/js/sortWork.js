const btnShowAll = document.getElementById("btn-showAll");
const btnRunescape = document.getElementById("btn-runescape");
const btnFolclore = document.getElementById("btn-folclore");

const images = document.querySelectorAll(".gallery-img-sample");

btnShowAll.addEventListener("click", () => {
  images.forEach(image => {
    image.style.display = "block";
  });
});

btnRunescape.addEventListener("click", () => {
  images.forEach(image => {
    if (image.classList.contains("runescape")) {
      image.style.display = "block";
    }
    if (image.classList.contains("folclore")) {
      image.style.display = "none";
    }
  });
});

btnFolclore.addEventListener("click", () => {
  images.forEach(image => {
    if (image.classList.contains("folclore")) {
      image.style.display = "block";
    }
    if (image.classList.contains("runescape")) {
      image.style.display = "none";
    }
  });
});
