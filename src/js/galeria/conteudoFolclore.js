const folcloreSample1 = document.getElementById("folclore-1");
const folcloreSample2 = document.getElementById("folclore-2");
const folcloreSample3 = document.getElementById("folclore-3");
const folcloreSample4 = document.getElementById("folclore-4");

const folcloreImg1 = () => {
  windowWidth < 1024
    ? (imgElmt.src = conteudo.folclore.trabalho1.img.sm)
    : (imgElmt.src = conteudo.folclore.trabalho1.img.lg);

  txtTituloElmt.innerHTML = conteudo.folclore.trabalho1.titulo;
  txtSerieElmt.innerHTML = conteudo.folclore.trabalho1.serie;
  txtDataElmt.innerHTML = conteudo.folclore.trabalho1.data;
};
const folcloreImg2 = () => {
  windowWidth < 1024
    ? (imgElmt.src = conteudo.folclore.trabalho2.img.sm)
    : (imgElmt.src = conteudo.folclore.trabalho2.img.lg);

  txtTituloElmt.innerHTML = conteudo.folclore.trabalho2.titulo;
  txtSerieElmt.innerHTML = conteudo.folclore.trabalho2.serie;
  txtDataElmt.innerHTML = conteudo.folclore.trabalho2.data;
};
const folcloreImg3 = () => {
  windowWidth < 1024
    ? (imgElmt.src = conteudo.folclore.trabalho3.img.sm)
    : (imgElmt.src = conteudo.folclore.trabalho3.img.lg);

  txtTituloElmt.innerHTML = conteudo.folclore.trabalho3.titulo;
  txtSerieElmt.innerHTML = conteudo.folclore.trabalho3.serie;
  txtDataElmt.innerHTML = conteudo.folclore.trabalho3.data;
};
const folcloreImg4 = () => {
  windowWidth < 1024
    ? (imgElmt.src = conteudo.folclore.trabalho4.img.sm)
    : (imgElmt.src = conteudo.folclore.trabalho4.img.lg);

  txtTituloElmt.innerHTML = conteudo.folclore.trabalho4.titulo;
  txtSerieElmt.innerHTML = conteudo.folclore.trabalho4.serie;
  txtDataElmt.innerHTML = conteudo.folclore.trabalho4.data;
};

folcloreSample1.addEventListener("click", () => {
  abrirGaleria();
  folcloreImg1();
});
folcloreSample2.addEventListener("click", () => {
  abrirGaleria();
  folcloreImg2();
});
folcloreSample3.addEventListener("click", () => {
  abrirGaleria();
  folcloreImg3();
});
folcloreSample4.addEventListener("click", () => {
  abrirGaleria();
  folcloreImg4();
});
