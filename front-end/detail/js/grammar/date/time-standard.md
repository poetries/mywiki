## GMT
[GMT](https://zh.wikipedia.org/wiki/%E6%A0%BC%E6%9E%97%E5%B0%BC%E6%B2%BB%E5%B9%B3%E6%97%B6)是指格林尼治标准时间，它对应位于英国伦敦郊区的皇家格林威治天文台的标准时间。

理论上来说，格林威治标准时间的正午是指当太阳横穿格林威治子午线时（也就是在格林威治上空最高点时）的时间。由于地球在它的椭圆轨道里的运动速度不均匀，这个时刻可能与实际的太阳时有误差，最大误差达16分钟。并且地球自转正在缓慢减速，因此格林威治时间已经不再被作为标准时间使用。现在的标准时间，是由原子钟报时的协调世界时（UTC）。

## UTC
[UTC](https://zh.wikipedia.org/wiki/%E5%8D%8F%E8%B0%83%E4%B8%96%E7%95%8C%E6%97%B6) 是指协调世界时，是最主要的世界时间标准。这个缩写也是有来源的，英语中它是CUT（Cooordinated Universal Time），而法语中它是TUC（Temps Universel Coordonné），由于被希望协调世界时在所有语言中有统一的缩写，最后妥协使用了这个UTC。

如果本地时间比UTC时间快，例如中国、蒙古国、新加坡、马来西亚、菲律宾、澳大利亚西部的时间比UTC快8小时，就会写作UTC+8，俗称东8区。相反，如果本地时间比UTC时间慢，例如夏威夷的时间比UTC时间慢10小时，就会写作UTC-10，俗称西10区。

如果我们在JS 代码中写
```
var now = new Date(); 
```
上面代码中的`now`是本地时间，而不是UTC 时间，如果我们要获得UTC时间，可用
```
var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
```

## DST
[DST](https://zh.wikipedia.org/wiki/%E5%A4%8F%E6%97%B6%E5%88%B6) 是指夏令时间，也叫做日光节约时间（Daylight saving time）。它是由部分国家所实施的在一年中的某一时间段（以夏季为中心，例如美国的4月到10月）内，将时间拨快1小时，以充分利用夏季较长的日光时间，节约能源的时间制度。在实行夏令时的国家中，不同国家也会有不同的夏令时实施日期。

## 拓展阅读
* [Date类型：了解日期和时间]([http://acgtofe.com/posts/2014/08/a-tale-of-date/](http://acgtofe.com/posts/2014/08/a-tale-of-date/))

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
