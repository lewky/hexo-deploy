# Hexo瞎折腾系列(3) - 添加GitHub彩带和GitHub Corner

## 页面右上角添加GitHub彩带

你可以在<a href="https://github.com/blog/273-github-ribbons" target="_blank">这里</a>找到一共12种样式的GitHub彩带，复制其中的超链代码。

在`themes\next\layout\_layout.swig`目录下找到头部彩带相关的代码：

```html
<div class="headband"></div>
```
<!--more-->
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

## 页面右上角添加GitHub Corner

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

此外，当我们将鼠标移动到GitHub Corner的上方时，章鱼猫的手臂还会摆动一下哦~

下边是GitHub Corner的项目地址，一共有10种颜色样式，任君选择！
* [GitHub Corners项目地址](http://tholman.com/github-corners/)
