! function($) {
    // 引入头部尾部商品文件
    $(document).ready(function() {
        $("header").load("header.html");
        $("footer").load("footer.html");
        //1.获取列表页传来的sid
        let $sid = location.search.substring(1).split('=')[1];
        const $smallpic = $('#smallpic');
        const $bpic = $('#bpic');
        const $title = $('.loadtitle');
        const $price = $('.loadpcp');
        const $depict = $('.p-name p');
        //如果$sid不存在，默认$sid = 1
        if (!$sid) {
            $sid = 1;
        }
        //2.将sid传给后端
        $.ajax({
            url: 'http://localhost/xgimi/php/getsid.php',
            data: {
                sid: $sid
            },
            dataType: 'json'
        }).done(function(d) {
            $smallpic.attr('src', d.url);
            $smallpic.attr('sid', d.sid); //给图片添加唯一的sid
            $bpic.attr('src', d.url);
            $title.html(d.title);
            $price.html(d.price);
            $depict.html(d.depict);
            //渲染小图
            let picarr = d.piclisturl.split(',');
            let $strhtml = '';
            $.each(picarr, function(index, value) {
                $strhtml += '<li><img src="' + value + '"/>></li>';
            });
            $('#list ul').html($strhtml);
        });
        //3.放大镜效果
        const $spic = $('#spic');
        const $sf = $('#sf'); //小放
        const $bf = $('#bf'); //大放
        const $left = $('#left'); //左箭头
        const $right = $('#right'); //右箭头
        const $list = $('#list'); //小图列表
        //$spic 小图   $bpic 大图  

        //小放/大放=小图/大图
        $sf.width($spic.width() * $bf.width() / $bpic.width());
        $sf.height($spic.height() * $bf.height() / $bpic.height());
        let $bili = $bpic.width() / $spic.width(); //比例大于1 放大效果


        $spic.hover(function() {
            $sf.css('visibility', 'visible');
            $bf.css('visibility', 'visible');
            $(this).on('mousemove', function(ev) {
                let $leftvalue = ev.pageX - $('.wrap').offset().left - $sf.width() / 2;
                let $topvalue = ev.pageY - $('.wrap').offset().top - $sf.height() / 2;
                if ($leftvalue < 0) {
                    $leftvalue = 0;
                } else if ($leftvalue >= $spic.width() - $sf.width()) {
                    $leftvalue = $spic.width() - $sf.width()
                }

                if ($topvalue < 0) {
                    $topvalue = 0;
                } else if ($topvalue >= $spic.height() - $sf.height()) {
                    $topvalue = $spic.height() - $sf.height()
                }

                $sf.css({
                    left: $leftvalue,
                    top: $topvalue
                });

                $bpic.css({
                    left: -$leftvalue * $bili,
                    top: -$topvalue * $bili
                });

            });
        }, function() {
            $sf.css('visibility', 'hidden');
            $bf.css('visibility', 'hidden');
        });

        //小图切换
        $('#list ul').on('click', 'li', function() {
            //$(this):当前操作的li
            let $imgurl = $(this).find('img').attr('src');
            $smallpic.attr('src', $imgurl)
            $bpic.attr('src', $imgurl);
        });

        //左右箭头事件
        let $num = 3; //列表显示的图片个数
        $right.on('click', function() {
            let $lists = $('#list ul li');
            if ($lists.size() > $num) { //限制点击的条件
                $num++;
                $('#list ul').animate({
                    left: -($num - 3) * $lists.eq(0).outerWidth(true)
                });
            }
        });


        $left.on('click', function() {
            let $lists = $('#list ul li');
            if ($num > 3) { //限制点击的条件
                $num--;
                $('#list ul').animate({
                    left: -($num - 3) * $lists.eq(0).outerWidth(true)
                });
            }
        });

        //购物车的注意事项
        //1.购物车的核心存储什么：
        //商品的编号：
        //商品的数量：
        // 减
        $('.del').click(function() {
                $('#count').val(parseInt($('#count').val()) - 1)
                if (parseInt($('#count').val()) <= 1) {
                    $('#count').val(1)
                }
            })
            // 加
        $('.add').click(function() {
                $('#count').val(parseInt($('#count').val()) + 1)
            })
            //2.怎么存储--数组
        let arrsid = []; //存储商品的编号。
        let arrnum = []; //存储商品的数量。
        //3.点击加入购物车按钮(确定是第一次点击还是多次点击)
        //第一次点击：在购物车列表页面创建商品列表
        //多次点击：之前创建过商品列表，只需要数量增加。

        //取出cookie,才能判断是第一次还是多次点击
        function cookietoarray() {
            if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                arrsid = $.cookie('cookiesid').split(','); //获取cookie 同时转换成数组。[1,2,3,4]
                arrnum = $.cookie('cookienum').split(','); //获取cookie 同时转换成数组。[12,13,14,15]
            } else {
                arrsid = [];
                arrnum = [];
            }
        }
        $('.hd-car').on('click', function() {
            //获取当前商品对应的sid
            let $sid = $(this).parents('.goodsinfo').find('#smallpic').attr('sid');
            //判断是第一次点击还是多次点击
            //多次点击
            //$.inArray(value,array,[fromIndex])
            //确定第一个参数在数组中的位置，从0开始计数(如果没有找到则返回 -1 )。
            cookietoarray();
            if ($.inArray($sid, arrsid) != -1) { //$sid存在，商品列表存在，数量累加
                //先取出cookie中存在的数量+当前添加的数量，一起添加到cookie中。
                let $num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('#count').val()); //取值
                arrnum[$.inArray($sid, arrsid)] = $num; //赋值
                $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
            } else {
                //第一次点击加入购物车按钮,将商品的sid和商品的数量放到提前准备的数组里面，然后将数组传入cookie.
                arrsid.push($sid); //将编号$sid push到arrsid数组中
                $.cookie('cookiesid', arrsid, { expires: 10, path: '/' });
                arrnum.push($('#count').val()); //将数量push到arrnum数组中
                $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
            }
            // 飞入购物车效果
            var offset = $(".sidebar-cart").offset();
            var img = $smallpic.attr('src');
            var flyer = $('<img class="u-flyer" src="' + img + '">');
            flyer.fly({
                start: {
                    left: $smallpic.offset().top, //开始位置（必填）#fly元素会被设置成position: fixed 
                    top: $smallpic.offset().left //开始位置（必填） 
                },
                end: {
                    left: offset.left + 10, //结束位置（必填） 
                    top: offset.top + 10, //结束位置（必填） 
                    width: 0, //结束时宽度 
                    height: 0 //结束时高度 
                },
                onEnd: function() { //结束回调 
                    $("#msg").show().animate({ width: '250px' }, 200).fadeOut(1000); //提示信息 
                    // addcar.css("cursor","default").removeClass('orange').unbind('click'); 
                    // this.destory(); //移除dom 
                }
            });
        });

    })

}(jQuery);