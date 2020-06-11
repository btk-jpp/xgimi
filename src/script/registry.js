!function ($) {
    let $user = $('.username');
    let $input = $('form input');
    let $flag1 = false; //用户名
    let $flag2 = false; //密码
    let $flag3 = false; //缺认密码
    // let $flag4 = false; 验证码
    //用户名
    $input.eq(0).focus(function(){
        if ($(this).val().length == 0) {
			$(this).parent().siblings('span').text("支持中文，字母，数字，'-'，'_'的多种组合");
		}
    })
    $input.eq(0).blur(function(){
        if ($(this).val().length == 0) {
            $(this).parent().siblings('span').text("").css("color", '#ccc');
		} else if ($(this).val().length > 0 && $(this).val().length < 4) {
            $(this).parent().siblings('span').text("长度只能在4-20个字符之间").css("color", 'red');
		} else if ($(this).val().length >= 4 && !isNaN($(this).val())) {
            $(this).parent().siblings('span').text("用户名不能为纯数字").css("color", 'red');
		}else{
            $(this).parent().siblings('span').text("");
            $flag1 = true
        }
        $.ajax({
            type: 'post',
            url: 'http://localhost/xgimi/php/registry.php',
            data: {
                username: $(this).val()
            }
        }).done(function (result) {
            if (!result) {//不存在
                $flag1 = true;
            } else{
                $user.parent().siblings('span').text('该用户名已经存在').css('color', 'red');
                $flag1 = false;
            }
        })
    })
    //密码
    $('input').eq(1).focus(function () {
		if ($(this).val().length == 0) {
			$(this).parent().siblings('span').text("建议使用字母、数字和符号两种以上的组合，6-20个字符");
		}
    })
	$('input').eq(1).blur(function () {
		if ($(this).val().length == 0) {
			$(this).parent().siblings('span').text("").css("color", '#ccc');
		} else if ($(this).val().length > 0 && $(this).val().length < 6) {
			$(this).parent().siblings('span').text("长度只能在6-20个字符之间").css("color", 'red');
		} else {
            $(this).parent().siblings('span').text("");
            $flag2 = true
		}
    })
    // 判断密码强弱
    $('input').eq(1).on('input', function() {
        let $pass = $(this).val();
        if ($pass.length >= 6 && $pass.length <= 20) {
            let regnum = /\d+/;//判断数字
            let regupper = /[A-Z]+/;//判断大写字母
            let reglower = /[a-z]+/;//判断小写字母
            let regother = /[\W\_]+/; //其他字符
            let $count = 0; //计数

            if (regnum.test($pass)) {
                $count++;
            }

            if (regupper.test($pass)) {
                $count++;
            }

            if (reglower.test($pass)) {
                $count++;
            }

            if (regother.test($pass)) {
                $count++;
            }
            //判断密码强中弱
            switch ($count) {
                case 1:
                    $(this).parent().siblings('span').html('弱').css({
                        color: 'red'
                    });
                    $flag2 = false;
                    break;

                case 2:
                case 3:
                    $(this).parent().siblings('span').html('中').css({
                        color: '#70bdff'
                    });
                    $flag2 = true;
                    break;
                case 4:
                    $(this).parent().siblings('span').html('强').css({
                        color: 'green'
                    });
                    $flag2 = true;
                    break;
            }

        } else {
            $(this).parent().siblings('span').html('长度只能在6-20个字符之间').css({
                color: 'red'
            });
            $flag2 = false;
        }
    });
	//	确认密码
	$('input').eq(2).focus(function () {
		if ($(this).val().length == 0) {
			$(this).parent().siblings('span').text("请再次输入密码");
		}
    })
	$('input').eq(2).blur(function () {
		if ($(this).val().length == 0) {
			$(this).parent().siblings('span').text("").css("color", '#ccc');
		} else if ($(this).val() != $('input').eq(1).val()) {
			$(this).parent().siblings('span').text("两次密码不匹配").css("color", 'red');
		} else {
            $(this).parent().siblings('span').text("");
            $flag3 = true
		}
    })
    //验证码
    // $('input').eq(4).focus(function () {
	// 	if ($(this).val().length == 0) {
	// 		$(this).parent().siblings("span").text("看不清？点击图片更换验证码");
	// 	}
    // })
    // // 	验证码
	// function code() {
	// 	var str = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM";
	// 	var str1 = 0;
	// 	for (var i = 0; i < 4; i++) {
	// 		str1 += str.charAt(Math.floor(Math.random() * 62))
	// 	}
	// 	str1 = str1.substring(1)
	// 	$("#code em").text(str1);
	// }
    // code();
	// $("#code em").click(code);
	// //	验证码验证
	// $('#code input').blur(function () {
	// 	if ($(this).val().length == 0) {
    //         $(this).parent().siblings('span').text("").css("color", '#ccc');
	// 	} else if ($(this).val().toUpperCase() != $("#code em").text().toUpperCase()) {
	// 		$(this).parent().siblings('span').text("验证码不正确");
	// 		$(this).parent().siblings('span').css("color", 'red');
	// 	} else {
    //         $(this).parent().siblings('span').text("");
    //         $flag4 = true;
	// 	}
	// })
    $('form').on('submit', function () {
        if ($flag1 && $flag2 && $flag3){
            $('form').submit();
        }else{
            return false;//阻止提交
        }
    });

    
}(jQuery);