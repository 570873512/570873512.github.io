//文字滚动

var box=document.getElementById("div1"),can=true;
if(box !=null){
    box.innerHTML+=box.innerHTML;
    box.onmouseover=function(){can=false};
    box.onmouseout=function(){can=true};
    new function (){
        var stop=box.scrollTop%18==0&&!can;
        if(!stop)box.scrollTop==parseInt(box.scrollHeight/2)?box.scrollTop=0:box.scrollTop++;
        setTimeout(arguments.callee,box.scrollTop%18?10:1500);
    };
}
//时间倒计时
var interval = 1000;
function ShowCountDown(year,month,day,divname)
{
    var now = new Date();
    var endDate = new Date(year, month-1, day);
    var leftTime=endDate.getTime()-now.getTime();
    var leftsecond = parseInt(leftTime/1000);
//var day1=parseInt(leftsecond/(24*60*60*6));
    var day1=Math.floor(leftsecond/(60*60*24));
    var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
    var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
    var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
    var cc = document.getElementById(divname);
    if(inner!=null){
        cc.innerHTML =hour+":"+minute+":"+second;}
    window.setInterval(function(){ShowCountDown(2010,4,20,'divdown1');}, interval);


}
////选项卡1
var banner=document.querySelectorAll(".banner")[0];
var banner1=document.querySelectorAll(".banner1")[0];
var banner2=document.querySelectorAll(".banner2")[0];
var li1=document.querySelector(" .li1");
var li2=document.querySelector(".li2");
var li3=document.querySelector(".li3");
function toggle1(){
    banner.style.display="block";
    banner1.style.display="none";
    banner2.style.display="none";
    li1.style.color="#ff5c5c";
    li2.style.color="#000";
    li3.style.color="#000";
}
function toggle2(){
    banner.style.display="none";
    banner1.style.display="block";
    banner2.style.display="none";
    li2.style.color="#ff5c5c";
    li1.style.color="#000";
    li3.style.color="#000";
}
function toggle3(){
    banner.style.display="none";
    banner1.style.display="none";
    banner2.style.display="block";
    li3.style.color="#ff5c5c";
    li1.style.color="#000";
    li2.style.color="#000";
}
//swiper

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            direction: 'vertical',
            el: '.swiper-pagination',
            clickable: true
        }
    });


//////选项卡2
var qiehuan1=document.querySelector(".qh1");
var qiehuan2=document.querySelector(".qh2");
var qiehuan3=document.querySelector(".qh3");
var qiehuan4=document.querySelector(".qh4");
var xp1=document.querySelector(".xp1");
var xp2=document.querySelector(".xp2");
var xp3=document.querySelector(".xp3");
var xp4=document.querySelector(".xp4");
    function qh1(){
        qiehuan1.style.display="block";
        qiehuan2.style.display="none";
        qiehuan3.style.display="none";
        qiehuan4.style.display="none";
        xp1.style.color="#ff5c5c";
        xp2.style.color="#000";
        xp3.style.color="#000";
        xp4.style.color="#000";
    }
    function qh2(){
        qiehuan1.style.display="none";
        qiehuan2.style.display="block";
        qiehuan3.style.display="none";
        qiehuan4.style.display="none";
        xp1.style.color="#000";
        xp2.style.color="#ff5c5c";
        xp3.style.color="#000";
        xp4.style.color="#000";
    }
    function qh3(){
        qiehuan1.style.display="none";
        qiehuan2.style.display="none";
        qiehuan3.style.display="block";
        qiehuan4.style.display="none";
        xp1.style.color="#000";
        xp2.style.color="#000";
        xp3.style.color="#ff5c5c";
        xp4.style.color="#000";
    }
    function qh4(){
        qiehuan1.style.display="none";
        qiehuan2.style.display="none";
        qiehuan3.style.display="none";
        qiehuan4.style.display="block";
        xp1.style.color="#000";
        xp2.style.color="#000";
        xp3.style.color="#000";
        xp4.style.color="#ff5c5c";
    }

