$(function() {
    // http://drops.wooyun.org/tips/689
    var tool = {
        encodeToHTMLEntity: function(str, isHex) {
            var strArr = str.split('');
            var result = strArr.map(function(each) {
                var code = each.charCodeAt(0); // 第一个字符.charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
                if (isHex) { // 16进制
                    code = code.toString(16);
                    code = '&#x' + code;
                } else { // 10进制
                    code = '&#' + code;
                }
                return code + ';';
            });
            return result.join('');
        },
        decodeHTMLEntity: function(str, isHex) {
            var strArr = str.split(';');
            var result = strArr.map(function(each) {
                var code = each.replace('&#', ''); // 
                if (isHex) { // 16进制
                    code = '0' + code; // 0x61之类
                }
                return String.fromCharCode(code);
            });
            return result.join('');
        },
        encodeToJSCode: function(str, type) {
            var strArr = str.split('');
            var result = strArr.map(function(each) {
                var code = each.charCodeAt(0); // 第一个字符.charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
                if (type === 'o') { // 8进制
                    code = code.toString(8);
                    code = '\\' + code;
                } else if (type === 'ox') { // 16进制
                    code = code.toString(16);
                    code = '\\x' + code;
                }
                return code;
            });
            return result.join('');
        },
        decodeJSCode: function(str, type) {
            var split;
            var unit;
            if (type === 'o') {
                split = '\\';
                unit = 8;
            } else if (type === 'ox') {
                split = '\\x';
                unit = 16;
            }
            var strArr = str.split(split);
            strArr.shift();// 第一个是''的
            var result = strArr.map(function(each) {
                return String.fromCharCode(parseInt(each, unit));
            });
            return result.join('');
        },
    };

    var operMap = [{
        'selector': '.condition__code-type__html-decimal',
        'op': [tool.encodeToHTMLEntity, tool.decodeHTMLEntity]
    }, {
        'selector': '.condition__code-type__html-ox',
        'op': [
            function(str) {
                return tool.encodeToHTMLEntity(str, true)
            },
            function(str) {
                return tool.decodeHTMLEntity(str, true)
            }
        ]
    }, {
        'selector': '.condition__code-type__js-o',
        'op': [
            function(str) {
                // eval('\143\157\156\163\157\154\145\56\154\157\147\50\47\141\142\143\47\51')
                return tool.encodeToJSCode(str, 'o');
            },
            function(str) {
                return tool.decodeJSCode(str, 'o');
            }
        ]
    }, {
        'selector': '.condition__code-type__js-ox',// 16进制
        'op': [
            function(str) {
                // eval('\x63\x6f\x6e\x73\x6f\x6c\x65\x2e\x6c\x6f\x67\x28\x27\x78\x73\x73\x27\x29')
                return tool.encodeToJSCode(str, 'ox');
            },
            function(str) {
                return tool.decodeJSCode(str, 'ox');
            }
        ]
    }];



    var $encodeInput = $('.condition__type__encode');
    var $input = $('.result__input').find('textarea');
    var $output = $('.result__output').find('textarea');
    operMap.forEach(function(each) {
        $(each.selector)
            .data('encodeFn', each.op[0])
            .data('decodeFn', each.op[1]);
        // body...
    });

    var $conditionBtns = $('.condition__btn');
    $conditionBtns.click(function() {
        var $btn = $(this);
        if (!$btn.is('.condition__btn--selected')) {
            $conditionBtns.removeClass('condition__btn--selected');
            $btn.addClass('condition__btn--selected');
        }
    })

    $('.result__confirm-btn').click(function() {
        var type = $encodeInput.prop('checked') ? 'encodeFn' : 'decodeFn';
        var fn = $('.condition__btn--selected').data(type);
        var res = fn($input.val());
        $output.val(res);
    });

    $('.result__exchange-btn').click(function() {
        $input.val($output.val());
    });

});
