"use strict";!function(v){v(document).ready(function(){v("header").load("header.html"),v("footer").load("footer.html");var t=location.search.substring(1).split("=")[1],s=v("#smallpic"),o=v("#bpic"),l=v(".loadtitle"),c=v(".loadpcp"),a=v(".p-name p"),t=t||1;v.ajax({url:"http://localhost/xgimi/php/getsid.php",data:{sid:t},dataType:"json"}).done(function(t){s.attr("src",t.url),s.attr("sid",t.sid),o.attr("src",t.url),l.html(t.title),c.html(t.price),a.html(t.depict);var i=t.piclisturl.split(","),e="";v.each(i,function(t,i){e+='<li><img src="'+i+'"/>></li>'}),v("#list ul").html(e)});var n=v("#spic"),r=v("#sf"),i=v("#bf"),e=v("#left"),h=v("#right");v("#list");r.width(n.width()*i.width()/o.width()),r.height(n.height()*i.height()/o.height());var d=o.width()/n.width();n.hover(function(){r.css("visibility","visible"),i.css("visibility","visible"),v(this).on("mousemove",function(t){var i=t.pageX-v(".wrap").offset().left-r.width()/2,e=t.pageY-v(".wrap").offset().top-r.height()/2;i<0?i=0:i>=n.width()-r.width()&&(i=n.width()-r.width()),e<0?e=0:e>=n.height()-r.height()&&(e=n.height()-r.height()),r.css({left:i,top:e}),o.css({left:-i*d,top:-e*d})})},function(){r.css("visibility","hidden"),i.css("visibility","hidden")}),v("#list ul").on("click","li",function(){var t=v(this).find("img").attr("src");s.attr("src",t),o.attr("src",t)});var u=3;h.on("click",function(){var t=v("#list ul li");t.size()>u&&(u++,v("#list ul").animate({left:-(u-3)*t.eq(0).outerWidth(!0)}))}),e.on("click",function(){var t=v("#list ul li");3<u&&(u--,v("#list ul").animate({left:-(u-3)*t.eq(0).outerWidth(!0)}))}),v(".del").click(function(){v("#count").val(parseInt(v("#count").val())-1),parseInt(v("#count").val())<=1&&v("#count").val(1)}),v(".add").click(function(){v("#count").val(parseInt(v("#count").val())+1)});var p=[],f=[];v(".hd-car").on("click",function(){var t,i=v(this).parents(".goodsinfo").find("#smallpic").attr("sid");f=v.cookie("cookiesid")&&v.cookie("cookienum")?(p=v.cookie("cookiesid").split(","),v.cookie("cookienum").split(",")):(p=[],[]),-1!=v.inArray(i,p)?(t=parseInt(f[v.inArray(i,p)])+parseInt(v("#count").val()),f[v.inArray(i,p)]=t):(p.push(i),v.cookie("cookiesid",p,{expires:10,path:"/"}),f.push(v("#count").val())),v.cookie("cookienum",f,{expires:10,path:"/"});var e=v(".sidebar-cart").offset(),o=s.attr("src");v('<img class="u-flyer" src="'+o+'">').fly({start:{left:s.offset().top,top:s.offset().left},end:{left:e.left+10,top:e.top+10,width:0,height:0},onEnd:function(){v("#msg").show().animate({width:"250px"},200).fadeOut(1e3)}})})})}(jQuery);