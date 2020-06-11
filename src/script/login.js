! function($) {
    $('button').on('click', function() {
        $.ajax({
            type: 'post',
            url: 'http://localhost/xgimi/php/login.php',
            data: {
                username: $('.username').val(),
                password: hex_sha1($('.password').val())
            }
        }).done(function(result) {
            if (result) {
                location.href = "index.html";
                localStorage.setItem('username', $('.username').val());
            } else {
                $('.password').val('');
                alert('用户名或者密码错误');
            }
        });
    });
    // 密码显示切换
    $('i').on('click',function(){
        if($(this).attr('class')=='iconfont icon-eye-slash'){
            $(this).attr('class','iconfont icon-eyes')
            $('form div:eq(1) input').attr('type','text')
        }else{
            $(this).attr('class','iconfont icon-eye-slash')
            $('form div:eq(1) input').attr('type','password')
        }
    })
}(jQuery);