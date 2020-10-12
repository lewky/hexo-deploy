# Hexo瞎折腾系列(1) - 准备工作与简单美化

## 前言

网上有不少相关的帖子，不过版本会比较旧，而不同版本可能存在代码不同的问题，不过大部分还是大同小异，本系列就不啰嗦重复了，基本只会按照本人所使用的版本以及个人所使用到的内容来进行介绍。

该系列是对我所使用的Next主题进行个性化定制，涉及到js和css等的修改，还有各种插件的使用；另一个系列是针对Next主题进行一些写作技巧的介绍与运用，希望能对大家有所帮助。有疑问的朋友可以给我留言，我会尽可能回复`O(∩_∩)O`。

<!--more-->

我所使用的Hexo和NexT的版本如下：

```bash
hexo: 3.7.1
next: 5.1.4
```

## 关于配置文件

对于使用了Next主题的Hexo静态博客，存在着两个至关重要的配置文件`_config.yml`。在本系列中，统一将位于站点根目录下的该文件称为`站点配置文件`，将位于`themes\next`目录下的该文件称为`主题配置文件`。

## 准备工作：添加美化博客的相关文件

本系列会使用到大量的css与JavaScript的相关内容，为了更有效率与可观赏性的美化博客，我们将这些美化相关的东西都尽可能地写到一类文件中，方便日后查询与修改。譬如下边的几个文件里，就存放了博客的大部分美化内容：

1. themes/next/source/css/_custom/custom.styl
2. themes/next/source/js/src/custom.js
3. themes/next/layout/_partials/head/custom-head.swig
4. themes/next/layout/_custom/custom-foot.swig


