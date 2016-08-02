$(document).ready(function() {
    var template = '<div class="number-controller">' +
        '<a class="minus-btn" href="javascript:void(0);">-</a>' +
        '<input type="text" class="number-input">' +
        '<a class="plus-btn" href="javascript:void(0);">+</a>' +
        '</div>';
    var config = {};
    var defaultParam = {
        'step': 1,
        'min': 0, // 包括min
        'max': 100000, // 包括max
        'init': 0, // 输入框的初始值
        'precision': 1, // 如果是小数的话，保留小数点后几位
        'onChange': function() {},
        'inputWidth': 40
    };

    function NumberController(param) {
        var self = this;
        this.param = $.extend({}, defaultParam, param);
        param = this.param;
        var $wrap = $(param.wrap);
        this.$wrap = $wrap;
        if ($wrap.length === 0) {
            console.error('not find wrap elem');
            return;
        }
        if (param.init < param.min || param.init > param.max) {
            console.error('init value invalid');
            return;
        }
        $wrap.html(template);
        this.$el = $wrap.find('.number-controller');
        this.$input = this.$el.find('.number-input');
        this.$minusBtn = this.$el.find('.minus-btn');
        this.$plusBtn = this.$el.find('.plus-btn');
        this.$input.width(param.inputWidth);
        this.$input.val(param.init);
        this.registerEvent();
    }

    NumberController.prototype.registerEvent = function(pageNum) {
        var self = this;
        var param = this.param;
        var step = param.step;
        var min = param.min;
        var max = param.max;
        var oldVal;
        this.$minusBtn.click(function() {
            var inputVal = self.getNumber();
            if (inputVal - step >= min) {
                oldVal = inputVal
                inputVal -= step;
                self.setNumber(inputVal);
            }
        });

        this.$plusBtn.click(function() {
            var inputVal = self.getNumber();
            if (inputVal + step <= max) {
                oldVal = inputVal;
                inputVal += step;
                self.setNumber(inputVal);
            }
        });

        this.$input.change(function() {
            var newVal = self.getNumber();
            if (isNaN(newVal) || newVal < min || newVal > max) {
                self.setNumber(param.init);
            } else {
                param.onChange(newVal, oldVal, $(this));
            }
        });
    };

    NumberController.prototype.getNumber = function() {
        return Number(Number(this.$input.val()).toFixed(this.param.precision));
    };

    NumberController.prototype.setNumber = function(num) {
        if (isFloat(num)) {
            num = num.toFixed(this.param.precision);
        }
        this.$input.val(num);
        this.$input.change();
    };

    function isFloat(num) {
        return (num + '').indexOf('.') > -1;
    }
    window.NumberController = NumberController;
});
