

//

var tt1=document.querySelectorAll(".Pp1")[0];
var tt2=document.querySelectorAll(".Pp2")[0];
var tt3=document.querySelectorAll(".Pp3")[0];
var mainRight=document.querySelector(".mainRight");
var mainRight1=document.querySelector(".mainRight1");
var mainRight2=document.querySelector(".mainRight12");
function t1(){
    mainRight.style.display="block";
    mainRight1.style.display="none";
    mainRight2.style.display="none";
    tt1.style.color="#b2020d";
    tt2.style.color="#000";
    tt3.style.color="#000";
}
function t2(){
    mainRight.style.display="none";
    mainRight1.style.display="block";
    mainRight2.style.display="none";
    tt1.style.color="#000";
    tt2.style.color="#b2020d";
   tt3.style.color="#000";
}

//swiper
var swiper = new Swiper('.swiper-container', {
    loop:true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});