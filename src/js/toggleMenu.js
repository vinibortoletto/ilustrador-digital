// Toggle Menu --------------------------------------
const menuBtn = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu-mobile");
const menuBg = document.getElementById("menu-bg");
const menuBurger = document.querySelectorAll(".burger-line");

let menuActive = false;

function toggleMenu() {
  menuMobile.classList.toggle("toggle-menu");

  if (menuActive) {
    menuBg.style.opacity = "0";
    setTimeout(() => {
      menuBg.style.display = "none";
    }, 200);
  } else {
    menuBg.style.display = "block";
    setTimeout(() => {
      menuBg.style.opacity = "0.8";
    }, 100);
  }

  menuBurger.forEach(line => {
    line.classList.toggle("menu-burger-close");
  });

  !menuActive ? (menuActive = true) : (menuActive = false);
}

menuBtn.addEventListener("click", toggleMenu);

// On Resize --------------------------------------
function onResize() {
  let currentWidth = document.body.clientWidth;

  if (currentWidth >= 1024) {
    menuActive && toggleMenu();
  }
}

window.addEventListener("resize", onResize);

// Desktop Menu -----------------------------------
const menuDesktopLinks = document.querySelectorAll(".menu-desktop-link");
const navbarDesktop = document.getElementById("navbar-desktop");

navbarDesktop.addEventListener("mouseenter", () => {
  menuDesktopLinks.forEach(link => {
    link.style.display = "block";
    link.style.pointerEvents = "all";

    menuBg.style.display = "block";
    setTimeout(() => {
      menuBg.style.opacity = "0.8";
    }, 100);

    setTimeout(() => {
      link.classList.toggle("show-desktop-link");
    }, 100);
  });
});

navbarDesktop.addEventListener("mouseleave", () => {
  menuDesktopLinks.forEach(link => {
    link.classList.toggle("show-desktop-link");
    link.style.pointerEvents = "none";

    menuBg.style.opacity = "0";
    setTimeout(() => {
      menuBg.style.display = "none";
    }, 200);

    setTimeout(() => {
      link.style.display = "none";
    }, 200);
  });
});
