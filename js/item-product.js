$(".imgProd").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".imgsilde",
});
$(".imgsilde").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: ".imgProd",
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  draggable: true,
});
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
////////////
const size = document.querySelectorAll(".tableSize div");
const color = document.querySelectorAll(".tableColor span");
size.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < size.length; i++) {
      size[i].classList.remove("active-size");
    }
    size[index].classList.add("active-size");
  });
});
color.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < color.length; i++) {
      color[i].classList.remove("active-color");
    }
    color[index].classList.add("active-color");
  });
});
/////'
const myInput = document.getElementById("my-input");
function stepper(btn) {
  let id = btn.getAttribute("id");
  let min = myInput.getAttribute("min");
  let max = myInput.getAttribute("max");
  let step = myInput.getAttribute("step");
  let val = myInput.getAttribute("value");
  let calcStep = id == "increment" ? step * 1 : step * -1;
  let newValue = parseInt(val) + calcStep;
  if (newValue >= min && newValue <= max) {
    myInput.setAttribute("value", newValue);
  }
}
////////
const tabItem = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
console.log(tabContent, tabItem);
tabItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < tabItem.length; i++) {
      tabItem[i].classList.remove("active-detailProd");
      tabContent[i].classList.add("hideContent");
    }
    tabItem[index].classList.add("active-detailProd");
    tabContent[index].classList.remove("hideContent");
  });
});
