$(document).ready(function() {
  let controller = new ScrollMagic.Controller();

  let bgSobreMim = new ScrollMagic.Scene({
    triggerElement: "#bg-sobre-mim",
    triggerHook: 0.5,
    reverse: false
  })
    .setClassToggle("#bg-sobre-mim", "fade-in")
    .addTo(controller);
  let tituloSobreMim = new ScrollMagic.Scene({
    triggerElement: "#titulo-sobre-mim",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#titulo-sobre-mim", "fade-in")
    .addTo(controller);
  let descricaoSobreMim = new ScrollMagic.Scene({
    triggerElement: "#descricao-sobre-mim",
    triggerHook: 0.9,
    reverse: false
  })
    .setClassToggle("#descricao-sobre-mim", "fade-in")
    .addTo(controller);
});
