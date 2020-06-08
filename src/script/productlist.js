! function($) {
    $.ajax({
        url: 'http://localhost/xgimi/php/indexdata.php',
        dataType: 'json'
    }).done(function(data) {
        // 激光电视
        let data1 = data.data1
        let $productslist = ''
        $.each(data1, function(i, v) {
            $('.li1 h2 span').html(v.mtitle)
            $('.li1 .product-box-left img').attr('src', v.url)
            $('.li1 .classify-bg .title').html(v.title)
            $('.li1 .classify-bg .info').html(v.description)
            $('.li1 .classify-bg .price').html(v.price)
            $productslist += `
                <li>
                <a href="javascript:;">
                    <div class="img-box">
                        <div class="img-cover">
                            <img class="lazy" data-original="${v.url}">
                        </div>
                        <div class="img-hover">
                            <img src="${v.urllist}">
                        </div>
                    </div>
                    <div class="new-products-title">
                        ${v.title}
                    </div>
                    <div class="new-products-info">
                        ${v.description}
                    </div>
                    <div class="new-products-price">
                        ${v.price}</div>
                </a>
            </li>
                `
        })
        $('.li1 .classify-products-list').append($productslist)
        // 家用电视
        let data2 = data.data2
        let $productslist2 = ''
        $('.li2 .classify-bg').css({'background':'url(https://file02.xgimi.com/official/admin/20190813/2019081315223370224.jpg)'})
        $.each(data2, function(i, v) {
            $('.li2 h2 span').html(v.mtitle)
            $('.li2 .product-box-left img').attr('src', v.url)
            $('.li2 .classify-bg .title').html(v.title)
            $('.li2 .classify-bg .info').html(v.description)
            $('.li2 .classify-bg .price').html(v.price)
            $productslist2 += `
                <li>
                <a href="javascript:;">
                    <div class="img-box">
                        <div class="img-cover">
                            <img class="lazy" data-original="${v.url}">
                        </div>
                        <div class="img-hover">
                            <img src="${v.urllist}">
                        </div>
                    </div>
                    <div class="new-products-title">
                        ${v.title}
                    </div>
                    <div class="new-products-info">
                        ${v.description}
                    </div>
                    <div class="new-products-price">
                        ${v.price}</div>
                </a>
            </li>
                `
        })
        $('.li2 .classify-products-list').append($productslist2)
        //添加懒加载
        $('.img-box').hover(function(){
            $(this).find('.img-cover').hide()
            $(this).find('.img-hover').show()
        },function(){
            $(this).find('.img-cover').show()
            $(this).find('.img-hover').hide()
        })
        $(function() {
            $(".lazy").lazyload({ effect: "fadeIn" });
        });
    })
}(jQuery);