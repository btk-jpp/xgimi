!function ($) {
    $(document).ready(function () {
        // 引入头部尾部商品文件
        $("header").load( "header.html");
        $("footer").load( "footer.html");
        $(".products").load( "productlist.html");
        // 轮播
        class Lunbo {
            constructor() {
                this.lunbo = $('.swiper-container');
                this.picul = $('.swiper-container ul');
                this.picli = this.picul.children();
                this.btnli = $('.swiper-pagination span');
                this.leftarrow = $('.prev');
                this.rightarrow = $('.next');
                this.index = 0;
                this.timer = null;
            }

            init() {
                let _this = this;
                this.btnli.on('click', function() {
                    _this.index = $(this).index(); //接收当前索引，不支持箭头函数。
                    _this.tabswitch();
                });

                //左右箭头事件
                this.rightarrow.on('click', function() {
                    _this.rightevent()
                });

                this.leftarrow.on('click', function() {
                    _this.leftevent()
                });

                //自动轮播
                this.timer = setInterval(function() {
                    _this.rightarrow.click();
                }, 5000);

                //鼠标移入移出停止开启对应的自动轮播
                this.lunbo.hover(function() {
                    clearInterval(_this.timer);
                }, function() {
                    this.timer = setInterval(function() {
                        _this.rightarrow.click();
                    }, 5000);
                });

            }

            tabswitch() {
                this.btnli.eq(this.index).addClass('active').siblings('span').removeClass('active');
                //当前的li显示(透明变成1),其他变成0
                this.picli.eq(this.index).stop().animate({
                    opacity: 1
                }).siblings('ul li').stop().animate({
                    opacity: 0
                });
            }

            rightevent() {
                this.index++;
                if (this.index > this.btnli.length - 1) {
                    this.index = 0;
                }
                this.tabswitch();
            }
            leftevent() {
                this.index--;
                if (this.index < 0) {
                    this.index = this.btnli.length - 1;
                }
                this.tabswitch();
            }
        }
        new Lunbo().init();

    })
}(jQuery);