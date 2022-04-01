

const carousel = document.querySelector(".carousel");

let button = 0;

function sliderDireita() {
  if (button === 0) {
    carousel.style.cssText =
      "overflow: visible;" +
      "transform: translateX(-85vw);" +
      "transition: all 0.5s ease";
    button = 1;
  } else if (button == 1) {
    carousel.style.cssText =
      "overflow: visible;" +
      "transform: translateX(0vw);" +
      "transition: all 0.5s ease";
    button = 0;
  }
}

function sliderEsquerda() {
  carousel.style.cssText =
    "overflow: visible;" +
    "transform: translatex(0vw);" +
    "transition: all 0.5s ease";
  button = 0;
}