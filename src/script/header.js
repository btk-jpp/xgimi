! function($) {
    const $menuLi1 = $('.nav-menu li:first a')
    const $main = $('.nav-main')
    // 获取本地用户
    let username =localStorage.getItem('username')
    if(username){
        $('.user-show').css({'display':'none'})
        $('.user-hide').css({'display':'block'})
        $('.user-hide span').html(username);
    }
    // 退出按钮
    $('.user-hide a').click(function(){
        window.localStorage.removeItem('username');
        $('.user-show').css({'display':'block'})
        $('.user-hide').css({'display':'none'})
    })
    // 回到顶部按钮
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
        $(".sidebar-top").fadeIn(200);
        } else {
        $(".sidebar-top").fadeOut(200);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $(".sidebar-top").click(function() {
        $('body,html').animate({
        scrollTop: 0
        },
        500);
        return false;
    });
    // 激光电视滑动效果
    $menuLi1.hover(function() {
        $main.slideToggle("normal")
        $(this).css({
            "border-bottom": "1px solid #5e85f1",
            "color": "#5e85f1"
        })
    }, function() {
        $main.hide()
        $(this).css({
            "border-bottom": "0px",
            "color": "#585858"
        })
    })
    $main.hover(function() {
        $menuLi1.css({
            "border-bottom": "1px solid #5e85f1",
            "color": "#5e85f1"
        })
        $(this).show()
    }, function() {
        $menuLi1.css({
            "border-bottom": "0px",
            "color": "#585858"
        })
        $(this).slideToggle("normal")
    })
    // 激光电视内部显示效果
    let $navLeft = $('.nav-left li')
    let $navRight = $('.nav-right .nav-box')
    let $nav_box_li = $('.nav-right li')
    $navLeft.hover(function(){
        $(this).children().css({'color': '#428bca'}).parent().siblings('li').find('a').css({'color': '#333'})
        $navRight.eq($(this).index()).show().siblings('.nav-box').hide()
    })
    // 跳转到列表页
    $nav_box_li.click(function(){
        location.href = "list.html"
    })
    // 家用娱乐
    const $menuLi = $('.nav-menu li:not(li:first)')
    const $nav_menu_list = $('.nav-menu-main .nav-menu-list')
    $menuLi.hover(function(){
        $nav_menu_list.eq($(this).index()).stop().slideToggle().siblings('.nav-menu-list').hide()
        $nav_menu_list.eq($(this).index()).children('ul').animate({right:+20}, "slow")
        
    },function(){
        $nav_menu_list.eq($(this).index()).stop().slideToggle().siblings('.nav-menu-list').hide()
    })
}(jQuery);