---
title: NexT主题个性化 - 去掉图片边框
tags:
  - Hexo
  - NexT主题个性化
categories:
  - NexT主题个性化
abbrlink: 83dcefb7
date: 2018-05-13 23:07:36
---
打开 `themes\next\source\css\_custom\custom.styl`，添加如下CSS代码：

```css
/* 去掉图片边框 */
.posts-expand .post-body img {
    border: none;
    padding: 0px;
}
.post-gallery .post-gallery-img img {
    padding: 3px;
}
```
<!-- more -->