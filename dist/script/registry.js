"use strict";!function(n){var s=n(".username"),t=n("form input"),i=!1,e=!1,a=!1,l=!1;function r(){for(var t=0,s=0;s<4;s++)t+="qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM".charAt(Math.floor(62*Math.random()));t=t.substring(1),n("#code em").text(t)}t.eq(0).focus(function(){0==n(this).val().length&&n(this).parent().siblings("span").text("支持中文，字母，数字，'-'，'_'的多种组合")}),t.eq(0).blur(function(){0==n(this).val().length?n(this).parent().siblings("span").text("").css("color","#ccc"):0<n(this).val().length&&n(this).val().length<4?n(this).parent().siblings("span").text("长度只能在4-20个字符之间").css("color","red"):4<=n(this).val().length&&!isNaN(n(this).val())?n(this).parent().siblings("span").text("用户名不能为纯数字").css("color","red"):(n(this).parent().siblings("span").text(""),i=!0),n.ajax({type:"post",url:"http://localhost/xgimi/php/registry.php",data:{username:n(this).val()}}).done(function(t){i=!t||(s.parent().siblings("span").text("该用户名已经存在").css("color","red"),!1)})}),n("input").eq(1).focus(function(){0==n(this).val().length&&n(this).parent().siblings("span").text("建议使用字母、数字和符号两种以上的组合，6-20个字符")}),n("input").eq(1).blur(function(){0==n(this).val().length?n(this).parent().siblings("span").text("").css("color","#ccc"):0<n(this).val().length&&n(this).val().length<6?n(this).parent().siblings("span").text("长度只能在6-20个字符之间").css("color","red"):(n(this).parent().siblings("span").text(""),e=!0)}),n("input").eq(2).focus(function(){0==n(this).val().length&&n(this).parent().siblings("span").text("请再次输入密码")}),n("input").eq(2).blur(function(){0==n(this).val().length?n(this).parent().siblings("span").text("").css("color","#ccc"):n(this).val()!=n("input").eq(1).val()?n(this).parent().siblings("span").text("两次密码不匹配").css("color","red"):(n(this).parent().siblings("span").text(""),a=!0)}),n("input").eq(4).focus(function(){0==n(this).val().length&&n(this).parent().siblings("span").text("看不清？点击图片更换验证码")}),r(),n("#code em").click(r),n("#code input").blur(function(){0==n(this).val().length?(n(this).parent().siblings("span").text(""),n(this).parent().siblings("span").css("color","#ccc")):n(this).val().toUpperCase()!=n("#code em").text().toUpperCase()?(n(this).parent().siblings("span").text("验证码不正确"),n(this).parent().siblings("span").css("color","red")):(n(this).parent().siblings("span").text(""),l=!0)}),n("form").on("submit",function(){return!!(i&e&a&l)&&void n("form").submit()})}(jQuery);