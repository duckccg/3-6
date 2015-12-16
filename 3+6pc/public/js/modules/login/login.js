/**
 * Created by Administrator on 15-12-1.
 */
var randomCode = "";
$(function(){
    drawCode();
    $("#loginbtn").click(function(){
        console.log($("#code").val().toUpperCase());
        console.log(randomCode.toUpperCase());
        if($("#code").val().toUpperCase()==randomCode.toUpperCase()){
            $.ajax({
                type:"post",
                url:"/users/userlogin",
                data:{
                    username:$("#username").val(),
                    password:$("#pwd").val()
                },
                success:function(r){
                    if(r.length>0){
                        location.href="../../../index.html"
                    }else{
                        alert("用户名或密码错误")
                    }
                }
            })
        }else{
            alert("验证码错误")
        }

    });

});
////////////////////验证码=============
var drawCode = function(){
    randomCode = "";
    var ctx = $("#cs")[0].getContext("2d");
    ctx.fillStyle = "rgb("+generateCode(256)+","+generateCode(256)+","+generateCode(256)+")";
    ctx.fillRect(0,0,80,35);
    var str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //添加干扰线条
    for(var i = 0; i < 5;i++){
        ctx.beginPath();
        ctx.strokeStyle = "rgb("+generateCode(256)+","+generateCode(256)+","+generateCode(256)+")";
        ctx.moveTo(generateCode(81),generateCode(31));
        ctx.lineTo(generateCode(81),generateCode(31));
        ctx.stroke();
        ctx.closePath();
    }
    for(var i = 0;i < 4;i++){
        ctx.font = 15 + generateCode(11) +"px Arial";
        ctx.fillStyle = "rgb("+generateCode(256)+","+generateCode(256)+","+generateCode(256)+")";
        var code = str.charAt(generateCode(str.length));
        ctx.fillText(code,i*20 + generateCode(11),15 + generateCode(11));
        randomCode += code;
    }
    //$scope.randomCode = randomCode;
    console.log(randomCode);
};

function generateCode(num){
    return parseInt(Math.random()*num)
}