/**
 * Created by Administrator on 15-12-8.
 */
$(function(){
    function running(){
        $(".shuffimg").eq(0).animate({
            marginLeft:"-50%"
        },500,function(){
            $(".shuffimg").eq(0).css("margin-left",0);
            $(".shuffimg").eq(1).after($(".shuffimg").eq(0))
        })
    }
    var shuff = setInterval(running,2000);
});