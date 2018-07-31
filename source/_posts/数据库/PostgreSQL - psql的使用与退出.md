---
title: PostgreSQL - psql的使用与退出
tags:
  - 数据库
  - PostgreSQL
  - psql
categories:
  - 数据库
  - PostgreSQL
abbrlink: 7eb5e777
date: 2018-08-01 00:34:04
---
## PostgreSQL连接数据库的两种方式

PostgreSQL在安装时自带了pgAdmin和psql，pgAdmin是可视化工具，psql是命令行工具。虽然pgAdmin操作起来会更加直观简单，但是在restore和backup db的时候，效率和性能会比较低下，如果db过于庞大，还会导致pgAdmin内存溢出。

推荐使用psql来连接数据库进行备份和恢复db，同样大小的db，使用psql来restore会比pgAdmin快上数倍！<!-- more -->

## psql连接数据库

在[psql PostgreSQL 手册](http://www.php100.com/manual/PostgreSQL8/app-psql.html)里对于psql有非常详细的介绍，不过一般来说我们是用不到那么多参数的。

```cmd
psql -h <dbserver_IP> -p<dbserver_port> -d <database_Name> -u <db user>
```

如果host是localhost，可以不指定该参数，当不指定端口号时会使用默认的端口号`5432`，或者你可以通过`-p`来指定其他端口号。

比如你想连接本地的db`test:5432`，用户名是`postgres`，可以使用如下的命令：

```cmd
psql -d test -u postgres
```
# 待补充

## 退出psql

和其他的MySQL命令行工具不一样，退出时并不是使用`exit`，而是使用`\q`，接着按下回车就行了。
这里的q指的是quit。
