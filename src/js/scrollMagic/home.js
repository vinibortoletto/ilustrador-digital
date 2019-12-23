$(document).ready(function() {
  let controller = new ScrollMagic.Controller();

  let pinHomeScene = new ScrollMagic.Scene({
    triggerElement: "#home",
    triggerHook: 0
  })
    .setPin("#home")
    .addTo(controller);
});
