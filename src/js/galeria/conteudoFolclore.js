const conteudoFolclore = {
  folclore: {
    trabalho1: {
      img: "/src/images/portfolio/serie-folclore/folclore-1-lg.jpg",
      titulo: "yaci yaterê",
      serie: "série folclore do brasil",
      data: "{28 / 03 / 2018}"
    },
    trabalho2: {
      img: "/src/images/portfolio/serie-folclore/folclore-2-lg.jpg",
      titulo: "y'iara",
      serie: "série folclore do brasil",
      data: "{15 / 06 / 2018}"
    },
    trabalho3: {
      img: "/src/images/portfolio/serie-folclore/folclore-3-lg.jpg",
      titulo: "mbae'tatá",
      serie: "série folclore do brasil",
      data: "{30 / 09 / 2018}"
    },
    trabalho4: {
      img: "/src/images/portfolio/serie-folclore/folclore-4-lg.jpg",
      titulo: "vitória régia",
      serie: "série folclore do brasil",
      data: "{11 / 12 / 2018}"
    }
  }
};

const folcloreSample1 = document.getElementById("folclore-1");
const folcloreSample2 = document.getElementById("folclore-2");
const folcloreSample3 = document.getElementById("folclore-3");
const folcloreSample4 = document.getElementById("folclore-4");

const folcloreImg1 = () => {
  imgElmt.src = conteudo.folclore.trabalho1.img;
  txtTituloElmt.innerHTML = conteudo.folclore.trabalho1.titulo;
  txtSerieElmt.innerHTML = conteudo.folclore.trabalho1.serie;
  txtDataElmt.innerHTML = conteudo.folclore.trabalho1.data;
};
const folcloreImg2 = () => {
  imgElmt.src = conteudo.folclore.trabalho2.img;
  txtTituloElmt.innerHTML = conteudo.folclore.trabalho2.titulo;
  txtSerieElmt.innerHTML = conteudo.folclore.trabalho2.serie;
  txtDataElmt.innerHTML = conteudo.folclore.trabalho2.data;
};
const folcloreImg3 = () => {
  imgElmt.src = conteudo.folclore.trabalho3.img;
  txtTituloElmt.innerHTML = conteudo.folclore.trabalho3.titulo;
  txtSerieElmt.innerHTML = conteudo.folclore.trabalho3.serie;
  txtDataElmt.innerHTML = conteudo.folclore.trabalho3.data;
};
const folcloreImg4 = () => {
  imgElmt.src = conteudo.folclore.trabalho4.img;
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
