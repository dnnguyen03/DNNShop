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
////header
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
