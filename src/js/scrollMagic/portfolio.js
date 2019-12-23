$(document).ready(function() {
  let controller = new ScrollMagic.Controller();

  let bgPortfolio = new ScrollMagic.Scene({
    triggerElement: "#bg-portfolio",
    triggerHook: 0.2,
    reverse: false
  })
    .setClassToggle("#bg-portfolio", "fade-in")
    .addTo(controller);
  let tituloPortfolio = new ScrollMagic.Scene({
    triggerElement: "#titulo-portfolio",
    triggerHook: 0.4,
    reverse: false
  })
    .setClassToggle("#titulo-portfolio", "fade-in")
    .addTo(controller);

  // Buttons ----------------------------------
  let btnShowAll = new ScrollMagic.Scene({
    triggerElement: "#btn-showAll",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#btn-showAll", "fade-in")
    .addTo(controller);
  let btnRunescape = new ScrollMagic.Scene({
    triggerElement: "#btn-runescape",
    triggerHook: 0.6,
    reverse: false
  })
    .setClassToggle("#btn-runescape", "fade-in")
    .addTo(controller);
  let btnFolclore = new ScrollMagic.Scene({
    triggerElement: "#btn-folclore",
    triggerHook: 0.5,
    reverse: false
  })
    .setClassToggle("#btn-folclore", "fade-in")
    .addTo(controller);

  // Gallery -----------------------------------
  let runescapeImg1 = new ScrollMagic.Scene({
    triggerElement: "#runescape-1",
    triggerHook: 0.8,
    reverse: false
  })
    .setClassToggle("#runescape-1", "fade-in")
    .addTo(controller);
  let runescapeImg2 = new ScrollMagic.Scene({
    triggerElement: "#runescape-2",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#runescape-2", "fade-in")
    .addTo(controller);
  let runescapeImg3 = new ScrollMagic.Scene({
    triggerElement: "#runescape-3",
    triggerHook: 0.6,
    reverse: false
  })
    .setClassToggle("#runescape-3", "fade-in")
    .addTo(controller);
  let runescapeImg4 = new ScrollMagic.Scene({
    triggerElement: "#runescape-4",
    triggerHook: 0.5,
    reverse: false
  })
    .setClassToggle("#runescape-4", "fade-in")
    .addTo(controller);

  let folcloreImg1 = new ScrollMagic.Scene({
    triggerElement: "#folclore-1",
    triggerHook: 0.8,
    reverse: false
  })
    .setClassToggle("#folclore-1", "fade-in")
    .addTo(controller);
  let folcloreImg2 = new ScrollMagic.Scene({
    triggerElement: "#folclore-2",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#folclore-2", "fade-in")
    .addTo(controller);
  let folcloreImg3 = new ScrollMagic.Scene({
    triggerElement: "#folclore-3",
    triggerHook: 0.6,
    reverse: false
  })
    .setClassToggle("#folclore-3", "fade-in")
    .addTo(controller);
  let folcloreImg4 = new ScrollMagic.Scene({
    triggerElement: "#folclore-4",
    triggerHook: 0.5,
    reverse: false
  })
    .setClassToggle("#folclore-4", "fade-in")
    .addTo(controller);
});
