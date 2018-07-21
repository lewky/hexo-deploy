---
title: Hexo瞎折腾系列(2) - 添加背景图片轮播
tags:
  - Hexo瞎折腾系列
  - Next主题
  - 主题个性化
categories:
  - Hexo
  - 瞎折腾系列
abbrlink: 576ee548
date: 2018-07-19 23:00:36
---
## 动态背景图片插件`jquery-backstretch`

`jquery-backstretch`是一款简单的jQuery插件，可以用来设置动态的背景图片，以下是官方网站的介绍。	

>A simple jQuery plugin that allows you to add a dynamically-resized, slideshow-capable background image to any page or element.

可以直接在页面中引入该插件的cdn来调用函数，也可以直接下载下来使用，这是<a href="https://www.bootcdn.cn/jquery-backstretch/">官方地址</a>。<!-- more -->

## jquery-backstretch的使用方法

### 引入该插件的cdn

打开`themes\next\layout\_custom\custom-foot.swig`，引入该背景图片插件的cdn：

```html
{#
Custom foot in body, Can add script here.
#}
<!-- 图片轮播js文件cdn -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"></script>

<!-- 自定义的js文件 -->
<script type="text/javascript" src="/js/src/custom.js"></script>
```

需要注意的是，我们要引入的插件cdn，都需要在自定义的js文件`custom.js`之前引入才行！否则，插件会在访问页面时无法生效，可以在浏览器的控制台看到报错。

### 调用`backstretch`函数

在`themes\next\source\js\src\custom.js`中添加如下代码：

```html
/* 轮播背景图片 */
$(function () {
	$.backstretch([  
		  "/images/background/saber1.jpg",
		  "/images/background/saber2.jpg",
		  "/images/background/bg1.jpg"
	], { duration: 60000, fade: 1500 });  
});
```

这里可以随意添加你想要轮播的图片，但要确保图片路径是正确的，比如我的背景图片就存放在站点根目录下的`images/background/`目录下。

然后`duration`指的是轮换图片的时间，单位是毫秒，也就是说这里的代码表示一分钟就轮换到下一张图片；

`fade`指的是轮换图片时会有个渐进渐出的动作，而这个过程需要花费的时间单位也是毫秒，如果不加上这个参数，就表示离开轮换成下一张图片。

注意这里的`$.backstretch`指的是对整个页面设置背景图片，我们也可以专门给某个元素设置背景图片，如下：

```html
$(function () {
	$(".saber1").backstretch(["/images/background/saber1.jpg"]);  
	$(".saber2").backstretch(["/images/background/saber2.jpg"]);  
});
```

如果只有一张图片，就没必要设置`duration`和`fade`参数了。

### 为背景图片设置样式

虽然我们设置好了背景图片，但如果页面的许多元素是不透明的，背景图片可能并不能很好地被看见，所以我们可以对背景图片和其他的页面元素进行设置样式。

首先为背景图片设置透明度，因为有的图片颜色比较深厚，而页面多为白色，然后造成喧宾夺主的感觉。

```css file:themes\next\source\css\_custom\custom.styl
/* 背景图片透明度 */
.backstretch {
    opacity: .75;
}
```

接下来设置页面元素透明度，需要注意的是，如果我们在主题配置文件中启用了搜索功能，那么就不能简单粗暴地直接将整个页面都设置透明度，这会导致搜索框失效，无法正常使用。原因是因为搜索框是通过jQuery临时添加的，如果整个页面都设置了透明度，会导致搜索框的`z-index`失效而无法触发点击事件。

我在折腾了一段时间后，终于想到了个取巧的方法，那就是将搜索框的父元素设置为白色透明的，而其他页面元素则直接设置透明度，如下：

```css file:themes\next\source\css\_custom\custom.styl
/* 页面透明度 */
.content-wrap, .sidebar {
    opacity: .9 !important;
}
.header-inner {
    background: rgba(255, 255, 255, 0.9) !important;
}
```
