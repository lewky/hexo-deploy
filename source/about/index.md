---
title: 关于
date: 2018-04-24 22:01:44
---

{% cq %}
<!-- 站点运行时间 -->
<div id="days"></div>
{% endcq %}

{% tabs about author %}
<!-- tab 博主相关@user -->
## 近况

目前在珠海从事Java开发，码农界萌新 (⌒▽⌒)

## 技能

Java, JavaWeb

## 联系

* <a href="javascript:void(0);">email: 1019175915@qq.com</a>
* <a href="https://github.com/lewky">github@lewky</a>
* <a href="https://blog.csdn.net/lewky_liu">csdn@lewky_liu</a>
* <a href="http://www.cnblogs.com/yulinlewis">cnblogs@yulinlewis</a>

<!-- endtab -->
<!-- tab 站点相关@home -->
## 站点及插件版本

	hexo: 3.7.1
	NexT: Gemini 5.1.4
	hexo-abbrlink: 2.0.5
	hexo-generator-baidu-sitemap: 0.1.2
	hexo-generator-index-pin-top: 0.2.2
	hexo-generator-searchdb: 1.0.8
	hexo-generator-sitemap: 1.2.0
	hexo-neat: 1.0.4
	hexo-wordcount: 3.0.2

## 建站日志

<a href="/posts/e62c38c4.html">→ 戳我查看建站日志 ←</a>

<!-- endtab -->
<!-- tab ️🌱 友情链接 -->
暂时没有友链哟 `(ﾉ*･ω･)ﾉ～`
想添加友链可以在下方留言~
<!-- endtab -->
{% endtabs %}

<script>
/* 侧边栏的站点运行时间 */
function show_date_time(){
	window.setTimeout("show_date_time()", 1000);
	/* 请修改这里的起始时间 */
	BirthDay=new Date("04/24/2018 15:00:00");
	today=new Date();
	timeold=(today.getTime()-BirthDay.getTime());
	sectimeold=timeold/1000
	secondsold=Math.floor(sectimeold);
	msPerDay=24*60*60*1000
	e_daysold=timeold/msPerDay
	daysold=Math.floor(e_daysold);
	e_hrsold=(e_daysold-daysold)*24;
	hrsold=setzero(Math.floor(e_hrsold));
	e_minsold=(e_hrsold-hrsold)*60;
	minsold=setzero(Math.floor((e_hrsold-hrsold)*60));
	seconds=setzero(Math.floor((e_minsold-minsold)*60));
	document.getElementById('days').innerHTML="本站已运行"+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒";
}
function setzero(i){
	if (i<10) {
		i="0" + i;
	}
	return i;
}
show_date_time();
</script>