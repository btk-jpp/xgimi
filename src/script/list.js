!function ($) {

    let array_default = [];//排序前的li数组
    let array = [];//排序中的数组
    let prev = null;
    let next = null;


    //1.渲染列表页的数据-默认渲染第一页
    const $list = $('.list');
    $.ajax({
        url: 'http://localhost/project/php/listdata.php',
        dataType: 'json'
    }).done(function (data) {
        let $strhtml = '<ul>';
        $.each(data, function (index, value) {
            $strhtml += `
                <li>
                    <a href="detail.html?sid=${value.sid}" target="_blank">
                        <img class="lazy" data-original="${value.url}" width="200" height="200"/>
                        <p>${value.sid}${value.title}</p>
                        <span class="price">￥${value.price}</span>
                        <span>${value.sailnumber}</span>
                    </a>
                </li>
            `;
        });
        $strhtml += '</ul>';
        $list.html($strhtml);

        //添加懒加载
        $(function () {
            $("img.lazy").lazyload({ effect: "fadeIn" });
        });

        array_default = [];//排序前的li数组
        array = [];//排序中的数组
        prev = null;
        next = null;
        //将页面的li元素加载到两个数组中
        $('.list li').each(function (index, element) {
            array[index] = $(this);
            array_default[index] = $(this);
        });
    });
    //渲染的外部无法获取内部的元素对象，通过事件委托实现。

    //2.分页思路
    //告知后端当前请求的是第几页数据。将当前的页面页码传递给后端(get和page)
    $('.page').pagination({
        pageCount: 3,//总的页数
        jump: true,//是否开启跳转到指定的页数，布尔值。
        coping: true,//是否开启首页和尾页，布尔值。
        prevContent: '上一页',
        nextContent: '下一页',
        homePage: '首页',
        endPage: '尾页',
        callback: function (api) {
            console.log(api.getCurrent());//获取的页码给后端
            $.ajax({
                url: 'http://localhost/project/php/listdata.php',
                data: {
                    page: api.getCurrent()
                },
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '<ul>';
                $.each(data, function (index, value) {
                    $strhtml += `
                        <li>
                            <a href="detail.html?sid=${value.sid}" target="_blank">
                                <img src="${value.url}"/>
                                <p>${value.sid}${value.title}</p>
                                <span class="price">￥${value.price}</span>
                                <span>${value.sailnumber}</span>
                            </a>
                        </li>
                    `;
                });
                $strhtml += '</ul>';
                $list.html($strhtml);

                array_default = [];//排序前的li数组
                array = [];//排序中的数组
                prev = null;
                next = null;

                //将页面的li元素加载到两个数组中
                $('.list li').each(function (index, element) {
                    array[index] = $(this);
                    array_default[index] = $(this);
                });
            })
        }
    });

    //3.排序

    $('button').eq(0).on('click', function () {
        $.each(array_default, function (index, value) {
            $('.list ul').append(value);
        });
        return;
    });
    $('button').eq(1).on('click', function () {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                prev = parseFloat(array[j].find('.price').html().substring(1));
                next = parseFloat(array[j + 1].find('.price').html().substring(1));
                //通过价格的判断，改变的是li的位置。
                if (prev > next) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        //清空原来的列表，将排序后的数据添加上去。
        //empty() : 删除匹配的元素集合中所有的子节点。
        // $('.list ul').empty();//清空原来的列表
        //这里能够省略empty
        //append在追加的时候，如果追加的是jquery的元素对象，而jquery元素对象在你追加的元素中存在，直接取出存在的元素，从后面追加。
        //如果追加的是内容结构，依然和appendChild一样，后面继续追加。
        $.each(array, function (index, value) {
            console.log(value);//n.fn.init [li, context: li]
            $('.list ul').append(value);
        });
    });
    $('button').eq(2).on('click', function () {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                prev = parseFloat(array[j].find('.price').html().substring(1));
                next = parseFloat(array[j + 1].find('.price').html().substring(1));
                //通过价格的判断，改变的是li的位置。
                if (prev < next) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        //清空原来的列表，将排序后的数据添加上去。
        //empty() : 删除匹配的元素集合中所有的子节点。
        // $('.list ul').empty();//清空原来的列表
        $.each(array, function (index, value) {
            console.log(value);
            $('.list ul').append(value);
        });
    })


}(jQuery);