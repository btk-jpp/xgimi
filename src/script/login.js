!function ($) {
    $('button').on('click', function () {
        $.ajax({
            type: 'post',
            url: 'http://localhost/xgimi/php/login.php',
            data: {
                username: $('.username').val(),
                password: $('.password').val()
            }
        }).done(function (result) {
            if (result) {
                location.href = "index.html";
                localStorage.setItem('username', $('.username').val());
            } else {
                $('.password').val('');
                alert('用户名或者密码错误');
            }
        });
    });
}(jQuery);