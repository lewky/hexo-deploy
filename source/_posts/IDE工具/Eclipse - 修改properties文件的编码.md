---
title: Eclipse - 修改properties文件的编码
tags:
  - IDE工具
  - Eclipse
categories:
  - IDE工具
  - Eclipse
abbrlink: 9cdb7e13
date: 2017-07-17 00:12:41
---
## 配置方法

Eclipse的properties文件是默认ISO-8859-1编码的，如果在properties里输入中文会导致乱码，此时需要修改其编码为utf-8，具体步骤如下：

`Window→Preferences→General→Content Types→Text`，然后单击`Java Properties Files`，选定下方的`*.properties(locked)`，接着将最下方的ISO-8859-1改为utf-8，然后点击旁边的 `Update`，最后点击OK。
<!-- more -->