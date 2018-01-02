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
////选项卡
var banner=document.querySelectorAll(".banner")[0];
var banner1=document.querySelectorAll(".banner1")[0];
var banner2=document.querySelectorAll(".banner2")[0];
function toggle1(){
    banner.style.display="block";
    banner1.style.display="none";
    banner2.style.display="none";
}
function toggle2(){
    banner.style.display="none";
    banner1.style.display="block";
    banner2.style.display="none";
}
function toggle3(){
    banner.style.display="none";
    banner1.style.display="none";
    banner2.style.display="block";
}