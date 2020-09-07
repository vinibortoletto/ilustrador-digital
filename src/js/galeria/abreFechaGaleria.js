// Abrir galeria
const galeria = document.getElementById("gallery-full");
const navbarMobile = document.getElementById("navbar-mobile");

const abrirGaleria = () => {
  navbarMobile.style.transform = "translateY(-100%)";

  galeria.style.display = "flex";
  setTimeout(() => {
    galeria.style.opacity = "1";
  }, 100);
};

// Fechar galeria
const btnFechar = document.getElementById("btn-close-gallery");

function fecharGaleria() {
  navbarMobile.style.transform = "translateY(0)";

  galeria.style.opacity = "0";
  setTimeout(() => {
    galeria.style.display = "none";
  }, 300);
}

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode == 27 && fecharGaleria();
};

btnFechar.addEventListener("click", fecharGaleria);
