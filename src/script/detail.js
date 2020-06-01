! function($) {
    //1.获取列表页传来的sid
    let $sid = location.search.substring(1).split('=')[1];

    const $smallpic = $('#smallpic');
    const $bpic = $('#bpic');
    const $title = $('.loadtitle');
    const $price = $('.loadpcp');

    //如果$sid不存在，默认$sid = 1
    if (!$sid) {
        $sid = 1;
    }

    //2.将sid传给后端
    $.ajax({
        url: 'http://localhost/project/php/getsid.php',
        data: {
            sid: $sid
        },
        dataType: 'json'
    }).done(function(d) {
        console.log(d);
        $smallpic.attr('src', d.url);
        $smallpic.attr('sid', d.sid); //给图片添加唯一的sid
        $bpic.attr('src', d.url);
        $title.html(d.title);
        $price.html(d.price);
        console.log(d.piclisturl.split(','));
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
            let $leftvalue = ev.pageX - $('.goodsinfo').offset().left - $sf.width() / 2;
            let $topvalue = ev.pageY - $('.goodsinfo').offset().top - $sf.height() / 2;
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
        $smallpic.attr('src', $imgurl);
        $bpic.attr('src', $imgurl);
    });

    //左右箭头事件
    let $num = 6; //列表显示的图片个数
    $right.on('click', function() {
        let $lists = $('#list ul li');
        if ($lists.size() > $num) { //限制点击的条件
            $num++;
            $left.css('color', '#333');
            if ($lists.size() == $num) {
                $right.css('color', '#fff');
            }
            $('#list ul').animate({
                left: -($num - 6) * $lists.eq(0).outerWidth(true)
            });
        }
    });


    $left.on('click', function() {
        let $lists = $('#list ul li');
        if ($num > 6) { //限制点击的条件
            $num--;
            $right.css('color', '#333');
            if ($num <= 6) {
                $left.css('color', '#fff');
            }
            $('#list ul').animate({
                left: -($num - 6) * $lists.eq(0).outerWidth(true)
            });
        }
    });

    //购物车的注意事项
    //1.购物车的核心存储什么：
    //商品的编号：
    //商品的数量：

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



    $('.p-btn a').on('click', function() {
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
        alert('按钮触发了');
    });




}(jQuery);