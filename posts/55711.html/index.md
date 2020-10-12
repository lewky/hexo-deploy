# NexT主题个性化 - 使用FontAwesome 5

NexT主题集成的是4.6.2版本的fontawesome，现在已经出了更高版本的了，修改fontawesome的版本有两种方式。

## 方式一：直接修改主题配置文件

打开主题配置文件 `_config.yml`，修改如下配置：
<!--more-->

```html
  # Internal version: 4.6.2
  # See: http://fontawesome.io/
  fontawesome:
```

在这里的 `fontawesome:` 后面直接添加上 fontawesome 的 CDN 就行了；不过不推荐这种改法，因为版本5的 fontawesome 改变了不少，直接在这里添加 fontawesome 5的 CDN 会导致原本的图标全部显示不出来。

推荐方式二的改法。

## 方式二：修改页面头文件的模板

打开 `themes\next\layout\_partials\head.swig`，找到如下代码：

```html
{% if theme.vendors.fontawesome %}
  {% set font_awesome_uri = theme.vendors.fontawesome %}
{% endif %}
<link href="{{ font_awesome_uri }}" rel="stylesheet" type="text/css" />
```

在上边的代码后插入 fontawesome 5 的 CDN：
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
```

如果这里的CDN链接无效，请去官网复制CDN链接：https://fontawesome.com/get-started

![fontawesome-CDN](/images/posts/next/fontawesome-CDN.jpg)
