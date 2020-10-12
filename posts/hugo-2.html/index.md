# Hugo系列(2) - 远程部署到Pages服务

## 远程部署到Pages服务

Hugo和Hexo一样是静态站点生成工具，不需要服务器即可进行部署运行，为了可以在网络上也访问到我们的博客，需要将静态博客部署到某些网站的pages服务上，借用人家的服务器进行托管。

常用的page服务有GitHub pages、Coding pages等，由于暂时没有找到好用的Hugo的远程部署插件，所以这里使用git命令来进行远程部署。

**注意，所谓的远程部署，其实就是把`hugo`命令生成的`public`目录里的所有文件push到远程库，然后启用Pages服务进行静态网站的部署。这样，当有人访问静态站点的主页时，Pages服务就会去读取根目录下的`index.html`。**

这里以部署到GitHub Pages为例。

<!--more-->

### 在GitHub上创建一个仓库

首先在GitHub上创建一个仓库，仓库的名字格式为`<username>.github.io`。比如我的GitHub用户名是lewky，那么这个仓库就命名为`lewky.github.io`。

之所以这样规定命名，是因为GitHub默认会把`<username>.github.io`的master分支的内容部署到GitHub Pages站点上。

### 关联GitHub的站点仓库

在本地创建一个新的文件夹，比如名为`hugo-deploy`。首先是初始化该文件夹为Git项目，命令如下：
```bash
git init
```



### 通过Git命令进行远程部署

## 怎么同时部署到两个不同的Pages服务


