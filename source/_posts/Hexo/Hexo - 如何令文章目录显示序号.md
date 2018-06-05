---
title: Hexo - 如何令文章目录显示序号
tags:
  - Hexo
  - NexT
categories:
  - Hexo
abbrlink: 6da50a16
date: 2018-06-05 23:14:09
---
有两种方法，一种是全局生效，一种是对具体某篇文章生效。

## 全局生效

在NexT的主题配置文件 `_config.yml`中启用如下配置：

```html
# Table Of Contents in the Sidebar
# 侧栏文章目录设置
toc:
  enable: true

  # Automatically add list number to toc.
  # 自动为文章目录添加行号
  number: true
```
<!-- more -->
设置为true后就可以对站点下所有文章自动添加序号，如果想取消这个功能，再设置为false即可。

## 对具体某篇文章生效

如果你的某篇文章的标题中已经使用了序号，那么自动为文章目录添加序号的功能依然会失效，这导致你的文章目录出现了赘余的序号，解决方法很简单，在你的文章的文件头添加一行代码即可，如下：

```html
---
title: XXX
date: XXX
toc_number: false
---
```

这样这篇文章就不会被自动添加序号到文章目录里了。