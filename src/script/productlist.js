!function ($) {
    $(document).ready(function () {
        $.ajax({
            url: 'http://localhost/xgimi/php/indexdata.php',
            dataType: 'json'
        }).done(function (data) {
            $('.product-box-left img').attr('src',data[0].url)
            for(let i =0;i<data.length;i++){
                console.log(data[i].url)
            }
            $.each(data, function (index, value) {
                $('h2 span').html(value.mtitle)
            });
        })
    })
}(jQuery);