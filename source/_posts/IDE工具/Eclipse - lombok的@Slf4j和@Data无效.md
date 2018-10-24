---
title: Eclipse - lombok的@Slf4j和@Data无效
tags:
  - IDE工具
  - Eclipse
  - lombok
categories:
  - IDE工具
  - Eclipse
abbrlink: eea0b72e
date: 2018-10-24 22:49:50
---
## 问题与分析

最近开始学习spring-boot框架，我用的是Eclipse，然后发现在使用到了lombok的@Data注解时，Eclipse会编译错误。@Data的作用是自动生成toString方法和setter/getter方法，可以减少大量重复性的代码工作。

另外在使用了@Slf4j注解时，这个注解可以自动为当前类生成一个log变量，即：`rivate  final Logger logger = LoggerFactory.getLogger(XXX.class);`。然而Eclipse无法识别log变量，会报log变量未声明的错误。
<!-- more -->

一开始我以为是没导入包或者漏了jar包，但是检查一番后没有问题。百度了下才知道，原来除了导包之外，还需要为Eclipse安装该lombok插件。

## 解决方法

安装方法很简单，找到你导入的lombok的jar包，双击运行该jar包，会出现一个安装界面。或者右键jar包，选择`打开方式`，接着选择`Java (TM) Platform SE binary`，会出现安装界面。

在安装界面选择当前的Eclipse进程，或者点击左下角的`Specify location...`选择你要安装插件的Eclipse，接着点右下角的`Install / Update`，很快就安装完毕，点击`Quit Installer`。

lombok的下载地址：https://projectlombok.org/downloads/lombok.jar

## 问题补充

当我安装好lombok之后，Eclipse虽然能够正常识别@Slf4j注解生成的log变量，但@Data注解依然无效。在使用到了pojo类的私有变量时，依然会提示说缺少setter/getter方法。折腾了好久，才发现原来是因为Eclipse自动给我的pojo类的私有变量加上`final`修饰符，导致setter/getter方法注入失败了。

把pojo类的私有变量前边的final去掉后，@Data终于生效了。之所以会自动给变量加上final修饰符，是因为我设置了Save Action，Eclipse会自动在我保存代码的时候自动在私有变量、局部变量前加上final修饰符，这个是公司制定的代码编程规范。