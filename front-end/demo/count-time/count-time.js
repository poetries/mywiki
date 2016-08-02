(function(gloable) {
    var defaultOpts = {
        init: { // 初始值，只支持到小时。不支持小时以上如：天，月，之类的
            hour: 0,
            minute: 0,
            second: 0
        },
        reverse: false, // 是正数，还是倒数
        completeFn: $.noop, // 倒数结束的回调
    };

    function CountTime(options) {
        this.options = $.extend({}, defaultOpts, options);
        var opt = this.options;
        this.hour = opt.init.hour;
        this.minute = opt.init.minute;
        this.second = opt.init.second;
        this.interval = opt.reverse ? -1 : 1; // 1s
        this.runId = false;
        this.start();

    }
    CountTime.prototype = {
        run: function() {
            if (this._canRun()) {
                this.second = this.second + this.interval;
                this._toValidTime();
            } else {
                this.stop();
                this.options.completeFn();
            }
        },
        start: function() {
            var self = this;
            this.runId = setInterval(function() {
                self.run();
            }, 1000);
        },
        stop: function() {
            clearInterval(this.runId);
            this.runId = false;
        },
        isRun: function(){
        	return this.runId !== false ? true : false;
        },
        isStop: function(){
        	return this.runId !== false ? false : true;
        },
        getTime: function() {
            return {
                hour: this.hour,
                minute: this.minute,
                second: this.second
            }
        },
        _canRun: function() { // 到倒数时，到0的时候，就结束了
            var canRun = true;
            if (this.options.reverse) {
                if (this.hour === 0 && this.minute === 0 && this.second === 0) {
                    canRun = false;
                }
            }
            return canRun;
        },
        _toValidTime: function() {
            if (this.second <= -1) {
                this.second = 59;
                this.minute = this.minute - 1;
            } else if (this.second >= 60) {
                this.second = 0;
                this.minute = this.minute + 1;
            }

            if (this.minute <= -1) {
                this.minute = 59;
                this.hour = this.hour - 1;
            } else if (this.minute >= 60) {
                this.minute = 0;
                this.hour = this.hour + 1;
            }

            if(this.hour < 0){
            	this.hour = 0;
            	this.minute = 0;
            	this.second = 0;
            }
            // 小时太大就不管啦
        }

    }

    gloable.CountTime = CountTime;
})(window);
