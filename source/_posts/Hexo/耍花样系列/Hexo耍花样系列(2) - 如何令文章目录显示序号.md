---
title: Hexo耍花样系列(2) - 如何令文章目录显示序号
tags:
  - Hexo耍花样系列
  - NexT主题
  - NexT写作技巧
categories:
  - Hexo
  - 耍花样系列
abbrlink: 6da50a16
date: 2018-06-05 23:14:09
---
## 前言

NexT主题会自动为每一篇文章生成目录，这个目录可以通过配置来控制是否生成对应的序号。毕竟有时候我们会给文章的小标题写上序号，有时候又会懒得去写，这个时候这个配置就很重要了。

有两种方法来实现这个效果，一种是全局生效，一种是对具体某篇文章生效。
<!-- more -->
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

设置为true后就可以对站点下所有文章自动添加序号，如果想取消这个功能，再设置为false即可。

## 对具体某篇文章生效

如果你在文章的小标题中已经使用了序号，那么自动为文章目录添加序号的功能会导致你的文章目录出现了赘余的序号，解决方法很简单，在你的文章的文件头添加一行代码即可，如下：

```html
---
title: XXX
date: XXX
toc_number: false
---
```

这样这篇文章就不会被自动添加序号到文章目录里了。