# Hugo系列(1) - 简单搭建与部署

## 背景

使用Hexo搭建个人博客也有两年多时间了，当文章数量达到上百篇之后，开始发现Hexo生成文章的效率越来越慢，直到每次生成都需要至少五分钟的时间。我发现生成效率和文章涉及到的分类和标签有很大关系，由于文章数量多，每篇文章又都关联了若干个分类和标签，再加上我使用了压缩样式的插件，最终导致极其低下的生成效率。

在经过一段时间的考量后，决定将Hexo博客迁移到Hugo。Hugo是用go语言开发的，在用法上和Hexo类似，可以简单地把Hugo当成go语言版的Hexo，但是它拥有更快的生成效率。下面是官网的原话：
<!--more-->

>**The world’s fastest framework for building websites**
>
>Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.

## 安装

和Hexo不同，Hugo安装非常简单，只需要去[Hugo Release](https://github.com/gohugoio/hugo/releases)下载操作系统对应的二进制文件即可（`hugo`或者`hugo.exe`)。

对于Windows平台，一般是一个zip文件，解压后里面有个`hugo.exe`文件。将该文件所在目录添加到环境变量`path`里，即可在cmd里通过`hugo version`检测是否能正常运行hugo命令。

如下是我安装的hugo版本：
```cmd
>hugo version
Hugo Static Site Generator v0.74.2-48565DE6 windows/amd64 BuildDate: 2020-07-17T17:22:50Z
```

其他平台的安装方法可以参考官方文档：[Install Hugo](https://gohugo.io/getting-started/installing/)

## 创建站点

首先需要创建一个新的个人站点：
```cmd
hugo new site blog
```

`blog`就是你的博客站点所在的目录，也是这个站点的根目录，创建站点后目录结构如下：
```
archetypes/
content/
data/
layouts/
static/
themes/
config.toml
```

下面简单介绍下Hugo根目录下的各个文件目录的作用：
* `archetypes`存放创建文件时使用的模板，可以自定义`front matter`属性。
* `assets`存放需要被`Hugo Pipes`处理的文件，且只有使用了`.Permalink`或者`.RelPermalink`的文件才能被发布到`public`目录。
**注意，默认不会创建`assets`目录。**
* `config`是配置文件，可以有`JSON`、 `YAML`或者`TOML`三种格式，默认使用根目录下的`config.toml`、`config.yaml`或`config.json`中的某一个。可以通过`--config`来配置读取一个或多个配置文件，如：`hugo --config a.toml,b.toml,c.toml`。
**注意，默认不会创建`config`目录。**
* `content`存放的各种md文件用于部署站点，该目录下可以自行创建若干个子目录来便于对文章进行分类，这些子目录被称为`section`。
* `data`目录存放的是用于定义变量的模板文件，相当于Java里的常量类，这些文件有`JSON`、 `YAML`或者`TOML`三种格式，会在生成站点时被使用到。一般用不到该功能，具体用法可以参考：[data templates](https://gohugo.io/templates/data-templates/)
* `layouts`目录存放的模板文件用于渲染html页面，模板里可以定义不同页面的html代码。
* `static`目录存放的是静态内容：图片、CSS、JavaScript等。
* `resources`目录用于缓存某些文件来提高生成效率。
**注意，默认不会创建`resources`目录。**

## 添加主题

为新站点添加一个主题，以我使用的`LoveIt`主题为例，先将主题代码放置到`themes`目录下：
```cmd
cd blog
git init
git submodule add https://github.com/dillonzq/LoveIt.git themes/LoveIt
```

接着修改`config.toml`：
```
theme = "LoveIt"
```

这里的`LoveIt`对应`themes`目录下的主题的文件夹名字。

## 新建文章

新建一篇文章：
```cmd
hugo new posts/first.md
```

该命令会在`content/posts`目录下生成`first.md`文件，打开进行编辑：
```
---
title: "First"
date: 2020-09-08T21:57:28+08:00
draft: true
---
## First

First blog.
```

两行`---`里的属性是`front matter`，用来设置当前文章的属性配置。`front matter`的内容可以使用3种不同的格式来定义，两行`---`之间对应的是`YAML`格式，两行`+++`之间对应的是`TOML`格式，`{`和`}`之间对应的是`JSON`格式。

建议用`YAML`格式来定义，这样从Hexo迁移到Hugo的成本会更低。

下面是官方文档提供的3种不同格式的front matter的样例，有兴趣的可以了解下。

### TOML Example

```
+++
title = "spf13-vim 3.0 release and new website"
description = "spf13-vim is a cross platform distribution of vim plugins and resources for Vim."
tags = [ ".vimrc", "plugins", "spf13-vim", "vim" ]
date = "2012-04-06"
categories = [
  "Development",
  "VIM"
]
slug = "spf13-vim-3-0-release-and-new-website"
+++
Content of the file goes Here
```

### YAML Example

```
---
title: "spf13-vim 3.0 release and new website"
description: "spf13-vim is a cross platform distribution of vim plugins and resources for Vim."
tags: [ ".vimrc", "plugins", "spf13-vim", "vim" ]
lastmod: 2015-12-23
date: "2012-04-06"
categories:
  - "Development"
  - "VIM"
slug: "spf13-vim-3-0-release-and-new-website"
---

Content of the file goes Here
```

### JSON Example

```
{
    "title": "spf13-vim 3.0 release and new website",
    "description": "spf13-vim is a cross platform distribution of vim plugins and resources for Vim.",
    "tags": [ ".vimrc", "plugins", "spf13-vim", "vim" ],
    "date": "2012-04-06",
    "categories": [
        "Development",
        "VIM"
    ],
    "slug": "spf13-vim-3-0-release-and-new-website",
}

Content of the file goes Here
```

## 启动Hugo服务

输入命令：
```cmd
hugo server -D
```

在本地启动服务后可以在 http://localhost:1313/ 访问个人站点。该命令仅用于本地调试，支持热修改，也就是说在启动服务时修改文章会实时生效，但是该命令不会真正生成静态文件。

## 生成静态页面

输入命令：
```cmd
hugo -D
```

默认会在站点根目录的`public/`目录下生成对应的静态页面，可以通过在命令行指定`-d`或者`--destination`参数来改变静态页面的存放路径，也可以通过在配置文件中设置`publishDir`来指定。

该命令生成的静态页面文件是用来部署到pages服务的，比如GitHub pages或者Coding pages等。

另外，hugo允许对生成的静态页面设置特殊的参数，比如在文章的`front matter`里设置参数：`draft`, `publishdate`和`expirydate`。如下：
```
---
title: "First"
date: 2020-09-08T21:57:28+08:00
draft: true
publishdate: 2020-09-18T21:57:28+08:00
expirydate: 2020-09-28T21:57:28+08:00
---
```

`draft: true`表明该文章是草稿，如果在启用服务时不指定参数`-D`或`--buildDrafts`，或者在配置文件`config.toml`中配置`buildDrafts = true`，则会在生成文章时忽略草稿。如果不想指定该参数就生成文章，需要改为`draft: false`或者将其删去。

`publishdate: 2020-09-18T21:57:28+08:00`表示将来发布的时间，如果不指定参数`-F`或`--buildFuture`，或者在配置文件`config.toml`中配置`buildFuture = true`，则无法在规定的日期之前生成该文章。

`expirydate: 2020-09-28T21:57:28+08:00`表示过期时间，如果不指定参数`-E`或`--buildExpired`，或者在配置文件`config.toml`中配置`buildExpired = true`，则无法在规定的日期之后生成该文章。

## 远程部署到Pages服务

Hugo和Hexo一样是静态站点生成工具，不需要服务器即可进行部署运行，为了可以在网络上也访问到我们的博客，需要将静态博客部署到某些网站的pages服务上，借用人家的服务器进行托管。

常用的page服务有GitHub pages、Coding pages等，由于暂时没有找到好用的Hugo的远程部署插件，所以这里使用git命令来进行远程部署。

## 参考链接

* [Hugo Front Matter](https://www.gohugo.org/doc/content/front-matter/)
* [Hugo Quick Start](https://gohugo.io/getting-started/quick-start/)
* [Install Hugo](https://gohugo.io/getting-started/installing/)
* [Directory Structure Explained](https://gohugo.io/getting-started/directory-structure/)
