# lewky.github.io
My hexo blog:zap:https://lewky.github.io/

## How to play

This repository has two branch:
* master
* dev

**Master** branch is deployed by github pages and **dev** branch is an empty hexo blog with my own configuration.   
* You can clone dev branch to get my hexo blog without posts.

```bash
git clone -b dev https://github.com/lewky/lewky.github.io.git
```
* then install dependencies

```bash
npm install
```

## Customed NexT theme

This theme is based on NexT-Gemini theme.

* 添加头像挂件(目前只有b站主题，可关闭)
* 添加页面头部彩带(`Fork me on GitHub`) 
* 添加 `by-nc-sa` 许可协议
* 添加建站日志(`siting_log.md`)
* 添加文章显示预览、加密、置顶、字数统计、阅读时长
* 启用搜索功能、顶部加载条
* 启用标签和分类功能
* 启用语法高亮黑色主题
* 回到顶部按钮显示百分比
* 修改字体大小，关闭文章目录显示序号功能
* 修改永久链接格式，利于SEO
* 修改 `scaffolds` 目录下的 `post/draft.md` 模板
* 修改站点标题、菜单栏、行内代码块、超链、回到顶部按钮样式
* 改用 `FontAwesome 5`
* 指定 `Markdown` 的解析器，避免部署到 `GitHub`的站点无法正常显示语法高亮黑色主题
* 去掉(难看的)图片边框