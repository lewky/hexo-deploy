---
title: NexT主题个性化 - 修改语法高亮的主题
tags:
  - Hexo
  - NexT
  - NexT主题个性化
categories:
  - NexT主题个性化
abbrlink: 45565
date: 2018-05-12 13:04:57
---
## 怎么使用语法高亮
语法高亮就是在引入代码时让代码呈现特定的样式，比如下边的代码样式就是语法高亮：

```html
<h2>Hello World!</h2>
```
<!-- more -->

在 Markdown 文件中语法高亮的使用方法是在引入代码的前一行添加三个反引号加上使用的语言名字，然后在引入代码的下一行使用三个反引号结尾。如下所示的格式，表示Java代码的语法高亮：

```html
```java
	code
``````

## 修改语法高亮主题

语法高亮默认的主题比较一般，我们可以换成其他的主题，比如我所使用的就是黑色的主题。

打开主题配置文件，修改如下配置：

```html
# 语法高亮主题
# Code Highlight theme
# Available value:
#    normal | night | night eighties | night blue | night bright
# https://github.com/chriskempson/tomorrow-theme
highlight_theme: night eighties
```

如果修改了语法高亮主题后，部署在 `GitHub Pages` 的站点却还是使用的默认的语法高亮主题，可以参考我的另一篇文章：[Hexo - GitHub Pages 不支持语法高亮](/2018/05/12/Hexo%20-%20GitHub%20Pages%20不支持语法高亮/)。