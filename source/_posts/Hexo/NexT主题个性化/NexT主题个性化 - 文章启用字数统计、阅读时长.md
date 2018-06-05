---
title: NexT主题个性化 - 文章启用字数统计、阅读时长
tags:
  - Hexo
  - NexT主题个性化
categories:
  - NexT主题个性化
abbrlink: 22195
date: 2018-05-12 15:32:06
---
## 安装 wordcount 插件

在站点根目录打开 git bash，输入：

```bash
npm i --save hexo-wordcount
```

该插件的具体使用方法可以参考 GitHub 上的仓库：https://github.com/willin/hexo-wordcount
<!-- more -->

## 在主题配置文件启用该插件

NexT主题本身就集成了该插件，在安装了该插件后直接启用就行了。
进入主题配置文件 `_config.yml`，修改如下配置：

```html
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

## 自定义字数计数的显示样式

启用了该插件后的显示样式也是可以自己修改的，进入 `themes\next\layout\post.swig`，找到如下代码，这里可以修改字数统计的样式：

```html
{% if not theme.post_wordcount.separated_meta %}
  <span class="post-meta-divider">|</span>
{% endif %}
<span class="post-meta-item-icon">
  <i class="fa fa-file-word-o"></i>
</span>
{% if theme.post_wordcount.item_text %}
  <span class="post-meta-item-text">{{ __('post.wordcount') }}&#58;</span>
{% endif %}
<span title="{{ __('post.wordcount') }}">
  {{ wordcount(post.content) }}
</span>
```

下边是阅读时长的代码：

```html
{% if theme.post_wordcount.min2read %}
  <span class="post-meta-item-icon">
    <i class="fa fa-clock-o"></i>
  </span>
  {% if theme.post_wordcount.item_text %}
    <span class="post-meta-item-text">{{ __('post.min2read') }} &asymp;</span>
  {% endif %}
  <span title="{{ __('post.min2read') }}">
    {{ min2read(post.content) }}
  </span>
{% endif %}
```

改完样式后，再去 `themes\next\languages` 目录下找到你所使用的语言对应的 `yml` 文件，修改要显示的文本。比如我使用的语言是 `zh-Hans`，就修改 `zh-Hans.yml`里的文本：

```html
post:
  wordcount: 本文共计
  min2read: 阅文耗时
  totalcount: Site words total count
```