---
title: 'Hexo搭建博客教程(1) - 安装环境与本地搭建'
tags:
  - Hexo
  - Hexo-blog-demo
  - Hexo搭建博客教程
categories:
  - Hexo
  - 搭建博客教程
abbrlink: 22143
date: 2018-04-24 22:06:44
toc_number: false
---
> 前言

搭建个人博客一般有两种选择，一个是使用WordPress，但是需要将博客搭建在服务器上，不过搭建好后写文章方便，适合没有程序基础的人使用。另一个是使用Hexo，相对简洁高效，不需要服务器，既可以部署在本地，也可以将博客部署到GitHub Pages上，支持Markdown语法，缺点是需要有Git基础，写文章比WordPress麻烦点。

初次使用Hexo来搭建个人博客，确实比较手忙脚乱，这里记录一下流程，希望对大家能有所帮助。
<!-- more -->

（注：本文是只针对Windows平台的搭建教程）

可以点击这里[查看](https://lewky.github.io/hexo-blog-demo)该Hexo博客Demo的样子；有兴趣的也可以戳下[这里](https://lewky.github.io/)看看我的个人博客。

> How to play

本教程一共分为3章：

* 第一章是安装环境和本地搭建
* 第二章是博客的个性化配置
* 第三章是将博客部署到 GitHub Pages

请根据自身需要选择章节，以节省时间：

* 想要自己从零开始搭建个人博客的，可以从<a href="https://lewky.github.io/posts/22143.html" target="_blank">第一章</a>开始看起；
* 懒得自己搭建的，请将本项目clone到本地，本项目是一个全新的Hexo博客Demo，并且已经安装配置好了 NexT 主题。此外，还请：
	* 根据<a href="https://lewky.github.io/posts/22143.html" target="_blank">第一章</a>安装好相应的环境
	* 根据<a href="https://lewky.github.io/posts/38619.html" target="_blank">第二章</a>修改个人博客配置
	* 根据<a href="https://lewky.github.io/posts/1657.html" target="_blank">第三章</a>将博客部署到 GitHub Pages
* 已在本地搭建好个人博客，想要了解怎么将博客部署到 GitHub Pages 的，可以从<a href="https://lewky.github.io/posts/1657.html" target="_blank">第三章</a>看起

另外，由于Hexo及其主题的配置文件都是英文的，所以本项目对部分配置文件添加了中文注释，有兴趣的可以另行拷贝。

## 一、安装环境

* 安装Node.js
* 安装Git
* 安装Hexo

### 1.1 安装Node.js

Hexo是一个基于Node.js的快速、简洁且高效的静态站点生成框架，想要安装Hexo，需要先安装Node.js，官网的安装包有两种，一种是安装程序.msi文件，一种是.zip压缩包，这里选择.msi文件，安装后会自动配置好环境变量。

> [下载链接](https://nodejs.org/en/download/)

### 1.2 安装Git

Git就不多说了，作为开发者或多或少都会接触过吧，直接前往官网下载安装包即可。操作教程网上也是一堆，这里就不赘述了。

> [下载链接](https://git-scm.com/)

如果Git和Node.js的环境变量都配置好了，可以通过在cmd中确认安装结果。

```Bash
git --version
node -v
```
### 1.3 安装Hexo

安装好Node.js，就可以使用npm来安装Hexo

```Bash
npm install -g hexo-cli
```

安装完毕后，可以通过`hexo version`来确认是否安装成功。

## 二、开始搭建个人博客

千里之行，始于足下，在安装好所有的环境之后，我们终于可以开始搭建博客的第一步了。

### 2.1 初始化Hexo项目

首先是选择一个文件夹，用来给我们我们的个人博客的存放各种文件。接着进入该文件夹的路径，打开cmd命令窗口，这里有两种打开方式：

1. 按住Shift，同时点击鼠标右键，选择`在此处打开命令窗口`。
2. 在上方的地址栏里输入`cmd`，接着回车即可快速打开命令窗口。

当然，你也可以直接`Win+R`然后输入`cmd`来打开命令窗口，不过需要再通过cd命令将路径切换到你指定的文件夹。

接着输入指令来初始化你的博客

```Bash
hexo init
```

初始化成功后，你会看到

> Start blogging with Hexo!

### 2.2 生成静态页面文件

接下来，执行命令

```Bash
hexo g
```
该命令用来生成静态页面文件到public目录，Hexo会将 source 文件夹中除 posts 文件夹之外，以下划线(`_`)开头命名的文件或文件夹、以及隐藏的文件将会被忽略。Markdown 和 HTML 文件会被解析并放到 public 文件夹，而其他文件夹会被拷贝过去。

最后，我们只要启动Hexo服务器就行了。

### 2.3 本地启动Hexo服务器

```Bash
hexo s --debug
```

Hexo启动服务器的速度非常快，很快你就可以看到

> Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.

恭喜你，你的个人博客已经搭建成功了，接下来只要在浏览器输入`http://localhost:4000/`就可以在本地访问你的博客了。

这里使用`hexo s`也可以启动服务器，只不过加上`--debug	`参数，如果运行中出错可以看到错误信息。

### 2.4 关闭Hexo服务器

要想关闭服务器，只需要在命令窗口按下`Ctrl+C`就可以了，这个组合键不仅仅用于关闭服务器，事实上你在cmd窗口中任何执行中的命令都可以用这个组合键来结束命令，只要连按两次该组合键就可以连输入Y或者N都不用。

## 三、常用的命令

```Bash
hexo new "postName"  #新建文章
hexo new page "pageName" # 新建页面
hexo generate # 生成静态页面至public目录
hexo server # 启动服务器(默认端口4000，'ctrl+c'关闭server)
hexo deploy # 项目部署
hexo help # 查看帮助
hexo version # 查看Hexo的版本
hexo clean # 清除Hexo的缓存
```

上边的一些命令可以使用简写

```Bash
hexo n
hexo g
hexo d
hexo s
```

### 3.1 本地调试三连

```bash
hexo clean
hexo g
hexo s --debug
```

### 3.2 远程部署三连

```bash
hexo clean
hexo g
hexo d
```

注：在使用部署命令时，需要先用npm安装 hexo-deployer-git 插件：

	npm install hexo-deployer-git --save

## 四、撰写第一篇博文

Hexo撰写博文也不难，分为 post 和 draft 两种，其中 post 存放在 source/_posts 目录下，draft 存放在 source/_drafts 目录下。

post 和 draft 的区别在于前者会被发布到博客，而后者不会被发布。

### 4.1 第一篇文章

```bash
hexo n post "my-first-post"
```

Hexo会自动在 source/_posts 目录下新建一个名为 my-first-post 的 .md 文件；打开该文件，可以看到：

```html
---
title: my-first-post
date: 2018-04-21 23:11:30
tags:
---
```

这是 post 模板自动生成的 YAML 文件头，title 是这篇 post 的标题，可以将其改为 My First Post；date 是创建的日期；tags 是该 post 的标签，可以添加自定义的标签：

```html
---
title: My First Post
date: 2018-04-21 23:11:30
tags:
	- demo
	- first-post
---
```

接着再进行本地调试三连，就可以看到刚刚写好的博文了。

```bash
hexo clean
hexo g
hexo s --debug
```

### 4.1 第一篇草稿

创建命令和前边类似：

```bash
hexo n draft "my-first-draft"
```

另外草稿的头文件是没有日期的：

```html
---
title: my-first-draft
tags:
---
```

草稿文件是不会被 `hexo g` 命令生成到public目录下的。
