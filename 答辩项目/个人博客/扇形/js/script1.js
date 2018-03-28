/**
 * Created by lenovo on 17/10/10 010.
 */
//window.onload = function () {
//    var li = document.querySelectorAll("#nav li");
//    var o = true;
//    li[li.length - 1].onclick = function () {
//        for (var i = 0; i < li.length; i++) {
//            //i: 0    1     2     3      4     5    6     7    8     9    10   11
//            //n:-6   -5    -4    -3     -2    -1    0     1    2     3    4    5
//            // deg度:-90  -75   -60   -45    -30   -15   0     15   30    45   60   75
//            var n = i - li.length / 2;
//            if (o) {
//                n = n * 15;
//            } else {
//                n = 360;
//            }
//            li[i].style.transform = "rotateZ(" + n + "deg)";
//        }
//        o = !o;
//    };
//    for (var i = 0; i < li.length - 1; i++) {
//        li[i].index = i;
//        li[i].onclick = function () {
//            //当前点击的导航，旋转至度；
//            this.style.transform = "rotate(0deg)";
//            //当前点击的左边的导航依次旋转
//            console.log(this.index);
//            var leftDeg = 0;
//            for (var i = this.index - 1; i >= 0; i--) {
//                leftDeg = leftDeg - 15;
//                li[i].style.transform = "rotate(" + leftDeg + "deg)";
//            }
//            //当前点击的右边的元素
//            var rightDeg = 15;
//            for (var i = this.index + 1; i < li.length; i++) {
//                rightDeg = rightDeg + 15;
//                li[i].style.transform = "rotate(" + rightDeg + "deg)";
//            }
//
//        }
//    }
//
//
//};




window.onload = function () {
    var li = document.querySelectorAll("#nav li");
    var o = true;
    li[li.length - 1].onclick = function () {
        for (var i = 0; i<li.length; i++) {
            var n = i - li.length / 2;
            if (o) {
                n = n * 15;
            } else {
                n = 360;
            }
            li[i].style.transform = "rotateZ(" + n + "deg)";
        }
        o = !o;
    };
    for (var i = 0; i < li.length - 1; i++) {
        li[i].index = i;
        li[i].onclick = function () {
            this.style.transform = "rotate(0deg)";
            console.log(this.index);
            var leftDeg = 0;
            for (var i = this.index - 1; i >= 0; i--) {
                leftDeg = leftDeg - 15;
                li[i].style.transform = "rotate(" + leftDeg + "deg)"
            }
            var rightDeg = 15;
            for (var i = this.index + 1; i < li.length; i++) {
                rightDeg = rightDeg + 15;
                li[i].style.transform = "rotate(" + rightDeg + "deg)"
            }
        }
    }
};
