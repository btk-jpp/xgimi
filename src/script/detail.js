! function($) {
    // 引入头部尾部商品文件
    $(function() {
        $("header").load("header.html");
        $("footer").load("footer.html");
        //获取sid
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
        //将sid传给后端
        $.ajax({
            url: 'http://localhost/xgimi/php/getsid.php',
            data: {
                sid: $sid
            },
            dataType: 'json'
        }).done(function(d) {
            $smallpic.attr('src', d.url);
            $smallpic.attr('sid', d.sid); //给图片添加sid
            $bpic.attr('src', d.url);
            $title.html(d.title);
            $price.html(d.price);
            $depict.html(d.depict);
            //小图
            let picarr = d.piclisturl.split(',');
            let $strhtml = '';
            $.each(picarr, function(index, value) {
                $strhtml += '<li><img src="' + value + '"/>></li>';
            });
            $('#list ul').html($strhtml);
        });
        //放大镜效果
        const $spic = $('#spic');//小图
        const $sf = $('#sf'); //小放
        const $bf = $('#bf'); //大放
        const $left = $('#left'); //左箭头
        const $right = $('#right'); //右箭头
        const $list = $('#list'); //小图列表

        //小放的尺寸
        $sf.width($spic.width() * $bf.width() / $bpic.width());
        $sf.height($spic.height() * $bf.height() / $bpic.height());
        //比例
        let $bili = $bpic.width() / $spic.width(); 
        //小图hover
        $spic.hover(function() {
            $sf.css('visibility', 'visible');
            $bf.css('visibility', 'visible');
            $(this).on('mousemove', function(ev) {
                // 小放的位置=的鼠标在页面的位置-外面框的位置-小放的一半
                let $leftvalue = ev.pageX - $('.wrap').offset().left - $sf.width() / 2;
                let $topvalue = ev.pageY - $('.wrap').offset().top - $sf.height() / 2;
                //边界管理
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
                //大图的位置：-小放的位置 *比例
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
            // 利用事件委托找到当前点击的图片将路径赋值给小图和大图
            let $imgurl = $(this).find('img').attr('src');
            $smallpic.attr('src', $imgurl)
            $bpic.attr('src', $imgurl);
        });

        //左右箭头事件
        let $num = 3; //原始显示图片个数
        $right.on('click', function() {
            let $lists = $('#list ul li');
            if ($lists.length > $num) { //限制点击的条件
                $num++;
                $('#list ul').animate({
                    // let每次都移动一张图片的宽度
                    left: -($num - 3) * $lists.eq(0).outerWidth(true)
                });
            }
        });
        // 与right同理
        $left.on('click', function() {
            let $lists = $('#list ul li');
            if ($num > 3) { 
                $num--;
                $('#list ul').animate({
                    left: -($num - 3) * $lists.eq(0).outerWidth(true)
                });
            }
        });
        //操作cookie在购物车显示信息
        // 减
        $('.del').click(function() {
                $('#count').val(parseInt($('#count').val())-1)
                // 限制数量
                if (parseInt($('#count').val()) <= 1) {
                    $('#count').val(1)
                }
        })
        // 加
        $('.add').click(function() {
                $('#count').val(parseInt($('#count').val()) + 1)
        })
        
        let arrsid = []; //存储商品的编号。
        let arrnum = []; //存储商品的数量。
        //获取cookie判断是第一次还是多次点击
        function cookietoarray() {
            if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                arrsid = $.cookie('cookiesid').split(','); //获取cookie中的商品id
                arrnum = $.cookie('cookienum').split(','); //获取cookie中的商品数量
            } else {
                arrsid = [];
                arrnum = [];
            }
        }
        //加入购物车
        $('.hd-car').on('click', function() {
            //找到给小图设置的sid
            let $sid = $(this).parents('.goodsinfo').find('#smallpic').attr('sid');
            cookietoarray();
            // 判断当前的商品的sid的位置是否存在
            if ($.inArray($sid, arrsid) != -1) { 
                let $num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('#count').val()); 
                //取当前商品的数量
                arrnum[$.inArray($sid, arrsid)] = $num; 
                //赋值到cookie中
                $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
            } else {
                //如果是第一次加入购物车.
                arrsid.push($sid); //将编号id放入cookie数组中
                $.cookie('cookiesid', arrsid, { expires: 10, path: '/' });
                arrnum.push($('#count').val()); //将数量放到arrnum数组中
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