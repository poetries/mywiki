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
            animClass: 'sign-in__img--layer-2',
            className: 'sign-in__img'
        },
        make: function() {
            var param = this.param;
            var $img = $('<img>');
            $img.attr('src', param.url);
            $img.attr('data-sec-target', param.secTargetIndex);
            $img.attr('data-third-target', param.moveToThirdTarget);
            $img.addClass(param.className);
            return $img;
        },
        show: function($target) {
            var param = this.param;
            var $img = this.$el;
            $target.append($img);
            var $moveToEl = $('.item[data-index=' + $img.data('sec-target') + ']', '.layer-2');
            $img.fadeIn('slow', function() {
                $img.data('left', $img.position().left);
                $img.data('top', $img.position().top);
                var offset = {
                    x: $moveToEl.position().left - $img.position().left,
                    y: $moveToEl.position().top - $img.position().top
                };
                $img.addClass(param.animClass);
                $img.css({
                    transform: 'translate3d(' + offset.x + 'px,' + offset.y + 'px,0)'
                });
            });
        },
        moveToThird: function() {
            var $img = this.$el;
            var left = $img.data('left');
            var top = $img.data('top');
            var $moveToEl = $('.item[data-index=' + $img.data('third-target') + ']', '.layer-3');
            var offset = {
                x: $moveToEl.position().left - left,
                y: $moveToEl.position().top - top
            }
            $img.addClass('sign-in__img--layer-3');
            $img.css({
                transform: 'translate3d(' + offset.x + 'px,' + offset.y + 'px,0)'
            });
        },
        getThirdIndex: function() {
            return this.param.moveToThirdIndex;
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
    // layer-2-1 layer-3-1-a
    var signIn = {
        $el: $('.sign-in'),
        $totalNum: $('#total-num'),
        totalNum: 0,
        DEFAULT_AVATAR_URL: 'img/avatar/default.png',
        itemSize: {
            width: 80,
            height: 80
        },
        secItems: [], // 第2层的签到元素 9
        thirdItems: [], // 第3层的签到元素 18
        SECOND_LENGTH: 9,
        THIRD_LENGTH: 18,
        delayTime: 2000, // 新人签到的调用间隔
        addItem: function(itemURL) {
            this.totalNum++;
            var totalNum = this.totalNum;
            var secIndex = totalNum % this.SECOND_LENGTH - 1;
            if (secIndex === -1) {
                secIndex = this.SECOND_LENGTH - 1;
            }
            var thirdIndex;
            var moveToThirdIndex; // 数组中的
            var moveToThirdTarget; // 元素中的
            var newItem;
            var secOld; // 第二层要被替换的旧的头像
            var thirdOldIndex;
            var thirdOld; // 第二层要被替换的旧的头像
            if (Math.floor((totalNum-1) / this.SECOND_LENGTH) % 2 === 0) {
                moveToThirdIndex = secIndex;
                moveToThirdTarget = 'a-' + (secIndex + 1);
            } else {
                moveToThirdIndex = secIndex + this.SECOND_LENGTH;
                moveToThirdTarget = 'b-' + (secIndex + 1);
            }

            if (totalNum > this.SECOND_LENGTH) { // 在第二层还未满或刚满
                secOld = this.secItems[secIndex];
            }

            if (totalNum > (this.THIRD_LENGTH + this.SECOND_LENGTH)) { // 第三层已满
                thirdOldIndex = secOld.getThirdIndex();
                thirdOld = this.secItems[thirdOldIndex];
            }
            if (secOld) { // 第二层移到第三层
                secOld.moveToThird();
            }
            if (thirdOld) { // 第三层消失
                thirdOld.terminal();
            }
            newItem = this.makeItem(secIndex + 1, moveToThirdIndex, moveToThirdTarget); // secIndex表示的DOM是下标从1开始，
            this.secItems[secIndex] = newItem;

        },
        makeItem: function(secTargetIndex, moveToThirdIndex, moveToThirdTarget) {
            return new Item({
                url: this.DEFAULT_AVATAR_URL,
                secTargetIndex: secTargetIndex,
                moveToThirdIndex: moveToThirdIndex,
                moveToThirdTarget: moveToThirdTarget
            }, this.$el);

        },
        init: function() {
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
