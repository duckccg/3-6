/**
 * Created by Administrator on 2015/12/7.
 */
$(function(){
    var running = setInterval(shuff,4000);
    function shuff(){
        $(".div").css("background-image","url("+ $(".shuff img").last().attr("src") +")");
        $(".shuff img").last().insertBefore($(".shuff img").first());
        $(".div").eq(0).animate({
            margin:"-50% 0 0 -50%"
        },1500,function(){
            $(".div").eq(0).css("background-image","");
            $(".div").eq(0).css("margin","0")
        }).next().animate({
            margin:"-50% -50% 0 0"
        },1500,function(){
            $(".div").eq(1).css("background-image","");
            $(".div").eq(1).css("margin","0")
        }).next().animate({
            margin:"0 0 -50% -50%"
        },1500,function(){
            $(".div").eq(2).css("background-image","");
            $(".div").eq(2).css("margin","0")
        }).next().animate({
            margin:"0 -50% -50% 0"
        },1500,function(){
            $(".div").eq(3).css("background-image","");
            $(".div").eq(3).css("margin","0")
        })
    }


});





function letfly(){
    console.info(sessionStorage.getItem("loginuserid"));
    if(sessionStorage.getItem("loginuserid")){
        var imgfly = document.getElementById("imgfly");
        var car = document.getElementById("car");
        var carpos = car.getBoundingClientRect();
        var pos = imgfly.getBoundingClientRect();
        console.log(pos.left);
        console.log(pos.top);
        $(imgfly).css("position","fixed").css("left",pos.left).css("top",pos.top).animate({
            left:carpos.left,
            top:carpos.top,
            width:"3%"
        },1000,function(){
            $(imgfly).css("position","absolute").css("left","0").css("top","auto").css("width","340px")
        })
    }

}







