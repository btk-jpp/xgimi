!function ($) {
    const $menuLi1 = $('.nav-menu li:first a')
    const $main = $('.nav-main')
    $menuLi1.hover(function(){
        $main.show()
        $(this).css({
            "border-bottom": "1px solid #5e85f1",
            "color": "#5e85f1"
        })
    },function(){
        $main.hide()
        $(this).css({
            "border-bottom": "0px",
            "color" : "#585858"
        })
    })
    $main.hover(function(){
        $(this).show()
    },function(){
        $(this).hide()
    })
}(jQuery);