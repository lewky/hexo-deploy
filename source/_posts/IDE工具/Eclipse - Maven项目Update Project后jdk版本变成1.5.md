---
title: Eclipse - Maven项目Update Project后jdk版本变成1.5
tags:
  - IDE工具
  - Eclipse
  - Maven
categories:
  - IDE工具
  - Eclipse
abbrlink: 519a131c
date: 2018-09-02 22:35:36
---
## 问题与分析

最近遇到个奇怪的问题，在Eclipse里对一个Maven项目进行Update Project(快捷键是 `Alt+F5`)，原本jdk为1.8的项目忽然就变成了1.5，于是就报了一些错误。

我猜想可能跟Maven默认的jdk版本有关系，百度了下，确实如此，Maven项目如果不指定编译的jdk版本，就会默认为jdk1.5。查了下项目的pom文件，里边并没有指定编译的jdk版本，而Maven的配置文件settings.xml里也没有指明jdk版本，所以当我Update Project后，这个Maven项目就会自动变成jdk1.5了。
<!-- more -->

## 解决方法

有两种解决方法，一种是针对某个Maven项目而言，直接在pom文件中指明jdk版本；一种是全局设置，为所有Maven项目指明jdk版本。

### 在pom文件中指明jdk版本

在项目的pom.xml中的build节点里使用maven的编译插件来指定jdk版本，项目中通常使用这种方法来指定，因为比较灵活，可以随意指定版本，修改保存后即可生效。

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.1</version>
            <configuration>
            <encoding>UTF-8</encoding>
            <source>1.8</source>
            <target>1.8</target>
            </configuration>
        </plugin>
    </plugins>
</build>
```

### 修改settings.xml文件

找到Maven的安装路径，打开`conf\settings.xml`，找到`profiles`节点，在该节点下添加一个`profile`节点：

```xml
<profile>
    <id>jdk-1.8</id>
    <activation>
    <jdk>1.8</jdk>
    <activeByDefault>true</activeByDefault>
    </activation>
    <properties>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
    </properties>
</profile>
```

使用这种方法的好处是所有Maven项目都会按照这里的jdk版本来编译，当然如果在pom文件里也指定了jdk版本，则以pom里的为准。*这种全局修改的方法必须要重启Eclipse才有效果*。

个人建议就算是修改了全局配置，也要在每个Maven项目里指明jdk版本，这是种良好的规范，利于别人理解。

## 参考链接

1. [maven 修改默认的JDK版本](https://www.cnblogs.com/bianqi/p/6819074.html)
2. [Maven管理项目的时候 Update Project后jre变成1.5](https://blog.csdn.net/Ashes18/article/details/70488617)