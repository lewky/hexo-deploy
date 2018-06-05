---
title: NexT主题个性化 - 修改文章内的超链样式
tags:
  - Hexo
  - NexT主题个性化
categories:
  - NexT主题个性化
abbrlink: 770f091e
date: 2018-05-13 17:46:28
---
> `a:link` 效果图

![link.jpg](/images/posts/next/link.jpg)


> `a:hover` 效果图

![hover.jpg](/images/posts/next/hover.jpg)

打开 `themes\next\source\css\_custom\custom.styl`，添加如下样式：
<!-- more -->

```css
/* 文章内链接文本样式 */
.post-body p a,
.post-body li a {
  color: #0593d3;
  border-bottom: none;
  border-bottom: 1px solid #0593d3;
  &:hover {
    color: #fc6423;
    border-bottom: none;
    border-bottom: 1px solid #fc6423;
  }
}
```

这里选择 `.post-body p a` 是为了不影响文章标题和首页 `阅读全文》` 的样式，选择 `.post-body li a` 是为了对列表内的超链也有效果。

总之，我们可以随意定义这里的具体样式。
