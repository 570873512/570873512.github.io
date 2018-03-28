var swiper = new Swiper('.swiper-container', {
    loop:true,
    grabCursor:true,
    direction: 'vertical',
    //autoplay:{
    //    delay:7000,
    //    stopOnLastSlide:false,
    //    disableOnInteraction:true,
    //},
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // 如果需要前进后退按钮
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
//
//if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
//    (function(){
//        window.scrollReveal = new scrollReveal({reset: true});
//    })();
//}
