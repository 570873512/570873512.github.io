//点击下拉
function $(id){return document.getElementById(id)}
window.onload = function(){
    $("nav").onclick = function(e){
        var src = e?e.target:event.srcElement;
        if(src.tagName == "H4"){
            var next = src.nextElementSibling || src.nextSibling;
            next.style.display = (next.style.display =="block")?"none":"block";
        }
    }
};
//鼠标滑过下拉


//选项卡

var h41=document.querySelectorAll(".h41")[0];
var h42=document.querySelectorAll(".h42")[0];
var h43=document.querySelectorAll(".h43")[0];
var h44=document.querySelectorAll(".h44")[0];
var banner1=document.querySelector(".banner1");
var banner2=document.querySelector(".banner2");
var banner3=document.querySelector(".banner3");
var banner4=document.querySelector(".banner4");
function tegg1(){
    banner1.style.display="block";
    banner2.style.display="none";
    banner3.style.display="none";
    banner4.style.display="none";
}
function tegg2(){
    banner1.style.display="none";
    banner2.style.display="block";
    banner3.style.display="none";
    banner4.style.display="none";
}
function tegg3(){
    banner1.style.display="none";
    banner2.style.display="none";
    banner3.style.display="block";
    banner4.style.display="none";
}
function tegg4(){
    banner1.style.display="none";
    banner2.style.display="none";
    banner3.style.display="none";
    banner4.style.display="block";
}