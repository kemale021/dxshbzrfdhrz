var next=document.getElementById("next")
var prev=document.getElementById("prev")
var slider=document.querySelector(".slider ul")
var nihat=0;
next.onclick=function(){
    nihat++;
if(nihat==slider.querySelectorAll("li").length){
 nihat=0;
}
slider.style.left=(-800*nihat)+"px"

}

prev.onclick=function(){
    nihat--;
    if(nihat==-1){
        nihat=slider.querySelectorAll("li").length-1
       }
    slider.style.left=(-800*nihat)+"px"
}   