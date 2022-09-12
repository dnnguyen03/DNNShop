const support = document.querySelector(".support i");
const phu = document.querySelector(".phu");
const imgset = document.querySelectorAll(".slide img");
const imgSlide = document.querySelector(".slide")
const prevSlide = document.querySelector(".arrow-left i");
const nextSlide = document.querySelector(".arrow-right i");
const dotItem = document.querySelectorAll(".dot");
const prevHotProduct = document.querySelector(".leftproduct i");
const nextHotProduct = document.querySelector(".rightproduct i");
const listproduct = document.querySelector(".list-product")
var width = listproduct.getBoundingClientRect().width;
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
nextSlide.addEventListener("click",()=>
{
    index++;
    if(index>=imgset.length) {index=imgset.length-1;}
    slide(index);
})
prevSlide.addEventListener("click",()=>
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
///Hot product
sum = 0;
x=600;
nextHotProduct.addEventListener("click",()=>{
    if(sum==width-1500)
    {
        listproduct.style.left = 0;
        sum=0;
        return;
    }
    sum+=x;
    console.log(sum);
    if(sum>width-1500)
    {
        sum=width-1500;
        listproduct.style.left = "-"+(sum-300)+"px";
        return;
    }
    listproduct.style.left = "-"+sum+"px";
})
prevHotProduct.addEventListener("click",()=>{
    sum-=x;
    if(sum<0)
    {
        listproduct.style.left = 0;
        sum=0;
        return;
    }
    listproduct.style.left = "-"+sum+"px";
})