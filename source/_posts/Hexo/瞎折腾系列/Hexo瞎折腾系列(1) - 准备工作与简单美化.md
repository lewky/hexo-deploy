---
title: Hexo瞎折腾系列(1) - 准备工作与简单美化
tags:
  - Hexo瞎折腾系列
  - Next主题
  - 主题个性化
categories:
  - Hexo
  - 瞎折腾系列
abbrlink: ef301a4d
date: 2018-07-11 23:37:24
---
## 前言

网上有不少相关的帖子，不过版本会比较旧，而不同版本可能存在代码不同的问题，不过大部分还是大同小异，本系列就不啰嗦重复了，基本只会按照本人所使用的版本以及个人所使用到的内容来进行介绍。

该系列是对我所使用的Next主题进行个性化定制，涉及到js和css等的修改，还有各种插件的使用；另一个系列是针对Next主题进行一些写作技巧的介绍与运用，希望能对大家有所帮助。有疑问的朋友可以给我留言，我会尽可能回复`O(∩_∩)O`。<!-- more -->

我所使用的Hexo和NexT的版本如下：

```bash
hexo: 3.7.1
next: 5.1.4
```

## 关于配置文件

<div class="note info"><p>对于使用了Next主题的Hexo静态博客，存在着两个至关重要的配置文件`_config.yml`。在本系列中，统一将位于站点根目录下的该文件称为`站点配置文件`，将位于`themes\next`目录下的该文件称为`主题配置文件`。</p></div>

## 准备工作：添加美化博客的相关文件

本系列会使用到大量的css与JavaScript的相关内容，为了更有效率与可观赏性的美化博客，我们将这些美化相关的东西都尽可能地写到一类文件中，方便日后查询与修改。譬如下边的几个文件里，就存放了博客的大部分美化内容：

1. themes/next/source/css/_custom/custom.styl
2. themes/next/source/js/src/custom.js
3. themes/next/layout/_partials/head/custom-head.swig
4. themes/next/layout/_custom/custom-foot.swig

除了第一个文件`custom.styl`保存的是css代码，另外三个文件都是保存的js代码。这几个文件分别会在页面的以下位置中被引入：

```html
<html>
  <head>
    ....
    {{ custom.styl }}  //css
    ....
    {{ custom-head.swig }}  //js
    ....
  </head>
  <body>
    ....
    ....
    {{ custom-foot.swig }}  //js
    {{ custom.js }}  //js
  </body>
</html>
```

这里的`custom.styl`，`custom-head.swig`是原本的NexT主题自带的，另外两个是我自己添加的，之所以又添加了另外两个js文件，是因为在页面的不同地方引入js文件会对页面产生不一样的效果与影响。

### 添加 custom-foot.swig 文件

在`themes/next/layout/_custom/`目录下添加`custom-foot.swig`文件，该文件内容如下：

```html
{#
Custom foot in body, Can add script here.
#}
<!-- 自定义的js文件 -->
<script type="text/javascript" src="/js/src/custom.js"></script>
```

接着修改`themes\next\layout\_layout.swig`，在body标签的闭合标签前添加一行代码，表示将我们新添加的`custom-foot.swig`文件包括进去：

```html
<body>
  ....

  {% include '_custom/custom-foot.swig' %}
</body>
</html>
```

这个文件的作用是负责引入我们想要的js文件，比如其他第三方js的cdn等等。因为页面在引入js文件时是阻塞式的，如果我们在页面的最开始就引入这些js文件，而这些文件又比较大，会造成页面在渲染时长时间处于白屏状态。

### 添加 custom.js 文件

在`themes/next/source/js/src`目录下添加`custom.js`文件，该文件用来存放我们自己写的js函数等等，需要注意的是，我们之前是在`custom-foot.swig`文件中的script标签里引入了该文件，也就是说，在该文件里，我们不能再自己添加script标签了，直接书写js函数就行了，如下所示：

```html
/* 返回随机颜色 */
function randomColor() {
	return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}
```

## 页面的简单美化

