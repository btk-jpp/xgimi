"use strict";!function(n){var s=n(".username"),t=n("form input"),i=!1,e=!1,a=!1;t.eq(0).focus(function(){0==n(this).val().length&&n(this).parent().siblings("span").text("支持中文，字母，数字，'-'，'_'的多种组合")}),t.eq(0).blur(function(){0==n(this).val().length?n(this).parent().siblings("span").text("").css("color","#ccc"):0<n(this).val().length&&n(this).val().length<4?n(this).parent().siblings("span").text("长度只能在4-20个字符之间").css("color","red"):4<=n(this).val().length&&!isNaN(n(this).val())?n(this).parent().siblings("span").text("用户名不能为纯数字").css("color","red"):(n(this).parent().siblings("span").text(""),i=!0),n.ajax({type:"post",url:"http://localhost/xgimi/php/registry.php",data:{username:n(this).val()}}).done(function(t){i=!t||(s.parent().siblings("span").text("该用户名已经存在").css("color","red"),!1)})}),n("input").eq(1).focus(function(){0==n(this).val().length&&n(this).parent().siblings("span").text("建议使用字母、数字和符号两种以上的组合，6-20个字符")}),n("input").eq(1).blur(function(){0==n(this).val().length?n(this).parent().siblings("span").text("").css("color","#ccc"):0<n(this).val().length&&n(this).val().length<6?n(this).parent().siblings("span").text("长度只能在6-20个字符之间").css("color","red"):(n(this).parent().siblings("span").text(""),e=!0)}),n("input").eq(1).on("input",function(){var t=n(this).val();if(6<=t.length&&t.length<=20){var s=0;switch(/\d+/.test(t)&&s++,/[A-Z]+/.test(t)&&s++,/[a-z]+/.test(t)&&s++,/[\W\_]+/.test(t)&&s++,s){case 1:n(this).parent().siblings("span").html("弱").css({color:"red"}),e=!1;break;case 2:case 3:n(this).parent().siblings("span").html("中").css({color:"#70bdff"}),e=!0;break;case 4:n(this).parent().siblings("span").html("强").css({color:"green"}),e=!0}}else n(this).parent().siblings("span").html("长度只能在6-20个字符之间").css({color:"red"}),e=!1}),n("input").eq(2).focus(function(){0==n(this).val().length&&n(this).parent().siblings("span").text("请再次输入密码")}),n("input").eq(2).blur(function(){0==n(this).val().length?n(this).parent().siblings("span").text("").css("color","#ccc"):n(this).val()!=n("input").eq(1).val()?n(this).parent().siblings("span").text("两次密码不匹配").css("color","red"):(n(this).parent().siblings("span").text(""),a=!0)}),n("form").on("submit",function(){return!!(i&&e&&a)&&void n("form").submit()})}(jQuery);