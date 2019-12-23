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

const conteudo = {
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
};