由于很多大佬的博客都有很详尽的美化教程，这里我就不赘述了，只简单介绍下比较少人讲述到的部分简单美化。

### 改变页面的字体大小

打开 `themes\next\source\css\_variables\base.styl`，该文件保存了一些基础变量的值，我们找到`$font-size-base`，将值改为`16px`。

```html
// Font size
$font-size-base           = 16px
```

这个文件里定义了很多常量，有兴趣的可以自己去琢磨琢磨，修改一些其他的变量。

### 文章启用tags和categories

可能是该版本的NexT主题的关系，在我第一次使用NexT主题时，折腾了很久都没办法让菜单栏里的tags和categories的页面生效，一直显示白屏。后来终于在知乎找到答案，首先我们需要将某篇文章设置tags和categories，如下：

```html
---
title: Test
tags:
  - MyTag
categories:
  - MyCategory
date: 20xx-xx-xx xx:xx:xx
---
```

接下来是重点了，首先确定是否已经在主题配置文件中启用了tags和categories这两个菜单，如下：

```html
menu:
  home: / || fas fa-home
  archives: /archives/ || fas fa-archive
  categories: /categories/ || fas fa-th
  tags: /tags/ || fas fa-tags
```

接着确定是否在source目录下是否已经存在tags和categories这两个文件夹，如果不存在需要运行下边的命令：

```bash
hexo n page tags
hexo n page categories
```

运行之后会在source目录下生成对应的两个文件夹，在文件夹下会存在一个index.md文件，打开这两个index.md文件，分别添加`type: tags`和`type: categories`，如下：

```html file:~/source/tags/index.md
---
title: 标签
date: 20xx-xx-xx xx:xx:xx
type: tags
---
```

```html file:~/source/categories/index.md
---
title: 分类
date: 20xx-xx-xx xx:xx:xx
type: categories
---
```

接下来重新使用本地调试三连，就可以看到tags和categories这两个菜单的页面显示正常了。

### 去掉图片边框

NexT主题默认会有图片边框，不太好看，我们可以把边框去掉。打开 `themes\next\source\css\_custom\custom.styl`，添加如下CSS代码：

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

### 修改语法高亮的主题

语法高亮就是在引入代码时让代码呈现特定的样式，而在Markdown文件中语法高亮的使用方法是在引入代码的前一行添加三个反引号加上使用的语言名字，然后在引入代码的下一行使用三个反引号结尾。

如下所示的格式，就表示html代码的语法高亮：

```html
<h2>Hello World!</h2>
```

其源码如下：

	```html
	<h2>Hello World!</h2>
	```

由于NexT默认的语法高亮的主题比较一般，我们可以换成其他的主题，比如我所使用的就是黑色的主题。

打开主题配置文件，修改如下配置：

```html
# 语法高亮主题
# Code Highlight theme
# Available value:
#    normal | night | night eighties | night blue | night bright
# https://github.com/chriskempson/tomorrow-theme
highlight_theme: night eighties
```

### 指定`Markdown`的解析器

上边我们设置了语法高亮后，虽然在本地调试没有问题，然而当我们将博客部署到`GitHub Pages`和 `Coding Pages`后却发现，前者的页面不支持语法高亮，而后者支持。百度后才知道原来是因为 GitHub 默认使用的 Markdown 解析器不支持语法高亮，解决方法如下：

打开站点配置文件`_config.yml`，在末尾添加如下内容：

```html
markdown: redcarpet
redcarpet:
    extensions: ["fenced_code_blocks", "autolink", "tables", "strikethrough"]
```
<!-- more -->

接下来重新执行部署三连命令，就会发现 `GitHub Pages` 上部署的页面语法高亮显示成功了。

### 推荐一些写得很齐全的文章链接

1. <a href="https://segmentfault.com/a/1190000009544924">hexo的next主题个性化配置教程</a>
2. <a href="https://reuixiy.github.io/technology/computer/computer-aided-art/2017/06/09/hexo-next-optimization.html">打造个性超赞博客Hexo+NexT+GithubPages的超深度优化</a>