$(document).ready(function() {
  let controller = new ScrollMagic.Controller();

  let bgSobreMim = new ScrollMagic.Scene({
    triggerElement: "#bg-sobre-mim",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#bg-sobre-mim", "fade-in")
    .addTo(controller);
  let tituloSobreMim = new ScrollMagic.Scene({
    triggerElement: "#title-sobre-mim",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#title-sobre-mim", "fade-in")
    .addTo(controller);
  let descricaoSobreMim = new ScrollMagic.Scene({
    triggerElement: "#description-sobre-mim",
    triggerHook: 0.9,
    reverse: false
  })
    .setClassToggle("#description-sobre-mim", "fade-in")
    .addTo(controller);
});
