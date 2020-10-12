# Hexo写作系列(3) - 文章标题含有双引号"导致页面渲染失败无法打开

## 问题

在用Hexo写文章时，如果文章标题含有双引号`"`，也就是说如果在文件头里的`title`出现双引号，如下：

```yml
---
title: Hexo - 文章标题含有双引号"导致页面渲染失败无法打开
---
```

由于这里的写法属于yml语法，双引号属于特殊符号，上述的title的写法就会在执行`hexo g`时报错，当我们在浏览器里打开这篇文章的页面时就会渲染失败无法打开。

<!--more-->
## 解决方法

我们需要对这里的双引号进行转义，对于这些特殊字符，可以用对应的`HTML字符实体`来替换。

对于双引号，其字符实体是`&#34;`或者`&quot;`。

最终我们在hexo文章的文件头里，应该这样写：

```yml
---
title: Hexo - 文章标题含有双引号&#34;导致页面渲染失败无法打开
---
```

## 补充

当然，对于文件头之外的部分，则是属于markdown语法的部分，此外由于我们的文章会被swig渲染，同样有一些特殊字符，比如 &#123;&#123;&#125;&#125;，如果在代码块之外的地方使用到这些特殊字符，就会报错！对于不同的语言，各自的特殊字符是不一样的。

这里补充下各种常用到的特殊字符的字符实体：

```html
! &#33; — 惊叹号 Exclamation mark
" &#34; &quot; — 双引号 Quotation mark
# &#35; — 数字标志 Number sign
$ &#36; — 美元标志 Dollar sign
% &#37; — 百分号 Percent sign
& &#38; &amp; — 与符号(&) Ampersand
' &#39; — 单引号 Apostrophe
( &#40; — 小括号左边部分 Left parenthesis
) &#41; — 小括号右边部分 Right parenthesis
* &#42; — 星号 Asterisk
+ &#43; — 加号 Plus sign
< &#60; &lt; 小于号 Less than
= &#61; — 等于符号 Equals sign
- &#45; &minus; — 减号
> &#62; &gt; — 大于号 Greater than
? &#63; — 问号 Question mark
@ &#64; — Commercial at
[ &#91; — 中括号左边部分 Left square bracket
\ &#92; — 反斜杠 Reverse solidus (backslash)
] &#93; — 中括号右边部分 Right square bracket
{ &#123; — 大括号左边部分 Left curly brace
| &#124; — 竖线Vertical bar
} &#125; — 大括号右边部分 Right curly brace
```

如果想要在文章中使用空格，直接输入空格是没用的，同样可以使用字符实体来代替，即`&nbsp;`。这个代表不间断空格：non-breaking space。

## 参考链接

* [Hexo 特殊符号的转义问题](https://wxnacy.com/2018/01/12/hexo-specific-symbol/)
* [HTML 字符实体](http://www.w3school.com.cn/html/html_entities.asp)
* [常用特殊符号的HTML代码(HTML字符实体)](https://www.cnblogs.com/xyyt/p/3515397.html)
