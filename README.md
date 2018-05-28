# lewky.github.io
[README](https://github.com/lewky/lewky.github.io/blob/dev/README.md) | [中文文档](https://github.com/lewky/lewky.github.io/blob/dev/README_zh.md)

It's a repository for my hexo blog and you can access my blog by :zap: https://lewky.github.io/

There are two branch in this repository :
* master
* dev

**master** branch is deployed by github pages;  
**dev** branch is an empty hexo blog with my own cutomed NexT theme. 

You can clone dev branch to get my hexo blog without posts except hello-world.md.

## How to play

1. create a folder for your blog site and open `git bash` in this folder path, then clone dev branch:
```bash
git clone -b dev https://github.com/lewky/lewky.github.io.git ./
```

2. install dependencies:
```bash
npm install
```

3. deploy your blog in local:
```bash
hexo clean
hexo g
hexo s
```

## Customed NexT theme

This theme is based on `NexT-Gemini` theme, most of css code with comments is in `themes/next/source/css/_custom/custom.styl`. 

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