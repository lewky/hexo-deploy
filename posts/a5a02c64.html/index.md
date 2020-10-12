# Hexo - 记录一次Pages服务部署失败的原因

## 问题与分析

某天忽然发现，一直运行得好好的Pages服务部署失败了，GitHub Pages报错如下：
```
Your site is having problems building: The tag cq on line 3 in source/high/index.md is not a recognized Liquid tag.
For more information, see https://help.github.com/articles/page-build-failed-unknown-tag-error/. 
```

与此同时，Coding Pages同样也报错了：
```
 Starting jekyll build.
> jekyll build --safe
Configuration file: /usr/src/app/_config.yml
jekyll 3.6.2 | Error:  The next theme could not be found.
Jekyll build exit with code 1.
Fail to build jekyll site.
```

<!--more-->
首先我使用的是Hexo的next主题，而根据GitHub Pages的报错信息来看，是说在`source/high/index.md`里使用到了一个不认识的`cq`标签。

这个标签是next主题自带的，使用该标签快一年了，还是第一次遇到报这个错。接着根据Coding Pages的报错来看，则是说`/usr/src/app/_config.yml`里找不到jekyll的主题。

这就很奇怪了，我使用的明明是hexo，怎么忽然就变成jekyll了？一阵瞎折腾过后，一直部署失败。我忽然想起来一个事情，我之前曾经拿本地的博客仓库的git配置练过手，难道和这个有关？

我开始查找本地博客仓库的git配置，我是使用`hexo-deployer-git`这个插件来将本地生成的静态博客发送到远程仓库的。

当我在本地在执行`hexo g`后，会在博客根目录下生成一个`public`文件夹，这个文件夹里的文件组合起来就是一个完整的静态博客。

接着如果执行`hexo d`，就会把这个`public`文件夹的东西完完整整拷贝到`.deploy_git`文件夹里，然后会把该文件夹里的所有文件全部推送push到远程库。之后会触发Pages服务的钩子去build项目，然后部署到网站上。

## 发现线索

我打开`public`文件夹，发现生成出来的文件很正常，接着打开`.deploy_git`文件夹，发现也很正常，接着查看远程库里的文件，终于发现了问题。

在远程库的分支里，根本就没有hexo相关的文件，至此算是找到原因了。

很显然，我在执行`hexo d`时出了问题，没能正常将文件push到远程库，于是部署就失败了。之前该命令是没问题的，可之前我曾经动过手脚，修改过博客项目里的git配置，手动修改了`.git`里的文件，莫非这就是问题的根源？

## 解决方法

基于以上的猜想，我直接删掉了本地博客项目的`.deploy_git`文件夹，重新执行命令：
```
hexo cl
hexo g -d
```

等待片刻后，我终于看到远程部署成功，我的个人站点再次运转成功！

皇天不负有心人啊！原因终于明了，是`.deploy_git`文件夹出现问题，删掉该文件夹，重新运行`hexo d`即可。

记录下这次的遭遇，遇到问题应该静下心来，仔细分析，才不容易瞎折腾~
