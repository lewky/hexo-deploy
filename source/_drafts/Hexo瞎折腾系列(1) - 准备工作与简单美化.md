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

>themes/next/source/css/_custom/custom.styl
themes/next/source/js/src/custom.js
themes/next/layout/_partials/head/custom-head.swig
themes/next/layout/_custom/custom-foot.swig

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

source/tags/index.md:
```html
---
title: 标签
date: 20xx-xx-xx xx:xx:xx
type: tags
---
```

source/categories/index.md:
```html
---
title: 分类
date: 20xx-xx-xx xx:xx:xx
type: tags
---
```

接下来重新使用本地调试三连，就可以看到tags和categories这两个菜单的页面显示正常了。

### 页面右上角添加GitHub彩带

你可以在<a href="https://github.com/blog/273-github-ribbons" target="_blank">这里</a>找到一共12种样式的GitHub彩带，复制其中的超链代码。

在`themes\next\layout\_layout.swig`目录下找到头部彩带相关的代码：

```html
<div class="headband"></div>
```

在这里的div标签内部添加我们刚刚复制的超链代码，并修改超链指向你的GitHub地址：
```html
<div class="headband">
    <a href="https://github.com/lewky"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>
</div>
```

当然我本人并不是很推荐用这种方法，因为这个超链使用的图片有时候会加载很久，最后图片还是挂掉了，我是直接将图片保存到站点的images目录下，然后直接使用自己站点的图片，这样可以避免加载过久甚至图片挂掉的情况。

```html
<div class="headband">
	<a href="https://github.com/lewky" target="_blank"><img style="position: absolute; top: 0; right: 0; border: 0;" src="/images/headband/forkme_right_red.png" alt="Fork me on GitHub"></a>
</div>
```

我只找到了10张彩带图片，可以直接在我的<a href="https://github.com/lewky/lewky.github.io/tree/dev/source/images/headband" target="_blank">GitHub项目</a>中找到这些图片并复制到自己的站点上。

### 页面右上角添加GitHub Corner

这是我后来在其他博客中见到的，可能是6.x.x版本的NexT主题自带的，由于我使用的主题版本较低，只能自己添加了。

还是在`themes\next\layout\_layout.swig`目录下，找到如下代码：

```html
<header id="header" class="header" itemscope itemtype="http://schema.org/WPHeader">
    <div class="header-inner"> {%- include '_partials/header.swig' %} </div>
</header>
```

我们在这个header标签的下边，添加一个超链代码：

```html
<a href="https://github.com/lewky" class="github-corner" target="_blank" title="Follow me on GitHub" aria-label="Follow me on GitHub">
      <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#222; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
	<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
      </svg>
</a>
```

将上边的超链的href改为自己的GitHub地址，然后我们需要修改这个超链的样式，在上文中提及的`themes/next/source/css/_custom/custom.styl`里添加如下代码：

```html
/* GitHub Cornor */
.github-corner :hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
}
@media (max-width: 991px) {
  .github-corner >svg {
    fill: #fff !important;
    color: #222 !important;
  }
  .github-corner .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
@-moz-keyframes octocat-wave {
  0%, 100% {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  20%, 60% {
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    -o-transform: rotate(-25deg);
    transform: rotate(-25deg);
  }
  40%, 80% {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}
@-webkit-keyframes octocat-wave {
  0%, 100% {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  20%, 60% {
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    -o-transform: rotate(-25deg);
    transform: rotate(-25deg);
  }
  40%, 80% {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}
@-o-keyframes octocat-wave {
  0%, 100% {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  20%, 60% {
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    -o-transform: rotate(-25deg);
    transform: rotate(-25deg);
  }
  40%, 80% {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}
@keyframes octocat-wave {
  0%, 100% {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  20%, 60% {
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    -o-transform: rotate(-25deg);
    transform: rotate(-25deg);
  }
  40%, 80% {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}
```

这段长长的css代码是令这个GitHub Corner能够呈现出响应式的效果，当你缩放页面的时候，你会发现页面右上角的GitHub的吉祥物——章鱼猫(Octocat)会随着页面的大小变化而变化！
