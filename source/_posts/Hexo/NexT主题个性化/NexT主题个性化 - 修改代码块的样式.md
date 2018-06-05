---
title: NexT主题个性化 - 修改行内代码块的样式
tags:
  - Hexo
  - NexT主题个性化
categories:
  - NexT主题个性化
abbrlink: efd1caf6
date: 2018-05-13 18:11:46
---
> 效果图

![code-block.jpg](/images/posts/next/code-block.jpg)

打开 `themes\next\source\css\_custom\custom.styl`，添加如下样式：
<!-- more -->

```css
/* 行内代码块的自定义样式 */
code {
    color: #d500fc;
    background: rgba(78, 240, 233, 0.42);
    margin: 2px;
    border: 1px solid #d6d6d6;
}
```