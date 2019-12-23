$(document).ready(function() {
  let controller = new ScrollMagic.Controller();

  let bgContato = new ScrollMagic.Scene({
    triggerElement: "#bg-contato",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#bg-contato", "fade-in")
    .addTo(controller);
  let tituloContato = new ScrollMagic.Scene({
    triggerElement: "#titulo-contato",
    triggerHook: 0.9,
    reverse: false
  })
    .setClassToggle("#titulo-contato", "fade-in")
    .addTo(controller);

  // Form
  let inputNome = new ScrollMagic.Scene({
    triggerElement: "#nome",
    triggerHook: 0.8,
    reverse: false
  })
    .setClassToggle("#nome", "fade-in")
    .addTo(controller);
  let inputEmail = new ScrollMagic.Scene({
    triggerElement: "#email",
    triggerHook: 0.8,
    reverse: false
  })
    .setClassToggle("#email", "fade-in")
    .addTo(controller);
  let inputAssunto = new ScrollMagic.Scene({
    triggerElement: "#assunto",
    triggerHook: 0.8,
    reverse: false
  })
    .setClassToggle("#assunto", "fade-in")
    .addTo(controller);
  let inputMensagem = new ScrollMagic.Scene({
    triggerElement: "#mensagem",
    triggerHook: 0.8,
    reverse: false
  })
    .setClassToggle("#mensagem", "fade-in")
    .addTo(controller);
});
