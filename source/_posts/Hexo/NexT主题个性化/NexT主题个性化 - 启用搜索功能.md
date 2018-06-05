---
title: NexT主题个性化 - 启用搜索功能
tags:
  - Hexo
  - NexT主题个性化
categories:
  - NexT主题个性化
abbrlink: 3e5e6b79
date: 2018-05-13 21:59:57
---
## 安装搜索插件

在站点根目录使用 `git bash` 执行命令：

```bash
npm install hexo-generator-searchdb --save
```

## 启用搜索功能

打开主题配置文件 `_config.yml`，修改如下配置：
<!-- more -->

```html
# Local search
# Dependencies: https://github.com/flashlab/hexo-generator-search
# 本地搜索，需要安装 hexo-generator-search
# 站点根目录执行：npm install hexo-generator-searchdb --save
local_search:
  enable: true
  # if auto, trigger search by changing input
  # if manual, trigger search by pressing enter key or search button
  # auto表示改变输入就自动触发搜索
  # manual表示按下回车键或搜索按钮才触发搜索
  trigger: auto
  # show top n results per article, show all results by setting to -1
  # 这里的数字n表示显示每篇文章搜索到的n个结果
  # -1表示显示每篇文章搜索到的全部结果(不建议)
  top_n_per_article: 1
```