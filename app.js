const slider = document.querySelector(".slider");
const przed = document.querySelector(".pudlo-przed");
const po = document.querySelector(".pudlo-po");
const pudlo = document.querySelector(".pudlo");

const ruszSie = (e)=>{
let xPozycja = e.layerX;
po.style.width= xPozycja + "px";
slider.style.left = xPozycja + "px";
};

pudlo.addEventListener('mousemove',ruszSie);
