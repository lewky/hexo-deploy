---
title: Hexo瞎折腾系列() - Coding Pages申请SSL/TLS证书错误
tags:
  - Hexo瞎折腾系列
  - Next主题
  - 主题个性化
categories:
  - Hexo
  - 瞎折腾系列
abbrlink: 7ac531d2
date: 2018-09-03 23:33:36
---
## 问题

今天我的个人站点SSL/TLS证书到期，我的证书是由Coding Pages提供的，每次申请成功后有效期是三个月，证书到期后可以继续免费申请。但是当我登陆进入Coding Pages服务的后台并点击申请证书时，竟然报错了！！

我重新点了申请，几秒后依然报错，并提示我半小时只能申请一次。我查看了下报错的提示信息，如下：
>urn:acme:error:unauthorized:Invalid response from http://exmaple.com/.well-known/acme-challenge/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx: xxxxxxxxx

<!-- more -->
一时间也不明白是怎么回事，因为我第一次申请的时候不用几秒钟就成功了，由于报错信息中包含了本静态博客的部署时间，我以为可能存在部署时间的校验，于是重新部署了一下，半小时后继续申请，依然报同样的错误。

好吧，有事就问度娘，百度了一下，发现了Coding Pages的官方文件：[Coding Pages 常见问题](https://coding.net/help/faq/pages/coding-pages-faq.html)

这时候按照官方文件的指引，找到了和我一样的错误信息的解决方案：
>错误原因：无法获取正确的域名验证信息
解决方式1：检查 DNS 的 CNAME 记录是否设置正确，静态 Pages 为 pages.coding.me，动态 Pages 为 pages.coding.io
解决方式2：检查域名的 DNS 是否将海外线路解析到 Coding Pages 的服务器

因为Coding Pages的静态Pages是免费的，而动态Pages是收费的，对于用Hexo搭建的静态站点，自然是选择免费的静态Pages服务就足够了。于是解决方式1对我来说就不存在了，接着联想到之前我对部署在GitHub Pages上的个人站点进行了自定义域名绑定+域名解析设置，有些豁然开朗的感觉。

## 分析

由于我的个人站点是同时部署到GitHub Pages和Coding Pages上的，接着在阿里云域名解析里进行了配置：默认的解析线路将我的域名指向`pages.coding.me`，国外的解析路线则是指向了`lewky.github.io`。

之所以这样配置，是因为国内部分地区无法直接访问GitHub，自然就无法访问我部署在GitHub上的个人站点，于是我又选择了Coding.net的Pages服务，这样国内用户就可以快速访问到我部署在Coding Pages的个人站点，而国外用户则是快速访问到Coding Pages上的个人站点。

问题就出现在这里，因为我第一次申请SSL/TLS证书的时候，还没有解析境外的线路，所以很快就申请成功了。后来添加了国外线路的解析，这导致在Coding Pages的后台申请证书时无法通过验证，自然就申请失败了。

分析到这里，我也基本知道怎么解决这个错误了。

## 解决方法

由于我是在阿里云购买的域名，于是登陆到阿里云域名解析的后台系统，打开个人域名的解析设置，暂停对于境外线路的解析。这里暂停就行了，一般来说大概需要5分钟左右的生效时间，毕竟DNS解析是存在缓存的。

五分钟后，我又进入Coding Pages服务的后台，再一次申请SSL/TLS证书，果不其然，几秒钟后我申请证书成功，又给续了三个月。

最后，再次返回阿里云域名解析的后台，将境外解析的线路再次启用，嗯，完美。

## 其他的申请错误

这里罗列下申请证书时所有可能遇到的错误与解决方案，以备不时之需。

### 错误类型：urn:acme:error:connection

1、错误信息：DNS problem: NXDOMAIN looking up A for example.com

>错误原因：域名不存在
解决方式1：检查域名是否填写正确
解决方式2：到域名注册商处检查是否设置了 DNS 服务器
解决方式3：咨询 DNS 服务商是否支持解析该域名

2、错误信息：DNS problem: SERVFAIL looking up A for exmaple.com

>错误原因：DNS 解析 A 记录出错
解决方式1：到域名注册商处检查是否设置了 DNS 服务器
解决方式2：咨询 DNS 服务商是否屏蔽了 Let’s Encrypt 的解析请求

3、错误信息：DNS problem: SERVFAIL looking up CAA for example.com

>错误原因：DNS 解析 CAA 记录出错
解决方式1：到域名注册商处检查是否设置了 DNS 服务器
解决方式2：咨询 DNS 服务商是否支持解析 CAA 记录

4、错误信息：DNS problem: query timed out looking up A for exmaple.com

>错误原因：DNS 解析超时
解决方式1：到域名注册商处检查是否设置了 DNS 服务器
解决方式2：咨询 DNS 服务商是否屏蔽了 Let’s Encrypt 的解析请求
解决方式3：重新申请
解决方式4：检查域名的 DNS 是否将海外线路解析到 Coding Pages 的服务器

5、错误信息：Fetching http://exmaple.com/.well-known/acme-challenge/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx: xxxxxxxx

>错误原因：获取域名验证信息失败
解决方式1：重新申请
解决方式2：请确认是否启动了 DNS 的分区解析。如果有则要把国外的解析记录也设置成 CNAME 至 pages.coding.me。SSL 证书是通过 Let’s Encrypt API 申请。申请证书前需要验证域名，而 Let’s Encrypt 位于国外，所以需要保证 Let’s Encrypt 能通过您的域名正常访问到 Coding Pages 服务器以读取验证信息。

### 错误类型：urn:acme:error:malformed

错误信息：Error creating new authz :: Name does not end in a public suffix

>错误原因：域名不以公共后缀结尾
解决方式：咨询域名注册商

### 错误类型：urn:acme:error:unauthorized

1、错误信息：Invalid response from http://exmaple.com/.well-known/acme-challenge/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx: xxxxxxxxx

>错误原因：无法获取正确的域名验证信息
解决方式1：检查 DNS 的 CNAME 记录是否设置正确，静态 Pages 为 pages.coding.me，动态 Pages 为 pages.coding.io
解决方式2：检查域名的 DNS 是否将海外线路解析到 Coding Pages 的服务器

2、错误信息：The key authorization file from the server did not match this challenge

>错误原因：无法获取正确的域名验证信息
解决方式1：检查 DNS 的 CNAME 记录是否设置正确，静态 Pages 为 pages.coding.me，动态 Pages 为 pages.coding.io
解决方式2：检查域名的 DNS 是否将海外线路解析到 Coding Pages 的服务器

3、错误信息：Error creating new authz :: “example.com” was considered an unsafe domain by a third-party API

>错误原因：无法获取正确的域名验证信息
解决方式：使用 https://transparencyreport.google.com/safe-browsing/search 查看域名存在的安全隐患，按照说明进行清理，清理完后到 https://www.stopbadware.org/ 提交审查请求。审查通过后，回到 Coding Pages 重新申请证书

### 错误类型：urn:acme:error:unknownHost

错误信息：No valid IP addresses found for example.com

>错误原因：找不到可用 IP 地址
解决方式1：检查 DNS 的 CNAME 记录是否设置正确，静态 Pages 为 pages.coding.me，动态 Pages 为 pages.coding.io
解决方式2：检查域名的 DNS 是否将海外线路解析到 Coding Pages 的服务器
解决方式3：咨询 DNS 服务商是否屏蔽了 Let’s Encrypt 的解析请求

### 错误类型：urn:acme:error:rateLimited

错误信息：Error creating new cert :: too many certificates already issued for exact set of domains: example.com

>错误原因：证书申请数目超出限制
解决方式：下周再重新申请，详情见 https://letsencrypt.org/docs/rate-limits/

### 错误类型：urn:acme:error:rejectedIdentifier

错误信息：Error creating new authz :: Policy forbids issuing for name

>错误原因：相关政策禁止为此域名签发证书

## 参考链接

1. Coding Pages的官方文件：[Coding Pages 常见问题](https://coding.net/help/faq/pages/coding-pages-faq.html)