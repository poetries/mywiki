# 表单验证
## 用HTML规范来做
通过元素上的`validity`来知道表单元素的验证情况。其值形如
```
{
  badInput: false
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: false,
  valueMissing: true
}
```
badInput，customError，valueMissing是各种错误情况，如果值是合法的，valid才为true。具体的字段的意义见[HTML规范](https://html.spec.whatwg.org/multipage/forms.html#validitystate)    

demo
```
document.querySelector('.number-input').validity;//知道表单元素的验证情况
document.querySelector('.number-input').addEventListener('change', function(event) {
    console.log('valid status %o', event.target.validity);
});
```

## 用验证组件
用插件[jquery-validation](https://github.com/jzaefferer/jquery-validation)。见[这里](https://github.com/iamjoel/front-end-plugins/tree/master/detail/validate)

## 参考
* [Input validity in the HTML spec](http://ianmcnally.me/blog/2015/6/25/input-validity-in-the-html-spec)