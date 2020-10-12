# NexT主题个性化 - 添加文章置顶功能

## 安装插件及其使用方法

在站点根目录执行命令：

```bash
npm uninstall hexo-generator-index --save
npm install hexo-generator-index-pin-top --save
```

接下来在需要置顶的文章头部添加 `top: true` 或者 `top: n`，这里的n是数字，数字越大表示置顶等级越高。
<!--more-->

```html
title: XXX
tags:
  - XXX
categories:
  - XXX
date: XXX
top: 100
```

## 在文章标题下方添加置顶样式

打开 `themes/next/layout/_macro/post.swig`，在 `<div class="post-meta">` 下方添加如下代码：

```css
{% if post.top %}
	<span class="post-meta-item-icon">
	    <i class="fa fa-thumb-tack"></i>
	</span>
	<font color="red">置顶</font>
	<span class="post-meta-divider">|</span>
{% endif %}
```

![encrypt.jpg](/images/posts/next/encrypt.jpg)
