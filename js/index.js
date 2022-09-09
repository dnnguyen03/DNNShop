const support = document.querySelector(".support i");
const phu = document.querySelector(".phu");
const imgset = document.querySelectorAll(".slide img");
const imgSlide = document.querySelector(".slide")
const prev = document.querySelector(".arrow-left i");
const next = document.querySelector(".arrow-right i");
const dotItem = document.querySelectorAll(".dot");
////click->show
function show(){
    document.querySelector(".trogiup").classList.toggle("hide");
    phu.classList.toggle("hide");
}
support.addEventListener("click",(e)=>
{
    if(e.target == e.currentTarget){
        show();    
    };
});
phu.addEventListener("click",(e)=>
{
    if(e.target == e.currentTarget){
        show();    
    };
});
///slide
function slide(index){
    imgSlide.style.left ="-"+index*100+"%";
    const dotActive = document.querySelector(".active");
    dotActive.classList.remove("active");
    dotItem[index].classList.add("active");
}
let index = 0;
imgset.forEach(function(image,index){
    image.style.left = index*100 + "%";
    dotItem[index].addEventListener("click",()=>{
        slide(index); 
    })
})
setInterval(function(){
    index++;
    if(index>=imgset.length) {index=0;}
    slide(index); 
}, 8000);
next.addEventListener("click",()=>
{
    index++;
    if(index>=imgset.length) {index=imgset.length-1;}
    slide(index);
})
prev.addEventListener("click",()=>
{
    index--;
    if(index<=0) {index=0;}
    slide(index);
})
////header
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}