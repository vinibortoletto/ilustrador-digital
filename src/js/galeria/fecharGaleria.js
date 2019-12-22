// Fechar galeria
const btnFechar = document.getElementById("btn-fechar-galeria");

function fecharGaleria() {
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
