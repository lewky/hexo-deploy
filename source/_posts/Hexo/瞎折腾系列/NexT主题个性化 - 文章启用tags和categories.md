---
title: NexT主题个性化 - 文章启用tags和categories
tags:
  - Hexo
  - NexT
  - NexT主题个性化
categories:
  - NexT主题个性化
abbrlink: 46218
date: 2018-05-01 16:31:27
---
## 案列

在使用NexT主题并且在主题配置文件中的menu菜单里启用了 tags 和 categories 之后，输入命令：

```bash
hexo n page "tags"
hexo n page "categories"
```

接着生成静态页面并且启动服务器，却发现在博客首页点击这两个菜单没有显示东西。
<!-- more -->

## 解决办法

进入 source/tags 目录，打开 index.md 文件，在文件头末尾添加：

```html
type: tags
```

同样地，进入 source/categories 目录，打开 index.md 文件，在文件头末尾添加：

```html
type: categories
```

接下来执行：

```bash
hexo clean
hexo g
hexo s
```

在本地打开博客首页，点击 tags 和 categories 这两个菜单，发现显示成功。