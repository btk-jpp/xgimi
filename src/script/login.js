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
            if (!result) {
                $('.password').val('');
                alert('用户名或者密码错误');
                return
            } else {
                location.href = "index.html";
                localStorage.setItem('username', $('.username').val());
            }
        });
    });
}(jQuery);