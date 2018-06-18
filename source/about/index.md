---
title: 关于
date: 2018-04-24 22:01:44
comments: false
---


{% cq %}
<!-- 站点运行时间 -->
<div id="days"></div>
{% endcq %}

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