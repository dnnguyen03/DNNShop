const support = document.querySelector(".support i");
const phu = document.querySelector(".phu");
// const imgset = document.querySelectorAll(".slide img");
// const imgSlide = document.querySelector(".slide");
// const prevSlide = document.querySelector(".arrow-left i");
// const nextSlide = document.querySelector(".arrow-right i");
// const dotItem = document.querySelectorAll(".dot");
// const prevHotProduct = document.querySelector(".leftproduct i");
// const nextHotProduct = document.querySelector(".rightproduct i");
// const listproduct = document.querySelector(".list-product");
const suball = document.querySelectorAll(".submenu-mobile");
const labelElement = document.getElementsByClassName("next-submenu");
const labelElementtwo = document.getElementsByClassName("next-submenu-2");
const suballtwo = document.querySelectorAll(".submenu-mobile-3");

////click->show
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
////

//handle
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

///slide
// function slide(index) {
//   imgSlide.style.left = "-" + index * 100 + "%";
//   const dotActive = document.querySelector(".active");
//   dotActive.classList.remove("active");
//   dotItem[index].classList.add("active");
// }
// let index = 0;
// imgset.forEach(function (image, index) {
//   image.style.left = index * 100 + "%";
//   dotItem[index].addEventListener("click", () => {
//     slide(index);
//   });
// });
// setInterval(function () {
//   index++;
//   if (index >= imgset.length) {
//     index = 0;
//   }
//   slide(index);
// }, 8000);
// nextSlide.addEventListener("click", () => {
//   index++;
//   if (index >= imgset.length) {
//     index = imgset.length - 1;
//   }
//   slide(index);
// });
// prevSlide.addEventListener("click", () => {
//   index--;
//   if (index <= 0) {
//     index = 0;
//   }
//   slide(index);
// });
$(document).ready(function () {
  $(".slide").slick({
    dots: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          infinite: false,
        },
      },
    ],
  });
});

////header
function responHeader(x) {
  if (x.matches) {
    document.querySelector(".header").style.transform = "translateY(-69px)";
  } else {
    document.querySelector(".header").style.transform = "translateY(-100px)";
  }
}
var prevScrollpos = window.pageYOffset;
var x = window.matchMedia("(max-width: 739px)");
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.transform = "translateY(0)";
  } else {
    responHeader(x);
    document.querySelector(".trogiup").classList.add("hide");
    phu.classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
};
///Hot product
$(document).ready(function () {
  $(".list-product").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    draggable: false,
    prevArrow: $(".leftproduct"),
    nextArrow: $(".rightproduct"),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          draggable: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          draggable: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1289,
        settings: {
          draggable: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          arrows: true,
        },
      },
    ],
  });
});
