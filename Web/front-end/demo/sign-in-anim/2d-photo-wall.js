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
    var signIn = {
        $el: $('.sign-in'),
        $totalNum: $('#total-num'),
        totalNum: 0,
        ROW: 8,
        COL: 8,
        // MAXNUM: 5,//最多出现人数
        MAXNUM: 30, //最多出现人数
        DEFAULT_AVATAR_URL: 'img/avatar/default.png',
        availableLocs: [],// 存放未放签到的位置
        notAvailableLocs: [],// 存放已放签到的位置
        isAnim: false,
        addArr: [],
        delayTime: 2000, // 新人签到的调用间隔
        getRandomLoc: function() {
            if(this.availableLocs.length === 0){
                return false;
            }
            var randomIndex = Math.floor(Math.random() * this.availableLocs.length);
            var loc = this.availableLocs.splice(randomIndex, 1)[0];
            this.notAvailableLocs.push(loc);// loc 不在 availableLocs中，就在 notAvailableLocs中
            // console.log('av:%d,notA:%d, total: %d',this.availableLocs.length, this.notAvailableLocs.length,  this.availableLocs.length +　this.notAvailableLocs.length);
            return  loc;
        },
        removeRandomItem: function(done, itemURL) {
            if(this.notAvailableLocs.length === 0){
                return;
            }
            var loc = this.notAvailableLocs.splice(0, 1)[0];
            var self = this;
            $('#item-y-' + loc.y + '-x-' + loc.x).fadeOut(600, function() {
                $(this).remove();
                done.call(self, itemURL);
                self.availableLocs.push(loc);
            });

        },
        addItem: function(itemURL) {
            this.makeAndAnimItem(itemURL);
        },
        removeItems: function (argument) {
            var locArrs = this.notAvailableLocs.splice(0, this.notAvailableLocs.length - this.MAXNUM + 1);
                locArrs.forEach(function(loc) {
                    $('#item-y-' + loc.y + '-x-' + loc.x).remove();
                });
                this.availableLocs = this.availableLocs.concat(locArrs);
        },
        makeAndAnimItem: function(itemURL) {
            var self = this;
            if (this.notAvailableLocs.length + 1 > this.MAXNUM) {
                this.removeItems();
            }
            itemURL = itemURL || this.DEFAULT_AVATAR_URL;
            var loc = this.getRandomLoc();
            if(!loc){
                return;
            }
            var $img = $('<img>');
            $img.attr('src', itemURL).attr('id', 'item-y-' + loc.y + '-x-' + loc.x);
            this.$el.append($img);
            var targetSel = '.row-{row}-col-{col}'.replace('{row}', loc.y).replace('{col}', loc.x);
            var $target = $(targetSel);
            var pos = $target.position();
            $img.addClass('sign-in__img');
            $img.fadeIn('slow', function() {
                var imgPos = $img.position();
                var offsetX = pos.left - imgPos.left + 'px';
                var offsetY = pos.top - imgPos.top + 'px';
                var translate3dStr = 'translate3d(' + offsetX + ',' + offsetY + ',0)';
                var scaleX = self.itemWidth / $img.width();
                var scaleY = self.itemHeight / $img.height();
                var scaleStr = 'scale(' + scaleX + ',' + scaleY + ')';
                $img.fadeIn('slow', function () {
                    $img.addClass('sign-in__img--anim');
                    $img.css({
                        transform: [translate3dStr, scaleStr].join(' ') // 3D加速
                    });
                });
            });

            this.$totalNum.text(++this.totalNum);
        },
        makeItem: function(row, col) {
            return '<span class="sign-in__line__item row-{row}-col-{col}"></span>'.replace('{row}', row).replace('{col}', col);
        },
        makeRow: function(row) {
            var html = [];
            html.push('<div class="sign-in__line">');
            for (var i = 0; i < this.COL; i++) {
                html.push(this.makeItem(row, i));
            }
            html.push('</div>');
            return html.join('');
        },
        initAvailableLocs: function() { // 初始化可以放格子的位置 [{x:0,y:0}, {x:1,y:1}...]
            for (var i = 0; i < this.ROW; i++) {
                for (var j = 0; j < this.COL; j++) {
                    this.availableLocs.push({x: j, y: i});
                }
            }
        },
        initView: function() {
            var html = [];
            for (var i = 0; i < this.ROW; i++) {
                html.push(this.makeRow(i));
            }
            this.$el.html(html.join(''));
        },
        init: function() {
            this.initView();
            this.initAvailableLocs();
            this.$rows = this.$el.find('.sign-in__line');
            var $item = $('.sign-in__line__item');
            this.itemWidth = $item.width();
            this.itemHeight = $item.height();
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
