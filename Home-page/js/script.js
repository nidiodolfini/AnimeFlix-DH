

const carrossel = document.querySelector(".carrossel");
const carrossel2 = document.querySelector(".carrossel");
let button = 0;

function sliderDireita() {
  if (button === 0) {
    carrossel.style.cssText =
      "overflow: visible;" +
      "transform: translateX(-85vw);" +
      "transition: all 0.5s ease";
    button = 1;
  } else if (button == 1) {
    carrossel.style.cssText =
      "overflow: visible;" +
      "transform: translateX(0vw);" +
      "transition: all 0.5s ease";
    button = 0;
  }
}

function sliderEsquerda() {
  carrossel.style.cssText =
    "overflow: visible;" +
    "transform: translatex(0vw);" +
    "transition: all 0.5s ease";
  button = 0;
}