/* 返回随机颜色 */
function randomColor() {
	return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 鼠标点击文字特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": randomColor()
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});

/* bilibili头像挂件点击事件 */
var a_click = 1;
var avatar_plug = 0;
jQuery(document).ready(function($) {
	var frequency = 3;
	$(".site-avatar-plug-bilibili").click(function(e) {
		if (a_click % frequency === 0) {
			avatar_plug ++;
			$(".site-avatar-plug-bilibili").attr("src","/images/avatar-plug/bilibili_" + avatar_plug + ".png");
		}		
		if (avatar_plug === 38) {
			avatar_plug = 0;
		}
		$(".site-avatar-plug-bilibili").attr("alt","再点击" + (frequency - a_click % frequency) + "次头像试试看~~");
		a_click ++;
	});
});