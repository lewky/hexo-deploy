---
title: NexT主题个性化 - 让所有的文章链接在新窗口打开
tags:
  - Hexo
  - NexT主题个性化
categories:
  - NexT主题个性化
abbrlink: 4d58b14d
date: 2018-05-13 16:49:42
---
打开 `themes\next\layout\_macro\post-collapse.swig`，修改这里的超链的target：

```html
<a class="post-title-link" href="{{ url_for(post.path) }}" itemprop="url">
  {% if post.type === 'picture' %}
    {{ post.content }}
  {% else %}
    <span itemprop="name">{{ post.title | default(__('post.untitled')) }}</span>
  {% endif %}
</a>
```
<!-- more -->

接着打开 `themes\next\layout\_macro\post.swig`，修改这里的超链的target：

```html
	<a class="post-title-link" href="{{ url_for(post.path) }}" itemprop="url">{#
    #}{{ post.title | default(__('post.untitled'))}}{#
  #}</a>
```

在这两个超链里添加 `target="_blank"` ，最终修改如下：

```html
<a class="post-title-link" target="_blank" href="{{ url_for(post.path) }}" itemprop="url">
  {% if post.type === 'picture' %}
    {{ post.content }}
  {% else %}
    <span itemprop="name">{{ post.title | default(__('post.untitled')) }}</span>
  {% endif %}
</a>
```

```html
	<a class="post-title-link" target="_blank" href="{{ url_for(post.path) }}" itemprop="url">{#
    #}{{ post.title | default(__('post.untitled'))}}{#
  #}</a>
```