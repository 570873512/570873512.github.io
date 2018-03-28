
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay:2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',

    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }

});
//选项卡
var p1=document.querySelectorAll(".p1")[0];
var p2=document.querySelectorAll(".p2")[0];
var p3=document.querySelectorAll(".p3")[0];
var pic=document.querySelector(".pic");
var pic1=document.querySelector(".pic1");
var pic2=document.querySelector(".pic2");
function toggle1(){
  pic.style.display="block";
   pic1.style.display="none";
   pic2.style.display="none";
   p1.style.background="#b2020d";
    p2.style.background="#fff";
    p3.style.background="#fff";
    p1.style.color="#fff";
    p2.style.color="#000";
    p3.style.color="#000";
}
function toggle2(){
    pic.style.display="none";
    pic1.style.display="block";
    pic2.style.display="none";
    p1.style.background="#fff";
    p2.style.background="#b2020d";
    p3.style.background="#fff";
    p1.style.color="#000";
    p2.style.color="#fff";
    p3.style.color="#000";
}
function toggle3(){
    pic.style.display="none";
    pic1.style.display="none";
    pic2.style.display="block";
    p1.style.background="#fff";
    p2.style.background="#fff";
    p3.style.background="#b2020d";
    p1.style.color="#000";
    p2.style.color="#000";
    p3.style.color="#fff";
}
//鼠标经过特效
var l3=document.querySelectorAll(".l3");
var span3=document.querySelectorAll(".span3");
for(var i=0;i<l3.length;i++){
    l3[i].cc=i;
    l3[i].onmouseover=function(){
        for(var u=0;u<span3.length;u++){
           span3[u].style.display="block";
        };
        span3[this.cc].style.display="block";
    };
    l3[i].onmouseout=function(){
       span3[this.cc].style.display="none";
    }
}
//


