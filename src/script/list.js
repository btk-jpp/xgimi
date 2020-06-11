! function($) {
    let array_default = []; //排序前的li数组
    let array = []; //排序中的数组
    let prev = null;
    let next = null;
    //引入头部尾部文件
    $(function() {
            $("header").load("header.html");
            $("footer").load("footer.html");
    })
    //渲染数据
    const $list = $('.list');
    $.get({
        url: 'http://localhost/xgimi/php/listdata.php',
        dataType: 'json'
    }).then(function(data) {
        let $strhtml = '<ul>';
        $.each(data, function(index, value) {
            $strhtml += `
                <li>
                    <a href="detail.html?sid=${value.sid}">
                        <p>
                            <img class="lazy" data-original="${value.url}" >
                        </p>
                        <p class="pname"> ${value.title} </p>
                        <p><b class="price"> ${value.price}</b><font>元</font></p>
                    </a>
                </li>
            `;
        });
        $strhtml += '</ul>';
        $list.html($strhtml);

        //添加懒加载
        $(function() {
            $("img.lazy").lazyload({ effect: "fadeIn" });
        });

        array_default = []; //排序前的li数组
        array = []; //排序中的数组
        prev = null;
        next = null;
        //将页面的li元素加载到两个数组中
        $('.list li').each(function(index, element) {
            array[index] = $(this);
            array_default[index] = $(this);
        });
    });
    //分页
    $('.page').pagination({
        pageCount: 3, //总的页数
        jump: true, //是否开启跳转到指定的页数，布尔值。
        coping: true, //是否开启首页和尾页，布尔值。
        prevContent: '<上一页',
        nextContent: '下一页>',
        callback: function(api) {
            // console.log(api.getCurrent()); //获取的页码给后端
            $.ajax({
                url: 'http://localhost/xgimi/php/listdata.php',
                data: {
                    page: api.getCurrent()
                },
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '<ul>';
                $.each(data, function(index, value) {
                    $strhtml += `
                <li>
                    <a href="detail.html?sid=${value.sid}">
                        <p>
                            <img src="${value.url}" >
                        </p>
                        <p class="pname"> ${value.title} </p>
                        <p><b class="price"> ${value.price}</b><font>元</font></p>
                    </a>
                </li>
                    `;
                });
                $strhtml += '</ul>';
                $list.html($strhtml);
                //li的排序
                array_default = []; 
                array = []; 
                prev = null;
                next = null;
                //将li放入两个数组中
                $('.list li').each(function(index, element) {
                    array[index] = $(this);
                    array_default[index] = $(this);
                });
            })
        }
    });

    //排序
    // 默认排序
    $('button').eq(0).on('click', function() {
        $.each(array_default, function(index, value) {
            $('.list ul').append(value);
        });
        return;
    });
    // 升序
    $('button').eq(1).on('click', function() {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                prev = parseFloat(array[j].find('.price').html());
                next = parseFloat(array[j + 1].find('.price').html());
                //通过价格的判断，li的位置。
                if (prev > next) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        $.each(array, function(index, value) {
            $('.list ul').append(value);
        });
    });
    // 降序
    $('button').eq(2).on('click', function() {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                prev = parseFloat(array[j].find('.price').html());
                next = parseFloat(array[j + 1].find('.price').html());
                if (prev < next) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        $.each(array, function(index, value) {
            $('.list ul').append(value);
        });
    })


}(jQuery);