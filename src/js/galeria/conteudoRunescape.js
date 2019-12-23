const conteudoRunescape = {
  runescape: {
    trabalho1: {
      img: "/src/images/portfolio/serie-runescape/runescape-1-lg.jpg",
      titulo: "o lenhador",
      serie: "série runescape",
      data: "{15 / 07 / 2017}"
    },
    trabalho2: {
      img: "/src/images/portfolio/serie-runescape/runescape-2-lg.jpg",
      titulo: "o pescador de edgeville",
      serie: "série runescape",
      data: "{27 / 06 / 2017}"
    },
    trabalho3: {
      img: "/src/images/portfolio/serie-runescape/runescape-3-lg.jpg",
      titulo: "Sob a sombra do carvalho",
      serie: "série runescape",
      data: "{13 / 08 / 2017}"
    },
    trabalho4: {
      img: "/src/images/portfolio/serie-runescape/runescape-4-lg.jpg",
      titulo: "o ferreiro de varrock",
      serie: "série runescape",
      data: "{18 / 11 / 2017}"
    }
  }
};

const runescapeSample1 = document.getElementById("runescape-1");
const runescapeSample2 = document.getElementById("runescape-2");
const runescapeSample3 = document.getElementById("runescape-3");
const runescapeSample4 = document.getElementById("runescape-4");

const runescapeImg1 = () => {
  imgElmt.src = conteudo.runescape.trabalho1.img;
  txtTituloElmt.innerHTML = conteudo.runescape.trabalho1.titulo;
  txtSerieElmt.innerHTML = conteudo.runescape.trabalho1.serie;
  txtDataElmt.innerHTML = conteudo.runescape.trabalho1.data;
};
const runescapeImg2 = () => {
  imgElmt.src = conteudo.runescape.trabalho2.img;
  txtTituloElmt.innerHTML = conteudo.runescape.trabalho2.titulo;
  txtSerieElmt.innerHTML = conteudo.runescape.trabalho2.serie;
  txtDataElmt.innerHTML = conteudo.runescape.trabalho2.data;
};
const runescapeImg3 = () => {
  imgElmt.src = conteudo.runescape.trabalho3.img;
  txtTituloElmt.innerHTML = conteudo.runescape.trabalho3.titulo;
  txtSerieElmt.innerHTML = conteudo.runescape.trabalho3.serie;
  txtDataElmt.innerHTML = conteudo.runescape.trabalho3.data;
};
const runescapeImg4 = () => {
  imgElmt.src = conteudo.runescape.trabalho4.img;
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
