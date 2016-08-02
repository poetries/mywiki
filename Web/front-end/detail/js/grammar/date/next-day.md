# JavaScript 日期之某天的下一天是哪天
解决如题所示的问题，其实只需解决某天所在的月份有几天的问题：如果该天是这个月的最后一天，则下一天为下个月1号；否则，下一天的天的值比该天的值大 1。解决某天所在的月份有几天的问题的难点在于 某年 2 月份有几天。

****
其实 JavaScript 中有更简单的方法。JavaScript 的 Date 对象有个有意思的特性：当设置 date 的月或日的值大于合法值或为负值时，date 会转化成合法值 。如：
```
var date1 = new Date('2015/1/31');
date1.setDate(35); // date1 此时为 2015/2/4。
var date2 = new Date('2015/2/1');
date2.setDate(-1); // date2 此时为 2015/1/30。
var date3 = new Date('2015/1/1');
date3.setMonth(13); // date3 此时为 2016/2/1。
// 注意，月份 1 - 12 对应的是 Month 的值为 0 - 11。
```

因此，解决某天的下一天是哪天这个问题，可以用 Date 的这个特性。实现如下：
```
function getNextDay (date) {
    var res = new Date(date);// 拷贝date
    res.setDate(date.getDate() + 1);
    return res;
}
```

当然，有时候写的时候不注意，这个特性有时会导致看这很诡异的 bug。如：
```
var date = new Date('2016/1/31');
// 此时，想把 date 设置成 2016/2/1
date.setMonth(1);
date.setDate(1);
// 结果 date 的值却是 2016/3/1 ~
```
正确是做法是：
```
var date = new Date('2016/1/31');
// 此时，想把 date 设置成 2016/2/1
date.setDate(1);
date.setMonth(1);
// date 的值是 2016/2/1 ~
```
