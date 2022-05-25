import { temporada1, temporada2, temporada3 } from "./data.js";
const carousel = document.querySelector(".carousel");
const temp1 = document.querySelector(".temp1");
const temp2 = document.querySelector(".temp2");
const temp3 = document.querySelector(".temp3");
const botaoNext = document.querySelector(".botao-next");
const botaoBack = document.querySelector(".botao-back");

function carrossel() {
  temporada1.map((element) => {
    var x = document.createElement("IMG");
    x.setAttribute("src", element.img);
    const node = document.createElement("div");
    const title = document.createElement("h4");
    const texTitle = document.createTextNode(element.nome);
    const desc = document.createElement("p");
    const texDesc = document.createTextNode("Descrição");

    x.className = element.class;
    node.className = element.caixaID;

    node.appendChild(x);
    title.appendChild(texTitle);
    node.appendChild(title);
    carousel.appendChild(node);
    desc.appendChild(texDesc);
    node.appendChild(desc);

    x.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 600,
    });
  });
}

carrossel();
temp1.addEventListener("click", carrosselTemp1);

function carrosselTemp1() {
  temp1.style.fontWeight = "700";
  temp2.style.fontWeight = "400";
  temp3.style.fontWeight = "400";
  temp1.style.color = "#E05273";
  temp2.style.color = "white";
  temp3.style.color = "white";


  temporada1.map((element) => {
    let img = document.querySelector(element.id);
    img.setAttribute("src", element.img);

    img.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 600,
    });
  });
}

function carrosselTemp2() {

  temp1.style.fontWeight = "400";
  temp2.style.fontWeight = "700";
  temp3.style.fontWeight = "400";
  temp1.style.color = "white";
  temp2.style.color = "#E05273";
  temp3.style.color = "white";

  temporada2.map((element) => {
    let img = document.querySelector(element.class);
    img.setAttribute("src", element.img);

    img.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 600,
    });
  });
}

temp2.addEventListener("click", carrosselTemp2);

function carrosselTemp3() {

  temp1.style.fontWeight = "400";
  temp2.style.fontWeight = "400";
  temp3.style.fontWeight = "700";
  temp1.style.color = "white";
  temp2.style.color = "white";
  temp3.style.color = "#E05273";

  temporada3.map((element) => {
    let img = document.querySelector(element.class);
    img.setAttribute("src", element.img);

    img.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 600,
    });
  });
}

temp3.addEventListener("click", carrosselTemp3);

function sliderDireita() {
  carousel.scrollBy({
    top: 0,
    left: 390,
    behavior: "smooth",
  });
}

botaoNext.addEventListener("click", sliderDireita);

function sliderEsquerda() {
  carousel.scrollBy({
    top: 0,
    left: -390,
    behavior: "smooth",
  });
}

botaoBack.addEventListener("click", sliderEsquerda);

function playBg() {
  temporada1.map((element) => {
    const caixa = document.querySelector(element.caixaIDHover);

    var x = document.createElement("IMG");
    x.setAttribute("src", element.hover);

    x.className = "play";

    caixa.appendChild(x);

    x.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 600,
    });
  });
}

playBg();
