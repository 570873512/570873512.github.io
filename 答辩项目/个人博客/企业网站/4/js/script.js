var pp1=document.querySelectorAll(".Pp1")[0];
var pp2=document.querySelectorAll(".Pp2")[0];
var mainRight=document.querySelector(".mainRight");
var mainRight1=document.querySelector(".mainRight1");
function x1(){
    mainRight.style.display="block";
    mainRight1.style.display="none";
    pp1.style.color="#b2020d";
    pp2.style.color="#000";
}
function x2(){
    mainRight.style.display="none";
    mainRight1.style.display="block";
    pp1.style.color="#000";
    pp2.style.color="#b2020d";
}