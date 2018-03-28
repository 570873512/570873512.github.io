/**
 * Created by lenovo on 17/10/9 009.
 */
window.onload = function () {

    var li = document.querySelectorAll("#nav li");
    var on=true;
    li[li.length - 1].onclick = function () {
        for (var i = 0; i < li.length; i++) {
            var n = i - li.length / 2;
            if(on){
              n=n*15;
            }else{
                n=360;
            }
            console.log(n);
            li[i].style.transform = "rotateZ(" + n + "deg)";
        }
        on=!on;
    }
};