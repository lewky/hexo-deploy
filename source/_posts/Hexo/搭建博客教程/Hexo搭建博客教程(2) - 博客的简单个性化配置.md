---
title: 'Hexo搭建博客教程(2) - 博客的简单个性化配置'
tags:
  - Hexo
  - Hexo-blog-demo
  - Hexo搭建博客教程
categories:
  - Hexo
  - 搭建博客教程
abbrlink: 38619
date: 2018-04-24 22:07:44
toc_number: false
---
> 本章主要讲博客的个性化，譬如站点的基本配置（语言、头像、站点图标等）、安装新的Hexo主题（NexT主题）以及主题的配置。

## 一、修改站点配置

打开站点配置文件 ，找到：

```html
# Site
title: Hexo
subtitle:
description:
keywords:
author: John Doe
language:
timezone:
```
<!-- more -->

根据自己的需要去修改上边的配置，这些配置的注释如下：

```html
# Site
# 站点标题
title: Hexo
# 站点副标题
subtitle:
# 站点描述
description:
# 站点关键词
keywords:
# 站点主人
author: John Doe
# 站点语言
language:
# 站点时区
timezone:
```

### 1.1 language

目前 NexT 支持的语言如下：

|语言|language|
|-|-|
|English|en|
|简体中文|zh-Hans|
|Français|fr-FR|
|Português|pt或者pt-BR|
|繁體中文|zh-hk或者zh-tw|
|Русский язык|ru|
|Deutsch|de|
|日本語|ja|
|Indonesian|id|
|Korean|ko|

### 1.2 timezone

Hexo 默认使用电脑的时区，也可以自己配置，比如：

	UTC+8

## 二、安装新主题

Hexo有很多大佬开发的主题，很多人使用的是NexT主题，该主题也确实挺简洁好看的，新版本的NexT主题还可以选择四个主题。

那么怎么安装新的Hexo主题呢？

在我们的Hexo项目路径下，可以看到有个 themes 文件夹，这个文件夹就是用于存放主题文件的。

### 2.1 下载 NexT 主题

首先在Hexo项目的路径下打开命令窗口，如果你没有配置好Git的环境变量，请使用Git Bash。

```bash
git clone https://github.com/iissnan/hexo-theme-NexT themes/NexT
```

注意，当前路径是你的Hexo项目根目录，使用上边的命令才能正确地将 NexT 主题clone到themes文件夹下的NexT文件夹里。

接下来你会看到 themes 下多了个 NexT 文件夹，点进去你会看到个`.git`文件夹，将该文件夹删掉，否则到时候你无法将整个完整的Hexo项目push到GitHub上。

### 2.2 启用 NexT 主题

在Hexo项目中，有两个重要的配置文件 `_config.yml`；这两个配置文件一个在项目根目录下，一个在主题目录下。

前者是站点配置文件，后者是主题配置文件，顾名思义，一个是Hexo项目的配置选项，一个是主题文件的配置选项。

打开站点配置文件，用Windows自带的笔记本是无法打开该文件的，请使用其他的编辑器来打开，常见的编辑器有Notepad++，UltraEdit，EditPlus等。

在站点配置文件中，找到：

```html
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: landscape
```

默认的博客主题就是这个，我们将其修改为NexT；这里的主题是指在 themes 文件夹下的对应主题的文件夹名字。

<font color="red">**注意</font>，在配置文件中所有的属性的值，都必须和前边的 `:` 之间留一个空格。**比如下边的写法就是错误的，不加上空格的话会出错。

```html
theme:landscape
```

### 2.3 选择对应主题的外观 Scheme

打开主题配置文件，找到下边的选项：

```html
# ---------------------------------------------------------------
# Scheme Settings
# ---------------------------------------------------------------

# Schemes
scheme: Muse
#scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

默认会使用Muse作为NexT主题的外观，通过将某个scheme前边的`#`去掉来启动某个外观，如下：

```html
# ---------------------------------------------------------------
# Scheme Settings
# ---------------------------------------------------------------

# Schemes
#scheme: Muse
#scheme: Mist
#scheme: Pisces
scheme: Gemini
```

### 2.4 验证新主题

依然是老操作——启动调试模式服务器：

```Bash
hexo s --debug
```

