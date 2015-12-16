/**
 * Created by Administrator on 15-12-1.
 */
var randomCode = "";
$(function() {

        $("#telenum").blur(telenum);
        $("#pwd").blur(pwd);
        $("#rpwd").blur(rpwd);
        $("#regtbn").click(reg);
        drawCode();
    }
);
//=======判断手机号
function telenum(){
    if(!/^[0-9]{11}$/.test($("#telenum").val())){
        $("#telenum").parent().next().html("请输入正确的手机号码");
        return false
    }else{
        $("#telenum").parent().next().html("");
        return true
    }
}
//===========判断密码
function pwd(){
    if(!/^[a-zA-Z0-9]\w{5,17}$/.test($("#pwd").val())){
        $("#pwd").parent().next().html("密码格式不正确");
        return false
    }else{
        $("#pwd").parent().next().html("");
        return true
    }
}
//==========判断两次密码是否一致
function rpwd(){
    if($("#pwd").val()== $("#rpwd").val()){
        $("#rpwd").parent().next().html("");
        return true
    }else{
        $("#rpwd").parent().next().html("两次输入密码不一致");
        return false
    }
}
//+++++++++提交===========================
function reg(){
    var istele = telenum();
    var ispwd = pwd();
    var isrpwd =rpwd();
    if($("#code").val().toUpperCase()==randomCode.toUpperCase()){
        if(istele&&ispwd&&isrpwd){
            $.ajax({
                type:"post",
                url:"/users/registeruser",
                data:{
                    telenum:$("#telenum").val(),
                    pwd:$("#pwd").val(),
                    nick:$("#nickname").val()
                },
                success:function(){
                    location.href="../login/login.html"
                }
            })
        }
    }else{
        alert("验证码错误")
    }

}
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