# Hexo瞎折腾系列(9) - 网页标题崩溃特效

## 前言

本系列的所有修改均基于本系列第一篇中的新增文件(譬如`custom.js`)，请先自行阅读[Hexo瞎折腾系列(1) - 准备工作与简单美化](https://lewky.cn/posts/ef301a4d.html)；并按照文章所说自行修改代码或文件。

## 为网页添加标题崩溃特效

该特效为：当用户离开站点相关的页面时，网页的标题会变成“已崩溃”，网站图标也会改变；当用户重新回到站点页面时才会恢复正常。
<!--more-->

实现方式如下：

请在`themes/next/source/js/src/custom.js`里加入如下代码：
```js
/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "/failure.ico");
      $('[rel="shortcut icon"]').attr('href', "/failure.ico");
      document.title = '喔唷，崩溃啦！';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/favicon-32x32.ico");
      $('[rel="shortcut icon"]').attr('href', "/favicon-32x32.ico");
      document.title = '咦，页面又好了！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
	}
  });
}
```

然后在站点根目录的`/source`目录下添加`failure.ico`，作为网站崩溃时显示的图标；如下：

![failure.ico](\images\posts\hexo\failure.ico)

这里的`favicon-32x32.ico`是你个人站点的图标，改成你自己的图标就好。
