const runescapeSample1 = document.getElementById("runescape-1");
const runescapeSample2 = document.getElementById("runescape-2");
const runescapeSample3 = document.getElementById("runescape-3");
const runescapeSample4 = document.getElementById("runescape-4");

const runescapeImg1 = () => {
  windowWidth < 1024
    ? (imgElmt.src = conteudo.runescape.trabalho1.img.sm)
    : (imgElmt.src = conteudo.runescape.trabalho1.img.lg);

  txtTituloElmt.innerHTML = conteudo.runescape.trabalho1.titulo;
  txtSerieElmt.innerHTML = conteudo.runescape.trabalho1.serie;
  txtDataElmt.innerHTML = conteudo.runescape.trabalho1.data;
};
const runescapeImg2 = () => {
  windowWidth < 1024
    ? (imgElmt.src = conteudo.runescape.trabalho2.img.sm)
    : (imgElmt.src = conteudo.runescape.trabalho2.img.lg);

  txtTituloElmt.innerHTML = conteudo.runescape.trabalho2.titulo;
  txtSerieElmt.innerHTML = conteudo.runescape.trabalho2.serie;
  txtDataElmt.innerHTML = conteudo.runescape.trabalho2.data;
};
const runescapeImg3 = () => {
  windowWidth < 1024
    ? (imgElmt.src = conteudo.runescape.trabalho3.img.sm)
    : (imgElmt.src = conteudo.runescape.trabalho3.img.lg);

  txtTituloElmt.innerHTML = conteudo.runescape.trabalho3.titulo;
  txtSerieElmt.innerHTML = conteudo.runescape.trabalho3.serie;
  txtDataElmt.innerHTML = conteudo.runescape.trabalho3.data;
};
const runescapeImg4 = () => {
  windowWidth < 1024
    ? (imgElmt.src = conteudo.runescape.trabalho4.img.sm)
    : (imgElmt.src = conteudo.runescape.trabalho4.img.lg);

  txtTituloElmt.innerHTML = conteudo.runescape.trabalho4.titulo;
  txtSerieElmt.innerHTML = conteudo.runescape.trabalho4.serie;
  txtDataElmt.innerHTML = conteudo.runescape.trabalho4.data;
};

runescapeSample1.addEventListener("click", () => {
  abrirGaleria();
  runescapeImg1();
});
runescapeSample2.addEventListener("click", () => {
  abrirGaleria();
  runescapeImg2();
});
runescapeSample3.addEventListener("click", () => {
  abrirGaleria();
  runescapeImg3();
});
runescapeSample4.addEventListener("click", () => {
  abrirGaleria();
  runescapeImg4();
});
