# NexT主题个性化 - 让所有的文章链接在新窗口打开

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
<!--more-->

接着打开 `themes\next\layout\_macro\post.swig`，修改这里的超链的target：

```html
	<a class="post-title-link" href="{{ url_for(post.path) }}" itemprop="url">{#
    #}{{ post.title | default(__('post.untitled'))}}{#
  #}</a>
```

在这两个超链里添加 `target="_blank"` ，最终修改如下：

![target_blank.jpg](/images/posts/next/target_blank.jpg)
