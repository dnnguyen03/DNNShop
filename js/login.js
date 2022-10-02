const support = document.querySelector(".support i");
const phu = document.querySelector(".overlay-trogiup");
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
/////submenu
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
// ---------------ShowPassWord-----------------
var password = false;
const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");
const inputSignIn = document.getElementById("input-signin-password");
function ShowPass(input) {
  if (password) {
    input.setAttribute("type", "password");
    eye1.style.display = "block";
    eye2.style.display = "none";
    password = false;
  } else {
    input.setAttribute("type", "text");
    eye1.style.display = "none";
    eye2.style.display = "block";
    password = true;
  }
}
document.querySelector(".eye-signin").addEventListener("click", () => {
  ShowPass(inputSignIn);
});
///birthday
flatpickr("#birthday-signup", {
  dateFormat: "d-m-Y",
});
/////////
const login = document.querySelectorAll(".next-login");
const signin = document.querySelector(".signin");
const signup = document.querySelector(".signup");
const resetpass = document.querySelector(".reset-password");
login.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.innerHTML == "Đăng ký") {
      signin.classList.add("hide-login");
      resetpass.classList.add("hide-login");
      signup.classList.remove("hide-login");
    }
    if (item.innerHTML == "Đăng nhập") {
      signup.classList.add("hide-login");
      resetpass.classList.add("hide-login");
      signin.classList.remove("hide-login");
    }
    if (item.innerHTML == "Quên mật khẩu ?") {
      signup.classList.add("hide-login");
      signin.classList.add("hide-login");
      resetpass.classList.remove("hide-login");
    }
  });
});
