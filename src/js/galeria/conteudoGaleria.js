// Galeria
const galeria = document.getElementById("galeria");
const galeriaImg = document.getElementById("galeria-img");
const galeriaTxt = document.getElementById("galeria-texto");

const imgElmt = document.createElement("img");
const txtTituloElmt = document.createElement("h1");
const txtSerieElmt = document.createElement("h2");
const txtDataElmt = document.createElement("h3");

galeriaImg.appendChild(imgElmt);
galeriaTxt.appendChild(txtTituloElmt);
galeriaTxt.appendChild(txtSerieElmt);
galeriaTxt.appendChild(txtDataElmt);

const runescapeImg1 = document.getElementById("runescape-1");
const runescapeImg2 = document.getElementById("runescape-2");
const runescapeImg3 = document.getElementById("runescape-3");
const runescapeImg4 = document.getElementById("runescape-4");

const folcloreImg1 = document.getElementById("folclore-1");
const folcloreImg2 = document.getElementById("folclore-2");
const folcloreImg3 = document.getElementById("folclore-3");
const folcloreImg4 = document.getElementById("folclore-4");

const conteudo = {
  imagens: {
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
    },
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
  }
};

// Série Runescape
const runescape = conteudo.imagens.runescape;
const folclore = conteudo.imagens.folclore;

runescapeImg1.addEventListener("click", () => {
  galeria.style.display = "flex";
  setTimeout(() => {
    galeria.style.opacity = "1";
  }, 100);

  imgElmt.src = runescape.trabalho1.img;
  txtTituloElmt.innerHTML = runescape.trabalho1.titulo;
  txtSerieElmt.innerHTML = runescape.trabalho1.serie;
  txtDataElmt.innerHTML = runescape.trabalho1.data;
});

runescapeImg2.addEventListener("click", () => {
  galeria.style.display = "flex";
  setTimeout(() => {
    galeria.style.opacity = "1";
  }, 100);

  imgElmt.src = runescape.trabalho2.img;
  txtTituloElmt.innerHTML = runescape.trabalho2.titulo;
  txtSerieElmt.innerHTML = runescape.trabalho2.serie;
  txtDataElmt.innerHTML = runescape.trabalho2.data;
});

runescapeImg3.addEventListener("click", () => {
  galeria.style.display = "flex";
  setTimeout(() => {
    galeria.style.opacity = "1";
  }, 100);

  imgElmt.src = runescape.trabalho3.img;
  txtTituloElmt.innerHTML = runescape.trabalho3.titulo;
  txtSerieElmt.innerHTML = runescape.trabalho3.serie;
  txtDataElmt.innerHTML = runescape.trabalho3.data;
});

runescapeImg4.addEventListener("click", () => {
  galeria.style.display = "flex";
  setTimeout(() => {
    galeria.style.opacity = "1";
  }, 100);

  imgElmt.src = runescape.trabalho4.img;
  txtTituloElmt.innerHTML = runescape.trabalho4.titulo;
  txtSerieElmt.innerHTML = runescape.trabalho4.serie;
  txtDataElmt.innerHTML = runescape.trabalho4.data;
});

// Série Folclore
folcloreImg1.addEventListener("click", () => {
  galeria.style.display = "flex";
  setTimeout(() => {
    galeria.style.opacity = "1";
  }, 100);

  imgElmt.src = folclore.trabalho1.img;
  txtTituloElmt.innerHTML = folclore.trabalho1.titulo;
  txtSerieElmt.innerHTML = folclore.trabalho1.serie;
  txtDataElmt.innerHTML = folclore.trabalho1.data;
});

folcloreImg2.addEventListener("click", () => {
  galeria.style.display = "flex";
  setTimeout(() => {
    galeria.style.opacity = "1";
  }, 100);

  imgElmt.src = folclore.trabalho2.img;
  txtTituloElmt.innerHTML = folclore.trabalho2.titulo;
  txtSerieElmt.innerHTML = folclore.trabalho2.serie;
  txtDataElmt.innerHTML = folclore.trabalho2.data;
});

folcloreImg3.addEventListener("click", () => {
  galeria.style.display = "flex";
  setTimeout(() => {
    galeria.style.opacity = "1";
  }, 100);

  imgElmt.src = folclore.trabalho3.img;
  txtTituloElmt.innerHTML = folclore.trabalho3.titulo;
  txtSerieElmt.innerHTML = folclore.trabalho3.serie;
  txtDataElmt.innerHTML = folclore.trabalho3.data;
});

folcloreImg4.addEventListener("click", () => {
  galeria.style.display = "flex";
  setTimeout(() => {
    galeria.style.opacity = "1";
  }, 100);

  imgElmt.src = folclore.trabalho4.img;
  txtTituloElmt.innerHTML = folclore.trabalho4.titulo;
  txtSerieElmt.innerHTML = folclore.trabalho4.serie;
  txtDataElmt.innerHTML = folclore.trabalho4.data;
});
