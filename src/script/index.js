! function ($) {
    $(document).ready(function () {
        // 引入头部尾部商品文件
        $("header").load("header.html");
        $("footer").load("footer.html");
        $(".products").load("productlist.html");

        // 轮播
        var length,
            currentIndex = 0,
            interval,
            hasStarted = false,//轮播图是否开始
            t = 3000;//轮播时间
        let $wrap = $('.swiper-wrapper li')//图片
        let $spot = $('.swiper-pagination span')//小点
        length = $wrap.length;
        //将除了第一个其他li隐藏
        $('.swiper-wrapper li:not(:first)').hide();
        //给第一个圆点赋值激活
        $('swiper-pagination span:first').addClass('active');
        // 小圆点hover效果
        $spot.hover(function (e) {
            stop();
            var preIndex = $spot.filter(".active").index(); 
            currentIndex = $(this).index(); 
            play(preIndex, currentIndex);
        }, function () {
            start();
        });
        // 左右箭头
        $('.prev').click(function(){
            var preIndex = currentIndex;
            currentIndex = --currentIndex % length;
            play(preIndex, currentIndex);
        })
        $('.next').click(function(){
            next();
        })
        // 图片hover停止轮播
        $('.swiper-container').hover(function(){
            stop()
        },function(){
            start()
        })
        // 从preIndex页翻到currentIndex页
        // preIndex翻页的起始页
        // currentIndex整数，翻到的那页
        function play(preIndex, currentIndex) {
            $wrap.eq(preIndex).fadeOut(500).parent().children().eq(currentIndex).fadeIn(500);
            $spot.removeClass('active');
            $spot.eq(currentIndex).addClass('active');
        }
        // 自动向后翻页
        function next() {
            var preIndex = currentIndex;
            currentIndex = ++currentIndex % length;
            play(preIndex, currentIndex);
        }
        // 开始轮播
        function start() {
            if (!hasStarted) {
                hasStarted = true;
                interval = setInterval(next, t);
            }
        }
        //停止轮播
        function stop() {
            clearInterval(interval);
            hasStarted = false;
        }
        //开始轮播
        start();


    })
}(jQuery);