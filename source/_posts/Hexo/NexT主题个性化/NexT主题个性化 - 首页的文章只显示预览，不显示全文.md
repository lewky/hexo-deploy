---
title: NexT主题个性化 - 首页的文章只显示预览，不显示全文
tags:
  - Hexo
  - NexT主题个性化
categories:
  - NexT主题个性化
abbrlink: 62111
date: 2018-05-07 23:13:55
---
## 文章摘要设置

打开主题配置文件 _config.yml 文件，找到如下：

```html
# Automatically Excerpt. Not recommend.
# Please use <!-- more --> in the post to control excerpt accurately.
auto_excerpt:
  enable: false
  length: 150
```

把这里的false改为true就可以了在首页启动显示文章预览了，length是显示预览的长度。

这里我们可以通过在文章使用`<!-- more -->`标志来精确控制文章的摘要预览，比如这篇文章就是在这个段落的末尾添加了该标志，所以本文在首页的预览就会显示到这个段落为止。
<!-- more -->

## 其他的文章配置

```html
# ---------------------------------------------------------------
# Post Settings
# ---------------------------------------------------------------

# Automatically scroll page to section which is under <!-- more --> mark.
# 自动将页面滚动到<!-- more -->标记下的地方。
scroll_to_more: false

# Automatically saving scroll position on each post/page in cookies.
# 自动保存每篇文章或页面上一次滚动的地方。
save_scroll: false

# Automatically excerpt description in homepage as preamble text.
# 自动在首页对文章进行摘要描述作为前言文本。
excerpt_description: true

# Automatically Excerpt. Not recommend.
# Please use <!-- more --> in the post to control excerpt accurately.
# 自动摘要。不推荐。
# 请在文章中使用<!-- more -->标志来精确控制摘要长度。
auto_excerpt:
  enable: true
  length: 150

# Post meta display settings
# 文章元数据展示设置
post_meta:
  # 文本显示
  item_text: true
  # 创建时间
  created_at: true
  # 更新时间
  updated_at: true
  # 目录分类
  categories: true

# Post wordcount display settings
# Dependencies: https://github.com/willin/hexo-wordcount
# 文章字数展示设置
post_wordcount:
  # 文本显示
  item_text: true
  # 文章字数统计
  wordcount: true
  # 阅读时长
  min2read: true
  # 站点总字数统计
  totalcount: false
  # 该post_wordcount的所有设置另起一行显示
  separated_meta: true
```

