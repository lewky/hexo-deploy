---
title: 'Hexo搭建博客教程(3) - 远程部署到GitHub Pages'
tags:
  - Hexo
  - Hexo-blog-demo
  - Hexo搭建博客教程
categories:
  - Hexo
  - 搭建博客教程
abbrlink: 1657
date: 2018-04-24 22:08:44
toc_number: false
---
> 本章讲的是如何将本地的个人项目远程部署到 GitHub Pages，涉及到GitHub的项目仓库、Git的使用，以及Hexo的远程部署等。

## 一、安装 `hexo-deployer-git` 插件

想要将Hexo项目部署到 GitHub上，需要先安装一个插件。在Hexo项目的根目录打开命令窗口，输入：

	npm install hexo-deployer-git --save

<!-- more -->
## 二、GitHub上创建一个仓库

仓库的名字可以随便起，不过这个仓库是作为我们的博客仓库的，所以尽量将名字以 {username}.github.io 的形式来起。

比如，我的GitHub用户名是lewky，我就会把这个仓库命名为lewky.github.io。（为什么要这样起名，后面会说明）

## 三、修改本地的项目配置文件

在 _config.yml 找到如下：

```html
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type:
```

把刚刚我们新建的GitHub仓库链接配置进来：

```html
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: git@github.com:/{user}/{repository}.git
  branch: master
  message:
```

请注意，这里的仓库地址如果写成：`https://github.com/{user}/{repository}.git`可能会在后边的部署时无法成功，需要将`https://github.com`改成如下格式：

```bash
git@github.com:
```

另外这里的branch和message可以不填，branch会默认是master分支，message会默认用下边的格式模板：

```html
Site updated: {{ now('YYYY-MM-DD HH:mm:ss') }}
```

## 四、SSH key的创建与配置

最关键的一步来了，我们需要生成一对密钥对，然后将公钥配置到GitHub账号上。

### 4.1 生成RSA密钥对

首先使用 Git Bash 输入：

```bash
cd ~/.ssh
```

`~` 指的是当前用户的根目录，即 `C:\Users\{user}\`；而 `.ssh` 目录下一般存放着公开的SSH key文件：

* id_dsa.pub
* id_ecdsa.pub
* id_ed25519.pub
* id_rsa.pub

此外还有个 `known_hosts` 文件，SSH会把我们每个访问过的计算机的公钥(public key)都记录在里面。

如果在使用了 `cd ~/.ssh` 后能找到路径，那就把该目录下的 id_rsa.pub 文件里的内容复制到剪切板。如果找不到路径，就执行命令：

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

该命令会生成新的SSH key，这里的参数含义：

```html
-t: type，生成的密钥类型
-b: bits，指定密钥长度，对于RSA密钥，最小要求768位，默认是2048位。DSA密钥必须恰好是1024位，一般越长越安全。
-C: comment，提供一个新注释
```

接着会看到如下提示：

```bash
Enter file in which to save the key (/c/Users/123/.ssh/id_rsa):
```

这里按下回车，表示将SSH key保存到默认地址，即：`C:\Users\{user}\`

如果本身已经存在一个RSA私钥了，会提示你：

```bash
/c/Users/123/.ssh/id_rsa already exists.
Overwrite (y/n)?
```

这里输入 y 可以重新生成RSA密钥对；然后就会看到如下提示：

```bash
Enter passphrase (empty for no passphrase):
```

这里按下回车，表示不设置密码；接着会再提示你输入重复密码，依然是按下回车。

```bash
Enter same passphrase again:
```

这时候我们的SSH key就生成好了，去 `~/.ssh` 目录下将里边的 id_rsa.pub 文件里的内容复制到剪切板。

### 4.2 在 GitHub 上配置SSH key

接着登陆我们的 GitHub 账号：

* 进入 Settings 页面
* 选择 SSH and GPG keys
* 点击 New SSH key
* 填写 Title（用来给公钥起一个名字，以便和其他的公钥区分开来）
* 然后在 Key 里将我们刚刚复制的公钥复制进去
* 最后点击 Add SSH key，这时候 GitHub 会要你输入账号密码进行确认。

### 4.3 验证ssh连接

使用 Git Bash 输入：

```bash
ssh -T git@github.com
```

接着会看到：

```bash
The authenticity of host 'github.com (192.30.253.112)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)?
```

输入 yes，会看到：

```bash
Warning: Permanently added 'github.com,192.30.253.112' (RSA) to the list of known hosts.
Hi lewky! You've successfully authenticated, but GitHub does not provide shell access.
```

这时候 github.com的公钥被保存到known_hosts文件里，如果我们再执行一次`ssh -T git@github.com`，就不需要输入yes了，会直接看到：

```bash
Hi lewky! You've successfully authenticated, but GitHub does not provide shell access.
```

### 4.4 部署到 GitHub Pages

输入命令：

```bash
hexo d
或者
hexo g -d
```

后一条命令表示生成静态页面并部署到远处仓库，第一次部署会久一点，部署成功后会看到：

```bash
 * [new branch]      HEAD -> master
INFO  Deploy done: git
```

接着登陆 GitHub 并进入我们的项目仓库，可以看到已经多出了很多文件，且其 message 都是默认的格式：
```html
Site updated: {{ now('YYYY-MM-DD HH:mm:ss') }}
```

接下来点击 Settings 进入该仓库的设置页面，找到 Github Pages 这一项，选择以 Master 分支作为 source，然后保存；接下来这个仓库就会被部署到 https://{username}.github.io/{仓库名}。

如果你希望直接通过 https://{username}.github.io/ 来访问你的博客，可以将仓库名改为 {username}.github.io；这样就不需要在url后边添加上仓库名来访问了。

接下来，开始享受你的个人博客吧 :)