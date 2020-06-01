!function ($) {
    //1.二级侧边栏效果
    let $menuli = $('.menu li');
    let $cartlist = $('.cartlist');
    let $items = $('.cartlist .item');

    $menuli.on('mouseover', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $cartlist.show();
        console.log($(window).scrollTop());
        console.log($('.banner').offset().top);


        if ($(window).scrollTop() > $('.banner').offset().top) {
            $cartlist.css({
                top: $(window).scrollTop() - $('.banner').offset().top
            })
        } else {
            $cartlist.css({
                top: 0
            })
        }
        $items.eq($(this).index()).show().siblings('.item').hide();
    });
    $menuli.on('mouseout', function () {
        $menuli.removeClass('active');
        $cartlist.hide();
    });
    $cartlist.on('mouseover', function () {
        $(this).show();
    });
    $cartlist.on('mouseout', function () {
        $(this).hide();
    });


    //2.根据本地存储，显示用户信息
    if (localStorage.getItem('username')) {
        $('.login').hide();
        $('.admin').show();
        $('.admin span').html(localStorage.getItem('username'));
    }

    $('.admin a').on('click', function () {
        $('.login').show();
        $('.admin').hide();
        localStorage.removeItem('username');
    });

}(jQuery);