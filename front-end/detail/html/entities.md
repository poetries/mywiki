# HTML 转义字符
HTML 转义字符也叫字符实体。

在 HTML 中，某些字符是预留的。如，在 HTML 中不能使用小于号（<）和大于号（>），这是因为浏览器会误认为它们是标签。如果希望正确地显示预留字符，我们必须在 HTML 源代码中使用字符实体（character entities）。

显示字符实体可用实体名称或实体编号。

## 常用的字符实体

| 结果        | HTML实体名称          | HTML实体编号  | 十六进制 | 在 CSS content 中 | 8 进制            |
| :-----------|:-------------         |:-----------   |:------   |:-------------     |:-----             |
|  空格       | `&nbsp;`              | `&#160;`      |%A0       |content:"\00a0";   |`alert('\240')`    |
|  <       	  | `&lt;`                | `&#60;`       |%3C       |content:"\003c";   |`alert('\74')`     |
|  >       	  | `&gt;`                | `&#62;`       |%3E       |content:"\003e";   |`alert('\76')`     |
|  &       	  | `&amp;`               | `&#38;`       |%26       |content:"\0026";   |`alert('\46')`     |
|  "       	  | `&quot;`              | `&#34;`       |%22       |content:"\0022";   |`alert('\42')`     |
|  ©       	  | `&copy;`              | `&#169;`      |%A9       |content:"\00a9";   |`alert('\251')`    |
|  ®       	  | `&reg;`               | `&#174;`      |%AE       |content:"\00ae";   |`alert('\256')`    |
|  ×       	  | `&times;`             | `&#215;`      |%D7       |content:"\00d7";   |`alert('\327')`    |


## 参考
* [HTML ISO-8859-1 支持的字符集](http://www.w3school.com.cn/tags/html_ref_entities.html)
* [Glyphs](https://css-tricks.com/snippets/html/glyphs/)
