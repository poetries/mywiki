$(document).ready(function() {
    function queueCall(fn, time, ctx) {
        ctx = ctx || fn;
        time = time || 200;
        var argsArr = []; // 执行方法的队列
        setInterval(function() {
            if (argsArr.length === 0) {
                return;
            }
            var args = argsArr.shift();
            fn.apply(ctx, args);
        }, time);
        return function() {
            argsArr.push(arguments);
        };
    };

    var Item = function(param, $target) {
        this.param = $.extend({}, this.defaultParam, param);
        this.$el = this.make();
        this.show($target);
    }
    Item.prototype = {
        defaultParam: {
            width: 100,
            height: 100,
            scale: 0.8,
            animClass: 'sign-in__img--anim',
            className: 'sign-in__img',
            relLoc: { // 出现后，需要移动的相对位置
                x: 0,
                y: 0
            },
            offset: {
                x: 100,
                y: 100
            }
        },
        make: function() {
            var param = this.param;
            var $img = $('<img>');
            $img.width(param.width);
            $img.height(param.height);
            $img.attr('src', param.url);
            $img.addClass(param.className);
            return $img;
        },
        show: function($target) {
            var param = this.param;
            var $img = this.$el;
            $target.append($img);
            $img.fadeIn('slow', function() {
                $img.addClass(param.animClass);
                $img.css({
                    transform: 'translate3d(' + param.relLoc.x + 'px,' + param.relLoc.y + 'px,0)'
                });
            });
        },
        spread: function() { // 向第三层散开
            var param = this.param;
            var $img = this.$el;
            var x = param.relLoc.x;
            var y = param.relLoc.y;
            if (x > 0) {
                x = x + param.offset.x;
            } else {
                x = x - param.offset.x;
            }

            if (y > 0) {
                y = y + param.offset.y;
            } else {
                y = y - param.offset.y;
            }

            $img.css({
                transform: 'translate3d(' + x + 'px,' + y + 'px,0) scale(' + param.scale + ')',
                opacity: 0.5
            });
        },
        terminal: function() {
            var $el = this.$el;
            $el.hide(function() {
                $el.remove();
            });
        }
    };
    /*
     * 
     *
     */
    var signIn = {
        $el: $('.sign-in'),
        $totalNum: $('#total-num'),
        totalNum: 0,
        // MAXNUM: 5,//最多出现人数
        MAXNUM_2: 10, //第二层最多出现人数
        MAXNUM_3: 20, //第三层最多出现人数
        DEFAULT_AVATAR_URL: 'img/avatar/default.png',
        secAreaSize: {
            width: 300,
            height: 800,
        },
        itemSize: {
            width: 80,
            height: 80
        },
        secItems: [], // 第2层的签到元素
        thirdItems: [], // 第3层的签到元素
        delayTime: 2000, // 新人签到的调用间隔
        calRandomRange: function() { // 第二层随机位置的范围
            var xMin = (this.secAreaSize.width - this.itemSize.width) / 2;
            var yMin = (this.secAreaSize.height - this.itemSize.height) / 2;
            this.randomRange = {
                x: [-xMin, xMin],
                y: [-yMin, yMin]
            };
        },
        calSpeadOffset: function() { // 让第二层中任意的元素都能到第三层的范围。即只需在图片的点也能到第三层的范围即可
            this.spreadOffset = {
                x: (this.secAreaSize.width + this.itemSize.width) / 2,
                y: (this.secAreaSize.height + this.itemSize.height) / 2
            }
        },
        calSpeadMaxSize: function() { // 最大扩散的范围
            this.speadMaxSize = {
                width: 2 * (this.secAreaSize.width + this.itemSize.width),
                height: 2 * (this.secAreaSize.height + this.itemSize.height)
            };
            console.log(JSON.stringify(this.speadMaxSize));
        },
        getRandomLoc: function() {
            var randomLoc = {
                x: this.getRandomNum(this.randomRange.x),
                y: this.getRandomNum(this.randomRange.y)
            };
            console.log(JSON.stringify(randomLoc));
            return randomLoc;
        },
        getRandomNum: function  (range) {
            var min = range[0];
            var max = range[1];
            return min + Math.random() * (max - min);
        },
        addItem: function(itemURL) {
            this.secItems.push(this.makeItem());
            if(this.secItems.length > this.MAXNUM_2){
                this.removeItems(2);
            }
            if(this.thirdItems.length > this.MAXNUM_3){
                this.removeItems(3);
            }
        },
        makeItem: function  () {
            return new Item({
                relLoc: this.getRandomLoc(),
                offset: this.spreadOffset,
                width: this.itemSize.width,
                height: this.itemSize.height,
                url: this.DEFAULT_AVATAR_URL
            }, this.$el);


        },
        removeItems: function(place) {
            var removeItems;
            if(place === 2){
                removeItems = this.secItems.splice(0, this.secItems.length - this.MAXNUM_2);
                this.thirdItems = this.thirdItems.concat(removeItems);// 第二层到第三层
                this.removeItems(3);
                removeItems.forEach(function (item) {
                    item.spread();
                });
            } else if(place === 3){
                removeItems = this.thirdItems.splice(0, this.thirdItems.length - this.MAXNUM_3);
                removeItems.forEach(function (item) {
                    item.terminal();
                });
            }

        },
        init: function() {
            this.calRandomRange();
            this.calSpeadOffset();
            this.calSpeadMaxSize();
            this.$el.width(this.speadMaxSize.width).height(this.speadMaxSize.height);
            this.addItem = queueCall(this.addItem, this.delayTime, this); // 避免短时间调用太频繁而产生的动画卡顿
        }
    }

    signIn.init();

    $('.add-btn').click(function() {
        signIn.addItem();
    });

    $('.add-multi-btn').click(function() {
        for (var i = 40; i > 0; i--) {
            signIn.addItem();
        };
    });
});
