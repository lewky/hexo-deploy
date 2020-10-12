# 关于


{{< admonition tip "Running Time" >}}
<!-- 站点运行时间 -->
<div id="days"></div>
{{< /admonition >}}

## 博主相关

### 近况

17年本科毕业，目前在珠海从事Java开发，码农界萌新 (⌒▽⌒)

<!--→ 这是我的[在线简历](https://resume.lewky.cn)-->

### 技能

Java, JavaWeb

~~（性感码农，在线搬砖）~~

### 联系

* <a href="javascript:void(0);">email: 1019175915@qq.com</a>
* <a href="https://github.com/lewky">github@lewky</a>
* <a href="https://blog.csdn.net/lewky_liu">csdn@lewky_liu</a>
* <a href="http://www.cnblogs.com/yulinlewis">cnblogs@yulinlewis</a>

### 随笔

<a href="/posts/d65a1577.html">→ 戳我查看随笔 ←</a>

## 站点相关

### 站点及主题版本

	hugo: v0.74.2-48565DE6 windows/amd64 BuildDate: 2020-07-17T17:22:50Z
	LoveIt: v0.2.10

### 建站日志

<a href="/posts/e62c38c4.html">→ 戳我查看建站日志 ←</a>

## 友情链接

暂时没有友链哟 `(ﾉ*･ω･)ﾉ～`

想添加友链可以在下方留言~

<script>
/* 站点运行时间 */
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
