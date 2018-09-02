---
title: css - 单词的自动换行问题
abbrlink: 4d6b513d
date: 2018-09-02 22:49:52
tags:
  - 前端
  - css
categories:
  - 前端
---
转载自：[解决文档中有url链接时被强制换行的问题](https://blog.csdn.net/u011565547/article/details/77198026)

## 问题

当行内出现很长的英文单词或者url的时候，会出现自动换行的问题，为了美化页面，往往会希望这些很长的英文单词或者url能够断开来，超出的部分换行到下一行。

## 解决方案

可以通过使用两个属性来实现该需求：
<!-- more -->

```css
word-wrap:break-word;
word-break:break-all;
```

### word-wrap

`word-wrap`用来控制换行，有两种取值：
　　normal 
　　break-word（此值用来强制换行，内容将在边界内换行，中文没有任何问题，英文语句也没问题。但是对于长串的英文，就不起作用。）

### word-break

`word-break`用来控制断词，有三种取值：
　　normal
　　break-all（是断开单词。在单词到边界时，下个字母自动到下一行。主要解决了长串英文的问题。）
　　keep-all（是指Chinese, Japanese, and Korean不断词，一句话一行，可以用来排列古诗哟~）

