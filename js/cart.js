const phu = document.querySelector(".overlay-trogiup");
const support = document.querySelector(".support i");
function show() {
  document.querySelector(".trogiup").classList.toggle("hide");
  phu.classList.toggle("hide");
}
support.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    show();
  }
});
phu.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    show();
  }
});
/////'
const myInput = document.querySelectorAll(".my-input");
const btn = document.querySelectorAll(".list-product button");
btn.forEach((item, index) => {
  item.addEventListener("click", () => {
    let id = btn[index].getAttribute("id");
    let min = myInput[Math.floor(index / 2)].getAttribute("min");
    let max = myInput[Math.floor(index / 2)].getAttribute("max");
    let step = myInput[Math.floor(index / 2)].getAttribute("step");
    let val = myInput[Math.floor(index / 2)].getAttribute("value");
    let calcStep = id == "increment" ? step * 1 : step * -1;
    let newValue = parseInt(val) + calcStep;
    if (newValue >= min && newValue <= max) {
      myInput[Math.floor(index / 2)].setAttribute("value", newValue);
    }
  });
});
//menumobile
const suball = document.querySelectorAll(".submenu-mobile");
const labelElement = document.getElementsByClassName("next-submenu");
const labelElementtwo = document.getElementsByClassName("next-submenu-2");
const suballtwo = document.querySelectorAll(".submenu-mobile-3");
const [...rest] = labelElement;
rest.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < suball.length; i++) {
      suball[i].classList.add("hideb");
    }
    suball[index].classList.remove("hideb");
  });
});
const [...resttwo] = labelElementtwo;
resttwo.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < suballtwo.length; i++) {
      suballtwo[i].classList.add("hideb");
    }
    suballtwo[index].classList.remove("hideb");
  });
});
///hiden scroll menu
const openmenu = document.querySelector(".bars");
const closemenu1 = document.querySelector(".menu-overlay");
const closemenu2 = document.querySelector(".close-menu");
openmenu.addEventListener("click", () => {
  $("body").css({ position: "sticky", overflow: "hidden" });
});
closemenu1.addEventListener("click", () => {
  $("body").css({ position: "static", overflow: "auto" });
});
closemenu2.addEventListener("click", () => {
  $("body").css({ position: "static", overflow: "auto" });
});
