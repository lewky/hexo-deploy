---
title: Eclipse - 如何修改web项目的web module version
tags:
  - IDE工具
  - Eclipse
categories:
  - IDE工具
  - Eclipse
abbrlink: 4e16194f
date: 2018-04-03 00:04:00
---
## 情景

有时候我们想改变web项目的web module version，比如说原本是2.4版本，我们想改成3.0版本，通过右键项目名 -> Properties -> Project Facets，选中Dynamic Web Module后边的版本，将2.4改成3.0

这时候会报错误：`Cannot change version of project facet Dynamic Web Module to 3.0.`

而且这时候改动web.xml的文件头从2.4改成3.0版本的文件头也会报错。
<!-- more -->

## 解决办法

1、这时候我们需要找到该项目的目录，进入.setting文件夹，打开org.eclipse.wst.common.project.facet.core.xml

2、我们可以发现在这个xml文件中，有这样一个标签：
```xml
<installed facet="jst.web" version="2.4"/>
```

3、将这里的version改成你想要的版本，比如改成3.0

4、保存该文件的改动，接着刷新Eclipse中的该项目(左键选中项目名，按F5刷新项目)

5、接着再去Properties -> Project Facets ， 将Dynamic Web Module改为3.0；然后将web.xml的文件头改为对应3.0版本的文件头；此时会发现可以修改成功而不会报错。