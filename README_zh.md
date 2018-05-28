# lewky.github.io
[README](https://github.com/lewky/lewky.github.io/blob/dev/README.md) | [中文文档](https://github.com/lewky/lewky.github.io/blob/dev/README_zh.md)

这是我的hexo博客代码仓库，你可以通过 :zap: https://lewky.github.io/ 来访问我的博客。

本仓库存在两个分支：
* master
* dev

**master** 分支用来部署 github pages;  
**dev** 分支是使用了我自己定制的NexT主题的一个空的hexo博客，你可以通过克隆该dev分支来得到一个新的不包含任何文章(hello-world文章除外)的hexo博客。

## 使用步骤

1. 创建一个文件作为你的博客站点根目录，在该目录下打开 `git bash` 并使用下边的命令克隆dev分支：
```bash
git clone -b dev https://github.com/lewky/lewky.github.io.git ./
```

2. 接着安装项目依赖(请确保已经安装了Node.js和hexo) :
```bash
npm install
```

3. 在本地部署站点进行调试:
```bash
hexo clean
hexo g
hexo s
```

## NexT主题个性化

本博客的主题基于 `NexT-Gemini` 主题, 大部分css代码和注释都在 `themes/next/source/css/_custom/custom.styl`. 

* 添加头像挂件(目前只有b站主题，可关闭)
* 添加页面头部彩带(`Fork me on GitHub`) 
* 添加 `by-nc-sa` 许可协议
* 添加建站日志(`siting_log.md`)
* 添加文章显示预览、加密、置顶、字数统计、阅读时长
* 启用搜索功能、顶部加载条
* 启用标签和分类功能
* 启用语法高亮黑色主题
* 启用回到顶部按钮显示百分比
* 修改字体大小，关闭文章目录显示序号功能
* 修改永久链接格式，利于SEO
* 修改 `scaffolds` 目录下的 `post/draft.md` 模板
* 修改站点标题、菜单栏、行内代码块、超链、回到顶部按钮样式
* 改用 `FontAwesome 5`
* 指定 `Markdown` 的解析器，避免部署到 `GitHub`的站点无法正常显示语法高亮黑色主题
* 去掉(难看的)图片边框