---
title: Hexo - GitHub Pages 不支持语法高亮
tags:
  - Hexo
categories:
  - Hexo
abbrlink: 47380
date: 2018-05-12 18:49:03
---
将博客部署到 `GitHub Pages` 和 `Coding Pages` 后发现，前者的页面不支持语法高亮，而后者支持。百度后才知道原来是因为 GitHub 默认使用的 Markdown 解析器不支持语法高亮，解决方法如下：

打开站点配置文件 `_config.yml`，在末尾添加如下内容：

```html
markdown: redcarpet
redcarpet:
    extensions: ["fenced_code_blocks", "autolink", "tables", "strikethrough"]
```
<!-- more -->

接下来重新执行部署三连命令，就会发现 `GitHub Pages` 上部署的页面语法高亮显示成功了。