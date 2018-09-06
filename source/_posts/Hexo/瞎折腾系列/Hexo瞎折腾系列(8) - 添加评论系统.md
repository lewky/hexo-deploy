---
title: Hexo瞎折腾系列(8) - 添加评论系统
tags:
  - Hexo瞎折腾系列
  - Next主题
  - 主题个性化
categories:
  - Hexo
  - 瞎折腾系列
abbrlink: ec12c039
date: 2018-09-05 22:24:05
---
## 前言

Hexo的NexT主题本身就集成了一些评论系统，多说啊之类的已经关闭服务的略过不提，目前比较多人用的有畅言、来必力livere、Gitment、Gitalk、Disqus等。

我刚用的评论系统的时候，网易云跟贴和多说已经gg了，畅言需要备案，Disqus需要FQ，Gitment和Gitalk类似，都需要GitHub账号。经过搜集资料和考虑，我最终还是决定使用Gitment。只是在用了一段时间后，终于还是放弃了Gitment，转而使用来必力livere。
<!-- more -->

## Gitment的优缺点

最初我选择使用Gitment的原因如下：

1. Gitment是一个基于GitHub的issue来开发的评论插件，本身很有创意，对于我这种没事看看GitHub的也很有吸引力。
2. 使用Gitment进行评论需要有GitHub账号，这无形中过滤掉了一些评论者，毕竟不是谁都有GitHub账号的，也不是谁都能登陆上GitHub的。
3. GitHub的评论数据存放在GitHub的issue里，基本不用担心数据丢失或者GitHub关闭服务，毕竟GitHub可是全球最大同性交友社区(滑稽)。

当我美滋滋地享受了Gitment一段时间后，开始发现一些问题：

1. GitHub是个神奇的网站，有时候会登陆不上去，这导致我的个人站点加载页面时无法把Gitment加载出来，这使得我的页面长时间处于一片空白的状态，用户体验极差，而且最后页面加载出来了，Gitment评论模块依然没有加载出来。
2. 我希望我的站点可以不分国界，所以我将站点分别部署到了Coding.net和GitHub上，这样可以国内外都快速访问到站点(这个需要域名才能实现)。由于国内有些地区在有些时段是无法访问到GitHub的，这将导致我的页面长时间假死。
3. Gitment的使用太繁琐，每一篇文章都必须先初始化一遍，才能使用评论系统，如果你有一百篇文章，你就需要手动初始化一百次！虽然后来有脚本一键初始化，但还是很麻烦。
4. issue的滥用。因为Gitment是建立的issue之上的，当你的文章越来越多，你会发现你的站点仓库里的issue会越来越多，这就不太友好了。

综上所述，我还是放弃了Gitment，转投了来必力的怀抱。

## Gitment使用流程

虽然现在没有使用Gitment了，但这里还是记录下当初遇到的问题，方便回顾或者大家解决类似的困难。

### 安装模块

使用Gitment需要安装模块：
```bash
npm i --save gitment
```
### 申请应用ID与密钥

因为Gitment需要GitHub的授权，所以需要先去[New OAuth App](https://github.com/settings/applications/new)申请一个密钥，需要填写的内容如下：

```html
Application name:随便写
Homepage URL:这个也可以随意写,就写你的博客地址就行
Application description:描述,也可以随意写
Authorization callback URL:这个必须写你的博客地址
```

这里只有最后一个callback必须写准确，申请成功后你可以看到`ClientID`和`Client Secret`，这个会被使用到，另外注意不要把这个ID和密钥告诉别人--

### 在主题配置文件中启用

```yml
# Gitment
# Introduction: https://imsun.net/posts/gitment-introduction/
gitment:
  enable: true
  mint: true # RECOMMEND, A mint on Gitment, to support count, language and proxy_gateway
  count: true # Show comments count in post meta area
  lazy: false # Comments lazy loading with a button
  cleanly: false # Hide 'Powered by ...' on footer, and more
  language: # Force language, or auto switch by theme
  github_user: {you github user id}
  github_repo: 随便写一个你的公开的git仓库就行,到时候评论会作为那个项目的issue
  client_id: {刚才申请的ClientID}
  client_secret: {刚才申请的Client Secret}
  proxy_gateway: # Address of api proxy, See: https://github.com/aimingoo/intersect
  redirect_protocol: # Protocol of redirect_uri with force_redirect_protocol when mint enabled
```

这里的配置，只有`github_user`，`github_repo`，`client_id`，`client_secret`是必须填准确的，其他的可以不使用。

### 初始化Gitment

到这里为止已经全部配置完毕，接下来只需要登陆你的个人站点，然后手动给每篇文章初始化Gitment就行了。初始化也很简单，打开每篇文章，在下方的评论模块那里点一下初始化就行，以后就可以直接评论了。据说由一键初始化所有文章的脚本，我没用过，不清楚。 

## Gitment踩坑记录

这里说一下当初折腾了我很久的一个地方，在主题配置文件里有个`github_user`，这个由于注释写的是`Your Github ID`，我误以为是要填写的不是用户昵称，而是一串数字id。于是就去了GitHub的api里查看了自己的id，然后填了一串数字进去，之后花费了我几个小时的时间，始终有授权失败的错误，最后终于发现，这个ID其实是要填的用户昵称...orz

GitHub的api地址：https://api.github.com/users/xxx
把这里的xxx随便改成某个用户名，可以拿到对方的json数据，里边有各种用户首页上的数据信息。

更多Gitment踩坑相关的文章可以参考：[Gitment评论功能接入踩坑教程](https://www.jianshu.com/p/57afa4844aaa)

## 来必力livere的使用

来必力的使用就简单多了，直接去官网注册个账号，拿到来必力City版安装代码里的`data-uid`，把这个uid填写到主题配置文件里的`livere_uid`后就行，记得id要和前边的冒号之间有一个空格，否则在启用hexo服务的时候会解析出错。

这样我们的来必力就使用成功了，平时可以去来必力的后台系统查看站点的评论数据等。

如果不会注册安装来必力的，可以看看[这篇文章](https://www.jianshu.com/p/61abc6c43220)

## 参考链接

1. [Hexo 使用Gitment评论功能](https://sjq597.github.io/2018/05/18/Hexo-%E4%BD%BF%E7%94%A8Gitment%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD/)
2. [Gitalk：一个基于 Github Issue 和 Preact 开发的评论插件](https://www.v2ex.com/t/378728)
3. [添加网易云跟帖(跟帖关闭，已失效，改为来必力)](https://segmentfault.com/a/1190000009544924#articleHeader20)