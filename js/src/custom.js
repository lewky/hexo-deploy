// build time:Sun May 26 2019 13:32:24 GMT+0800 (中国标准时间)
if(window.console){var cons=console;if(cons){cons.group("O(∩_∩)O哈喽！");cons.info("这位看代码的童鞋，不如留下你的友链来一起玩耍吧！");cons.info("如果有发现什么bug，还请帮忙留言提醒，或者到我的GitHub项目里提交issue哦~ %c(https://github.com/lewky/hexo-theme-beep)","color:#a517ef;font-weight:bold;");cons.log("%cYulin Lewis's Blog","background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;");cons.groupEnd()}}function randomColor(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var a_idx=0;var a=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善","老哥稳","带我飞","厉害了word哥","扎心了老铁","蓝瘦香菇","还有这种操作?","就是有这种操作","皮皮虾我们走","笑到猪叫","石乐志","不存在的","黑车!","我要下车!","他还只是个孩子","请不要放过他","惊不惊喜?","意不意外?","我有一个大胆的想法","你的良心不会痛吗","你心里就没点b数吗","没有,我很膨胀","秀","天秀","陈独秀","蒂花之秀","造化钟神秀","我去买几个橘子","你就站在此地","不要走动","我可能读了假书","贫穷限制了我的想象力","打call","当然是选择原谅她啊","你有freestyle吗","北大还行撒贝宁","不知妻美刘强东","悔创阿里杰克马","一无所有王健林","普通家庭马化腾","别点了","求求你别点了","你还点","你再点!","有本事继续点!","你厉害","我投翔","w(·Д·)w","(#`O′)","（/TДT)/","┭┮﹏┭┮","_(:3」∠)_");jQuery(document).ready(function(t){t("body").click(function(o){var e=t("<span/>").text(a[a_idx]);a_idx=(a_idx+1)%a.length;var i=o.pageX,n=o.pageY;e.css({"z-index":9999,top:n-20,left:i,position:"absolute","font-weight":"bold",color:randomColor(),"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"});t("body").append(e);e.animate({top:n-180,opacity:0},1500,function(){e.remove()})})});var a_click=1;var avatar_plug=0;jQuery(document).ready(function(t){var o=3;var e=44;t(".site-author-image-bilibili").click(function(i){if(a_click%o===0){avatar_plug++;t(".site-avatar-plug-bilibili").attr("src","/images/avatar-plug/bilibili_"+avatar_plug+".png")}if(avatar_plug===e){avatar_plug=0}t(".site-author-image-bilibili").attr("alt","再点击"+(o-a_click%o)+"次头像试试看~~");a_click++})});$(function(){$.backstretch(["/images/background/saber1.jpg","/images/background/saber2.jpg","/images/background/wlop.jpg"],{duration:6e4,fade:1500})});$(function(){$("#lamu img").eq(0).click(function(){$("html,body").animate({scrollTop:$(document).height()},800);return false});$("#leimu img").eq(0).click(function(){$("html,body").animate({scrollTop:0},800);return false})});function createCopyBtns(){var t=$("figure table");if(t.length>0){function o(t){$imgOK=$("#copyBtn").find("#imgSuccess");if($imgOK.css("display")=="none"){$imgOK.css({opacity:0,display:"block"});$imgOK.animate({opacity:1},1e3);setTimeout(function(){$imgOK.animate({opacity:0},2e3)},2e3);setTimeout(function(){$imgOK.css("display","none")},4e3)}}$(".post-body").before('<div id="copyBtn" style="opacity: 0;position: absolute;top: 0;display: none;line-height: 1; font-size:1.5em"><span id="imgCopy" ><i class="fa fa-paste fa-fw"></i></span><span id="imgSuccess" style="display: none;color: #6fb76f;"><i class="fa fa-check-circle fa-fw" aria-hidden="true"></i></span>');var e=new Clipboard("#copyBtn",{target:function(){return document.querySelector("[copyFlag]")},isSupported:function(){return document.querySelector("[copyFlag]")}});e.on("success",function(t){t.clearSelection();o(t)});e.on("error",function(t){console.error("Action:",t.action);console.error("Trigger:",t.trigger)});$("#copyBtn").hover(function(){$(this).stop();$(this).css("opacity",1)},function(){$(this).animate({opacity:0},2e3)})}}$("figure").hover(function(){$("[copyFlag]").removeAttr("copyFlag");$(this).find(".code").attr("copyFlag",1);$currentFigure=$(this);$copyBtn=$("#copyBtn");if($copyBtn.lenght!=0){$copyBtn.stop();$copyBtn.css("opacity",1);$copyBtn.css("display","block");$figureTop=$currentFigure.offset().top;$figureLeft=$currentFigure.offset().left;$figureHeight=$currentFigure.outerHeight(true);$btnWidth=$copyBtn.width();$3btnHeight=$copyBtn.outerHeight(true)*3;$copyBtn.css("left",$figureLeft-$btnWidth-3);$copyBtn.css("top",Math.max($figureTop,Math.min($figureTop+$figureHeight-$3btnHeight,$(window).scrollTop()))+6);$(window).scroll(function(){$copyBtn.css("top",Math.max($figureTop,Math.min($figureTop+$figureHeight-$3btnHeight,$(window).scrollTop()))+6)})}},function(){$("#copyBtn").animate({opacity:0},2e3)});$(document).ready(function(){createCopyBtns()});window.onload=function(){var t=document.title;var o;document.addEventListener("visibilitychange",function(){if(document.hidden){$('[rel="icon"]').attr("href","/failure.ico");$('[rel="shortcut icon"]').attr("href","/failure.ico");document.title="喔唷，崩溃啦！";clearTimeout(o)}else{$('[rel="icon"]').attr("href","/favicon-32x32.ico");$('[rel="shortcut icon"]').attr("href","/favicon-32x32.ico");document.title="咦，页面又好了！";o=setTimeout(function(){document.title=t},2e3)}})};
//rebuild by neat 