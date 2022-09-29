function responHeader(x) {
  if (x.matches) {
    document.querySelector(".header").style.transform = "translateY(-69px)";
  } else {
    document.querySelector(".header").style.transform = "translateY(-100px)";
  }
}
////header
var prevScrollpos = window.pageYOffset;
var x = window.matchMedia("(max-width: 739px)");
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.transform = "translateY(0)";
    document.querySelector(".filter-by-side").style.transform = "translateY(0)";
  } else {
    responHeader(x);
    document.querySelector(".filter-by-side").style.transform =
      "translateY(-100px)";
    document.querySelector(".trogiup").classList.add("hide");
    phu.classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
};
/////
const support = document.querySelector(".support i");
const phu = document.querySelector(".phu");
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
const subfilter = document.querySelectorAll(".sub-filter");
const select = document.querySelectorAll(".select");
const iconfilter = document.querySelectorAll(".icon-down i");
console.log(iconfilter);
select.forEach((item, index) => {
  item.addEventListener("click", () => {
    iconfilter[index].classList.toggle("rotate180");
    // subfilter[index].classList.toggle("sub-filter-open");
  });
});
const size = document.querySelectorAll(".size ul li");
const color = document.querySelectorAll(".sub-filter-color span");
size.forEach((item, index) => {
  item.addEventListener("click", () => {
    size[index].classList.toggle("active-size");
  });
});
color.forEach((item, index) => {
  item.addEventListener("click", () => {
    color[index].classList.toggle("active-color");
  });
});
//////////
const rangeInput = document.querySelectorAll(".range-input input");
priceInput = document.querySelectorAll(".price-number input");
progress = document.querySelector(".price-slider .progress");
let priceGap = 500000;

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className == "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(priceInput[0].value);
    maxVal = parseInt(priceInput[1].value);
    if (maxVal - minVal >= priceGap && maxVal <= 5000000) {
      if (e.target.className == "input-min") {
        rangeInput[0].value = minVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxVal;
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});
////////