启动成功后，使用浏览器访问[`http://localhost:4000/`](http://localhost:4000/)，看看博客能否访问成功。

## 三、修改 NexT 主题配置

主题配置文件 `_config.yml` 位于 `themes\NexT` 之下。

### 3.1 头像设置

打开主题配置文件，找到如下：

```html
# 侧边栏头像
# Sidebar Avatar
# in theme directory(source/images): /images/avatar.gif
# in site  directory(source/uploads): /uploads/avatar.gif
# 头像的路径可以放在主题对应文件夹的source里，也可以放在站点根目录的source里，建议放在站点路径上
#avatar: /images/avatar.gif
```

将avatar前边的#去掉，接着配置图片的路径即可。

### 3.2 网站图标

打开主题配置文件，找到如下：

```html
# 将你的网站图标放到`{站点根目录}/source/` (推荐）或者`hexo-site/themes/NexT/source/images/`目录下
# 默认的NexT主题的网站图标放在`{站点根目录}/themes/NexT/source/images/`目录下
# 如果你想将自己的网站图标放到`{站点根目录}/source/`根目录下，必须将`/images`从路径中去掉
# 如果你将网站图标放到了`{站点根目录}/source/images`路径下，需要令网站图标的名字和`{站点根目录}/themes/NexT/source/images/`路径下的网站图标不同，否则网站图标会使用后者的同名图标
favicon:
  small: /images/favicon-16x16-NexT.png
  medium: /images/favicon-32x32-NexT.png
  apple_touch_icon: /images/apple-touch-icon-NexT.png
  safari_pinned_tab: /images/logo.svg
  #android_manifest: /images/manifest.json
  #ms_browserconfig: /images/browserconfig.xml
```

这里需要注意的是，网站图标一般是.ico或者.gif的类型，而且图标的大小一般只有几k而已，可以使用下边的网站制作个人的网站图标，建议先将原本的图标弄成正方形的。

> [在线制作ico图标](http://www.bitbug.net/)

### 3.3 菜单设置

打开主题配置文件，找到如下：

```html
# 如果该站点是运行在子目录之下（比如：domain.tld/blog；这里的blog就是指我们的博客，前边的是上一级的域名），需要将路径前的斜杠去掉（/archives -> archives；即是将原本的绝对路径改成了相对路径）。
# 用法：`Key：/link/ || 菜单图标`
# Key就是菜单名，如果对该菜单名进行了国际化，即将其翻译放到对应的languages文件夹中，将会根据你设置的语言进行加载对应的菜单名翻译；如果没有设置翻译，则会使用这里的Key作为菜单名。这里的Key是大小写敏感的。
# 在`||`分隔符之前的值是该菜单对应的路径
# 在`||`分隔符之后的值是FontAwesome的图标（不懂的请百度什么是FontAwesome以及其用法），如果不指定图标，将会自动使用question这个图标。

menu:
  home: / || home
  #about: /about/ || user
  #tags: /tags/ || tags
  #categories: /categories/ || th
  archives: /archives/ || archive
  #schedule: /schedule/ || calendar
  #sitemap: /sitemap.xml || sitemap
  #commonweal: /404/ || heartbeat
```

使用方法很简单，依然是将需要展示的菜单的前边的#去掉就行，更加具体的操作信息我已经在上边的注释中给出了。

### 3.4 标签分类

首先我们需要新建页面，在站点根目录打开命令窗口，分别输入命令：

```bash
hexo n page "categories"
hexo n page "tags"
hexo n page "about"
```

接着你会发现在根目录的 source 目录下多出了上边的三个文件夹，里面各自有一个 index.md 文件。如果之前我们将menu里的categories，tags，about三个菜单解开了封印，那么在创建好这三个页面后就可以成功访问到，否则会报404请求错误。

### 3.5 社交链接

```html
# 如果不指定图标，会默认使用globe图标
#social:
  #GitHub: https://github.com/yourname || github
  #E-Mail: mailto:yourname@gmail.com || envelope
  #Google: https://plus.google.com/yourname || google
  #Twitter: https://twitter.com/yourname || twitter
  #FB Page: https://www.facebook.com/yourname || facebook
  #VK Group: https://vk.com/yourname || vk
  #StackOverflow: https://stackoverflow.com/yourname || stack-overflow
  #YouTube: https://youtube.com/yourname || youtube
  #Instagram: https://instagram.com/yourname || instagram
  #Skype: skype:yourname?call|chat || skype
```

老规矩，去掉#注释就可以启动。

