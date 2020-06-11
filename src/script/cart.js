! function($) {
    // 引入头部尾部商品文件
    $(document).ready(function() {
            $("header").load("header.html");
            $("footer").load("footer.html");
        })
    // 显示商品
    function showList(sid,num){
        $.get({
            url:'http://localhost/xgimi/php/alldata.php',
            dataType: 'json'
        }).then(data =>{
            $.each(data,(index,val)=>{
                if(sid == val.sid){
                    const $clone = $('.goods-item:hidden').clone(true)
                    $clone.find('.goods-pic').find('img').attr('src', val.url);//图片
                    $clone.find('.goods-pic').find('img').attr('sid', val.sid);//给图片设置id以便setcookie找到设置cookie中购物车商品数量
                    $clone.find('.goods-d-info').find('a').html(val.title);//商品名称
                    $clone.find('.b-price').find('strong').html(val.price);//商品价格
                    $clone.find('.quantity-form').find('input').val(num);//数量
                    $clone.find('.b-sum').find('strong').html((val.price * num).toFixed(2));//小计
                    $clone.css('display', 'block');
                    $('.item-list').append($clone);
                    total()
                }
                
            })
        })
    }
    // 计算总价
    function total(){
        let $sum = 0;//件数
        let $count = 0;//总价
        $('.goods-item:visible').each((index,ele)=>{
            // 判断全选按钮的状态
            if($(ele).find('.cart-checkbox input').prop('checked')){
                $sum += parseInt($(ele).find('.quantity-form input').val());
                $count += parseFloat($(ele).find('.b-sum strong').html());
            }
        })
        $('.amount-sum').find('em').html($sum);
        $('.totalprice').html($count.toFixed(2));
    }
    //全选
    //按钮的状态
    const $checkbox = $('.goods-item:visible').find(':checkbox')
    $('.allsel').on('change', function() {
        // 找到所有商品被选中的状态和当前全选按钮的状态一致
        $('.goods-item:visible').find(':checkbox').prop('checked', $(this).prop('checked'));
        //全选按钮的状态和当前按钮的状态一致
        $('.allsel').prop('checked', $(this).prop('checked'));
        total(); 
    });
    $('.item-list').on('change', $checkbox, function() {
        //全选按钮状态判断input被选中的个数和所有的列表商品的长度是否一致
        if ($('.goods-item:visible').find(':checkbox').length === $('.goods-item:visible').find('input:checked').length) {
            $('.allsel').prop('checked', true);
        } else {
            $('.allsel').prop('checked', false);
        }
        total();
    });
    // 商品数量
    //计算单价函数
    function singleprice(obj) {
        let $dj = parseFloat(obj.parents('.goods-item').find('.b-price strong').html());
        let $num = parseInt(obj.parents('.goods-item').find('.quantity-form input').val());
        return ($dj * $num).toFixed(2)
    }
    // 点击+按钮计算数量和价格
    $('.quantity-add').on('click', function() {
        let $num = $(this).parents('.goods-item').find('.quantity-form input').val();
        $num++;
        $(this).parents('.goods-item').find('.quantity-form input').val($num);
        $(this).parents('.goods-item').find('.b-sum strong').html(singleprice($(this)));
        total(); 
        setcookie($(this))
    });
    // 点击-按钮计算数量和价格
    $('.quantity-down').on('click', function() {
        let $num = $(this).parents('.goods-item').find('.quantity-form input').val();
        $num--;
        if ($num < 1) {
            $num = 1;
        }
        $(this).parents('.goods-item').find('.quantity-form input').val($num);
        $(this).parents('.goods-item').find('.b-sum strong').html(singleprice($(this)));
        total();
        setcookie($(this));
    });
    //input框输入改变
    $('.quantity-form input').on('input', function() {
        let $reg = /^\d+$/g; //只能输入数字
        let $value = $(this).val();
        if (!$reg.test($value)) { 
            $(this).val(1);
        }
        $(this).parents('.goods-item').find('.b-sum strong').html(singleprice($(this)));
        total();
        setcookie($(this));
    });
    // 删除商品
    //单个商品删除
    $('.b-action a').on('click', function() {
        cookietoarray();
        if (window.confirm('你确定要删除吗?')) {
            $(this).parents('.goods-item').remove();
            delcookie($(this).parents('.goods-item').find('img').attr('sid'), arrsid);
            total(); 
        }
    });
    
    // 勾选商品删除
    $('.operation a').on('click', function() {
        cookietoarray();
        if (window.confirm('你确定要全部删除吗?')) {
            $('.goods-item:visible').each(function() {
                if ($(this).find(':checkbox').is(':checked')) { //判断复选框是否选中
                    $(this).remove();
                    delcookie($(this).find('img').attr('sid'), arrsid);
                }
            });
            total(); //计算总价
        }
    });
    // 获取cookie
    if($.cookie('cookiesid') && $.cookie('cookienum')){
        let id = $.cookie('cookiesid').split(',')//获取商品id转数组
        let num = $.cookie('cookienum').split(',')//获取商品数量转数组
        // 将取到的id传入showList
        $.each(id,(index,val)=>{
            showList(id[index],num[index])
        })
    }
     //将改变后的数量存放到cookie中
     let arrsid = []; //存储商品的编号。
     let arrnum = []; //存储商品的数量。
    //  获取本地存储的cookie
     function cookietoarray() {
         if ($.cookie('cookiesid') && $.cookie('cookienum')) {
             arrsid = $.cookie('cookiesid').split(','); 
             arrnum = $.cookie('cookienum').split(','); 
         } else {
             arrsid = [];
             arrnum = [];
         }
     }
    //  设置cookie
     function setcookie(obj) {
         cookietoarray();
         let $sid = obj.parents('.goods-item').find('img').attr('sid');
         arrnum[$.inArray($sid, arrsid)] = obj.parents('.goods-item').find('.quantity-form input').val();
         //$.inArray()查找在数组中的位置
         $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
     }
    //  删除cookie
    function delcookie(sid, arrsid) { //sid:当前删除的sid  arrsid:存放sid的数组
        let $index = -1; //删除的索引位置
        $.each(arrsid, function(index, value) {
            if (sid === value) {
                $index = index;
            }
        });
        arrsid.splice($index, 1);
        arrnum.splice($index, 1);

        $.cookie('cookiesid', arrsid, { expires: 10, path: '/' });
        $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
    }
}(jQuery);