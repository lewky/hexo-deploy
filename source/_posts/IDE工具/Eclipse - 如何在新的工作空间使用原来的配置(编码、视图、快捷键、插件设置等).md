---
title: Eclipse - 如何在新的工作空间使用原来的配置(编码、视图、快捷键、插件设置等)
tags:
  - IDE工具
  - Eclipse
categories:
  - IDE工具
  - Eclipse
abbrlink: 3084e42f
date: 2017-09-15 20:25:12
---
## 情景

Eclipse如果更换一个新的工作空间，需要重新设置视图、配置等一系列东西，算是想到麻烦的一件事情，其实我们完全可以将旧的工作空间里的配置拷贝到新的工作空间里，这样就可以省去重新配置的麻烦了~ 

具体操作如下：

在`${workspace(你电脑里原本的工作空间目录)}/.metadata/.plugins`里有这样两个文件夹：`org.eclipse.core.runtime`和`org.eclipse.ui.workbench`，将新的工作空间里的同名文件夹删了，再将这两个文件夹复制到新的工作空间就行了！
<!-- more -->

`org.eclipse.core.runtime`：保存着Eclipse的用户配置，包括视图、编码、各种插件的配置(window下的preference里边的插件配置)等

`org.eclipse.ui.workbench`：保持着ui上的配置，包括上方的快捷工具栏和下方的view窗口等

如果不知道自己正在使用的工作空间在哪个目录下，请点击Eclipse左上角的`File→switch workspace→other`，显示的就是当前工作空间的目录。另外，在这里有个`copy setting`，可以选择转换到新的工作空间时拷贝原本的配置，但这里拷贝的其实只是`org.eclipse.ui.workbench`，缺少了`org.eclipse.core.runtime`，所以这种方法会丢失部分配置。

另外不要没事就随便转换工作空间，Eclipse容易崩溃_(:3」∠)_