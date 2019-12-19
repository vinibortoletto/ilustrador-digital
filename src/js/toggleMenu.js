const menuMobile = document.getElementById("menu-mobile");
const menuBtn = document.getElementById("menu-btn");
const menuBg = document.getElementById("menu-bg");
const menuIcon = document.querySelectorAll(".menu-icon");

let menuActive = false;
let currentWidth;

function toggleMenu() {
  menuMobile.classList.toggle("toggle-menuMobile");
  menuBg.classList.toggle("menu-bg");

  menuIcon.forEach(icon => {
    icon.classList.toggle("menu-icon-close");
  });

  !menuActive ? (menuActive = true) : (menuActive = false);
}

menuBtn.addEventListener("click", toggleMenu);

function getCurrentWidth() {
  currentWidth = document.body.clientWidth;
  if (currentWidth >= 768) {
    menuMobile.classList.remove("hide-menuMobile");
    menuActive && toggleMenu();
  } else {
    menuMobile.classList.add("hide-menuMobile");
  }
}

window.addEventListener("resize", getCurrentWidth);
