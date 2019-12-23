const galeria = document.getElementById("galeria");

const abrirGaleria = () => {
  galeria.style.display = "flex";
  setTimeout(() => {
    galeria.style.opacity = "1";
  }, 100);
};
