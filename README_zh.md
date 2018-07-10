# lewky.github.io
[README](https://github.com/lewky/lewky.github.io/blob/dev/README.md) | [中文文档](https://github.com/lewky/lewky.github.io/blob/dev/README_zh.md)

这是我的hexo博客代码仓库，你可以通过 :zap: https://lewky.github.io/ 来访问我的博客。

本仓库存在两个分支：
* master
* dev

**master** 分支用来部署 github pages;  
**dev** 分支是使用了我自己定制的NexT主题的一个空的hexo博客，你可以通过克隆该dev分支来得到一个新的不包含任何文章(hello-world文章除外)的hexo博客。

## 使用步骤

1. 创建一个文件夹作为你的博客站点根目录，在该目录下打开 `git bash` 并使用下边的命令克隆dev分支：
```bash
git clone -b dev https://github.com/lewky/lewky.github.io.git ./
```

2. 接着安装项目依赖(请确保已经安装了Node.js，Git和Hexo，另外该步骤会耗时较久，请耐心等待) :
```bash
npm install
```

3. 在本地部署站点进行调试:
```bash
hexo clean
hexo g
hexo s
```

4. 在配置好相关的配置后，通过以下命令将个人博客远程部署到 `GitHub Pages` 上：
```bash
hexo clean
hexo g -d
```

你可以参考我另一个GitHub仓库的 [README.md](https://github.com/lewky/hexo-blog-demo) 来进一步了解完善你的Hexo博客。

## NexT主题个性化

本博客的主题基于 `NexT-Gemini` 主题, 大部分css代码和注释都在下面的文件中：

1. `themes/next/source/css/_custom/custom.styl`
2. `themes/next/source/js/src/custom.js`

## 自定义主题特色

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
* 修改文本标题样式
* 文本首行缩进两个字符