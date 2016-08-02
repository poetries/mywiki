$(document).ready(function() {
    var $totalPrice = $('#total-price');

    function init() {
        $('.cart__item').each(function() {
            new NumberController({
                wrap: $('.cart__item__num', $(this)),
                step: 1,
                init: 1,
                max: 15,
                onChange: function(newVal, oldVal, $input) {
                    if (newVal === 0) {
                        $input.closest('.cart__item').remove();
                    }
                    calTotalPrice();
                }
            });
        });

        $('.select-all').click(function () {
            $('.cart__item__info>:checkbox').prop('checked', $(this).is(':checked'));
            calTotalPrice();
        });

        $('.cart__item').find(':checkbox').change(function () {
            calTotalPrice();
        });

        calTotalPrice();
    }


    function calTotalPrice() {
        var total = 0;
        $('.cart__item').each(function() {
            var $this = $(this);
            var isChecked = $this.find(':checkbox').is(':checked');
            if(isChecked){
                var num = parseInt($this.find('.number-input').val(), 10);
                var price = parseFloat($this.find('.cart__item__price__text').text());
                total += num * price;
            }
        });
        $totalPrice.text(total);
    }

    init();

});
