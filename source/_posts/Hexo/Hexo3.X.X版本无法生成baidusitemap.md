---
title: Hexo3.X.X版本无法生成baidusitemap
tags:
  - Hexo
categories:
  - Hexo
abbrlink: 49fbb32a
date: 2018-06-12 00:52:52
---
今天安装了`hexo-generator-baidu-sitemap`后，运行`hexo g`报错如下：

![error.jpg](/images/posts/hexo/error.jpg)

<!-- more -->
到了作者的GitHub上发现也有人提了相关的issue，不过都过了相当一段时间了依然没有解决，最后还是自己动手丰衣足食，解决方法很简单，因为Hexo3.X.X版本改变了代码导致toArray()无法使用，我们直接将该方法去掉就行了。

打开 `node_modules\hexo-generator-baidu-sitemap\baidusitemap.ejs`，将这里边的 `post.tags.toArray()` 和 `post.categories.toArray()` 改成 `post.tags` 和 `post.categories`，简单的说就是把这里的 `toArray()` 去掉，新版本的Hexo的tags和categories可以直接遍历。

![code.jpg](/images/posts/hexo/code.jpg)

接下来重新运行 `hexo g` 和 `hexo s`，本地调试成功~