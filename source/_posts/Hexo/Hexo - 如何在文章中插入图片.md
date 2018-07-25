---
title: Hexo - 如何在文章中插入图片
tags:
  - Hexo
categories:
  - Hexo
abbrlink: 12046
date: 2018-05-09 00:41:16
---

网上有不少办法，有的是启用配置文件中的属性，有的则是安装插件，这里只介绍最简单的一种方法。

* 在 source/ 目录下新建一个文件夹，比如 images；在该文件夹下存放各种图片资源，比如 test.jpg；
* 新建一篇文章，在文章中使用markdown的插入图片语法：

```html
![test](/images/test.jpg)
```

* 这里使用的是绝对路径，如果使用相对路径比如`images/test.jpg`可能会无法访问到该图片资源。建议在博客或者配置中都使用绝对路径。

<!-- more -->