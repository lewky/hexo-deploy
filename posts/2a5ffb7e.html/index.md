# Hexo - Template render error unexpected token

## 问题与分析

今天发现在使用`hexo g`时报错如下：
```
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Template render error: unexpected token: }}
```
<!--more-->

一时间很诧异，因为前几天还可以正常生成静态文件，今天忽然就挂了。看看报错的信息，说是模板渲染失败，因为出现了预期外的标志。因为我刚刚写了新的文章，就出现了这个错误，可以想象到，应该是文章中出现了特殊字符导致hexo命令执行失败了。

百度了下，确实如此。因为在Hexo中，有些特殊字符如果不进行转义的话，在渲染模板时就会报错。

## 解决方法

如果遇到类似的报错，解决方法很简单，就是对这些特殊字符进行转义，需要使用转义标签来将这些特殊字符包括起来，如下：
```
{% raw %}
特殊字符
{% endraw %}

```

比如我的报错是因为使用`{% raw %}}}{% endraw %}`，那么就需要对这对大括号进行转义：
```
{% raw %}
{{ something... }}
{% endraw %}

```

如果是在引用块里，可以随便使用特殊字符；如果是行内引用块，就需要进行转义了。

## 参考链接

* [Hexo的一个小BUG(Template render error)](https://www.jianshu.com/p/738ebe02029b)
* [Hexo 异常 - Template render error unexpected token](https://hoxis.github.io/hexo-unexpected-token.html)
