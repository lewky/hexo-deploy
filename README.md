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

2. install dependencies(please confirm you have installed Node.js, Git & Hexo in your computer, and it will spend much time on this step, please wait a minute):
```bash
npm install
```

3. deploy your blog in local:
```bash
hexo clean
hexo g
hexo s
```

4. deploy your blog in Github Pages after configuring your personal configuration:
```bash
hexo clean
hexo g -d
```

You can refer to [README.md](https://github.com/lewky/hexo-blog-demo) in my another repository to complete your hexo blog.

## Customed NexT theme

This theme is based on `NexT-Gemini` theme, most of css/js code with comments is in: 

1. `themes/next/source/css/_custom/custom.styl`
2. `themes/next/source/js/src/custom.js`

## Features

### 头像相关

* 圆形头像
* 头像旋转
* 添加头像挂件(目前只有b站主题，可关闭)
* 头像挂件彩蛋(具体什么彩蛋可以看源码)

### 图片相关

* 去掉(难看的)图片边框

### 字体相关

* 使用`Font Awesome 5`
* 修改字体大小

### 页面头部相关

* 页面添加顶部加载条
* 页面右上角添加头部彩带(`Fork me on GitHub`)

### 页面底部相关

* 修改回到顶部按钮样式
* 启用回到顶部按钮显示百分比
* 添加底部 `Hosted by`（如果需要使用自定义域名解析到Coding.net，不建议去掉该项）
* 消除 `Hosted by` 的超链底部线条
* 添加全站字数统计（会延长 `hexo g` 的时间）

### 页面相关

* 添加鼠标点击文字特效
* 修改鼠标指针

### 站点标题

* 修改样式，使用字体阴影

### 菜单栏相关

* 一行显示两列菜单以节省空间
* 点击菜单在右侧显示图标(NexT主题使用的都是FontAwesome的图标)
* 启用标签、分类和搜索功能

### 侧边栏相关

* 添加 `by-nc-sa` 许可协议
* 添加站点首页
* 添加建站日志(`siting_log.md`)
* 修改友链样式

### 文章相关

* 添加文章显示预览、加密、置顶、字数统计、阅读时长
* 启用语法高亮黑色主题
* 指定 `Markdown` 的解析器，避免部署到 `GitHub`的站点无法正常显示语法高亮黑色主题
* 修改永久链接格式，利于SEO
* 修改 `scaffolds` 目录下的 `post/draft.md` 模板
* 修改行内代码块、超链样式
* 修改引用块样式