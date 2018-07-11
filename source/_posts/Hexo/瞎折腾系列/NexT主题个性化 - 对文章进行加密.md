---
title: NexT主题个性化 - 对文章进行加密
tags:
  - Hexo
  - NexT
  - NexT主题个性化
categories:
  - NexT主题个性化
password: 123
abbrlink: 15308
date: 2018-05-12 18:28:11
---
{% cq %}
<font color="red">阅读本文前需要先填写密码 `123`</font>
{% endcq %}

## 修改 JS 代码

打开 `themes\next\layout\_partials\head.swig`，在文件的开头位置找到如下代码：

```html
<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<meta name="theme-color" content="{{ theme.android_chrome_color }}">
```
<!-- more -->

在上边代码的末尾添加如下代码：

```html
<script>
    (function(){
        if('{{ page.password }}'){
            if (prompt('请输入文章密码') !== '{{ page.password }}'){
                alert('密码错误！');
		if (history.length === 1) {
		    window.opener = null;
		    window.open('', '_self');
		    window.close();
                } else {
                    history.back();
                }
            }
        }
    })();
</script>
```

注意：网上其他的帖子是在这里选择输入密码错误后进行回退历史的操作，代码如下：

```html
<script>
    (function(){
        if('{{ page.password }}'){
            if (prompt('请输入文章密码') !== '{{ page.password }}'){
                alert('密码错误！');
                history.back();
            }
        }
    })();
</script>
```

我经过测试发现，这段代码有问题：
如果当前页面是新打开的窗口，其历史页面只有一个，也就是`history.length === 1`时，就算不输入密码或者输入错误的密码，也会在提示密码错误之后成功进入文章页面！！！

所以我们使用改良后的JS代码。

## 给某篇文章设置密码

添加完脚本代码，接下来在想要加密的文章的文件头加上 `password` 属性就行了，如下：

```html
---
title: XXX
date: XXX
tags:
  - XXX
categories:
  - XXX
password: 123
---
```

这样在打开这篇文章时只有输入了123这个密码才可以打开成功。