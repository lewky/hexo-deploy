---
title: Hexo瞎折腾系列(6) - 将博客同时部署到Github和Coding
tags:
  - Hexo
categories:
  - Hexo
abbrlink: 369cf01c
date: 2018-08-27 23:29:21
---
## 前言

由于本人只是将Hexo博客同时部署到 Github 和 Coding.net ，所以这里只介绍怎么同时部署到这两个网站的pages。  
之所以选择这两个网站，是因为国外用户可以访问 Github，而国内用户可以访问 Coding.net。另外，Coding.net可以拥有自己的私人仓库。

## 修改站点配置文件

在站点根目录下找到 `_config.yml`文件，将里边的deploy节点修改成下边的形式：
<!-- more -->
```html
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo:
    github: git@github.com:{username}/{repository}.git,master
    coding: git@git.coding.net:{username}/{repository}.git,master
```

将上边的仓库url的{username}/{repository}改成自己的项目地址，这里使用的是SSH协议的Git仓库地址，即：

```html
git@{domain}:{username}/{repository}.git
```

还有一种是HTTPS协议的Git仓库地址，即：

```html
https://{domain}/{username}/{repository}.git
```

一般推荐使用SSH协议的地址，因为可以免去每次push都要输入账号密码的繁琐，而且也够安全。

## 在 Github 和 Coding.net 上各自创建一个仓库

如果我们只是将项目部署到某一个代码托管站点而已，那么该项目仓库的名字可以随便起；但是现在我们需要将项目同时部署到 Github 和 Coding.net 上，那就不能随意命名了。  

我们需要采用特定的命名方式，才能正确将Hexo博客同时部署到这两个站点上；否则很可能会导致只有博客的主页能访问到，而其他的路径全部失效。

### 仓库的命名

对于 Coding.net，你可以选择建立一个私人仓库来部署自己的Hexo博客，不过和 Github 不同的地方在于：

Github 的仓库名要命名为：

```html
{username}.github.io
```

而 Coding.net 的仓库名要命名为：

```html
{username}
```

这里的 username 指的是你在这两个网站上的用户名，只有以这种命名形式的仓库，才能够不通过子域名的形式来访问我们的博客。

比如说，我的 Github 和Coding.net 的账号都是lewky，那么在部署博客成功后，我就可以通过下边的url来访问我的Hexo博客：

```html
https://lewky.github.io/
https://lewky.coding.me/
```

如果将仓库名命名为其他的形式，比如：hexo-blog，那么要访问该博客，就需要输入下边的url：

```html
https://lewky.github.io/hexo-blog
https://lewky.coding.me/hexo-blog
```

这里的仓库名hexo-blog就变成了子域名，于是问题就来了，对于存在子域名的Hexo博客，需要在站点配置文件里配置url节点：

```html
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://yoursite.com
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:
```

如果不配置这里的url节点，会导致除了首页以外的所有页面都请求404；但是我们由于是同时部署在两个网站上，其父域名是不一样的，那么这里的url节点也就只能配置一个而牺牲另一个了；但是如果你有自己的域名，就可以解决这个问题了：直接在这里配置自己的域名就行了。

## 配置 SSH key

### 创建RSA密钥对

使用 Git Bash 生成RSA密钥对：

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

看到提示就按一次回车，在连续三次回车后，就表示创建成功了。

接着将 ~/.ssh 目录下将里边的 id_rsa.pub 文件里的内容复制到剪切板。

### Github 配置 SSH key

登陆 Github 的账号：
* 进入 Settings 页面
* 选择 SSH and GPG keys
* 点击 New SSH key
* 填写 Title（用来给公钥起一个名字，以便和其他的公钥区分开来）
* 然后在 Key 里将我们刚刚复制的公钥复制进去
* 最后点击 Add SSH key，这时候 GitHub 会要你输入账号密码进行确认。

### Coding.net 配置 SSH key

Coding.net 和 Github 有些不一样，Coding.net存在账户公钥和部署公钥；
* 账户公钥配置后拥有账户下所有项目的读写权限
* 部署公钥配置后默认拥有该项目的只读权限，如果需要获取推送权限，需要勾选部署公钥设置里的『授予推送权限』

登陆 Coding.net 的账号：
* 进入个人设置
* 选择 SSH 公钥
* 选择新增公钥
* 填写公钥名称和内容
* 添加后输入输入账号密码进行确认

## 验证 SSH 连接

使用 Git Bash 输入：

```bash
ssh -T git@github.com
```

第一次连接时会问你是否继续连接，输入 yes 即可；接下来验证 Coding.net 的ssh连接：

```bash
ssh -T git@git.coding.net
```

同样输入 yes 即可。

如果按照前边说的来配置，这里的 SSH 验证应该都是没问题的。

接下来只要撰写博文，然后使用命令进行部署就行了：

```bash
hexo clean
hexo g -d
```