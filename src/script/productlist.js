! function($) {
    $(document).ready(function() {
        $.ajax({
            url: 'http://localhost/xgimi/php/indexdata.php',
            dataType: 'json'
        }).done(function(data) {
            let $productslist = ''
            $.each(data, function(i, v) {
                $('h2 span').html(v.mtitle)
                $('.product-box-left img').attr('src', v.url)
                $('.classify-bg .title').html(v.title)
                $('.classify-bg .info').html(v.description)
                $('.classify-bg .price').html(v.price)
                $productslist += `
                <li>
                <a href="javascript:;">
                    <div class="img-box">
                        <div class="img-cover">
                            <img src="${v.url}">
                        </div>
                        <div class="img-hover">
                            <img src="${v.urllisst}">
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
            $('.classify-products-list').append($productslist)
        })
    })
}(jQuery);