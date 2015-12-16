/**
 * Created by lovo_bdk on 15-11-20.
 */
var loginModule = angular.module("loginModule",[]);
loginModule.controller("LoginController",function($scope,$location,generateCode,ajax){

    $scope.login = function(){

        if($scope.code == $scope.randomCode){
            ajax({
                type:"post",
                url:"/users/login",
                data:{username:$scope.username,pwd:$scope.pwd},
                success:function(data){
                    console.log(data);
                    if(data.length > 0){
                        //$location.search("id",20);
                        //$location.search("name","cba");
                        $location.path("/student/40/cba");
                    }else{
                        alert("登录失败");
                    }
                }
            });
        }else{
            alert("验证码错误");
        }


    }

    $scope.drawCode = function(){
        var ctx = $("#cs")[0].getContext("2d");
        ctx.fillStyle = "rgb("+generateCode(256)+","+generateCode(256)+","+generateCode(256)+")";
        ctx.fillRect(0,0,80,30);
        var str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ看到几个阿斯顿高大上得分";
        //添加干扰线条
        for(var i = 0; i < 5;i++){
            ctx.beginPath();
            ctx.strokeStyle = "rgb("+generateCode(256)+","+generateCode(256)+","+generateCode(256)+")";
            ctx.moveTo(generateCode(81),generateCode(31));
            ctx.lineTo(generateCode(81),generateCode(31));
            ctx.stroke();
            ctx.closePath();
        }
        var randomCode = "";
        for(var i = 0;i < 4;i++){
            ctx.font = 15 + generateCode(11) +"px Arial";
            ctx.fillStyle = "rgb("+generateCode(256)+","+generateCode(256)+","+generateCode(256)+")";
            var code = str.charAt(generateCode(str.length));
            ctx.fillText(code,i*20 + generateCode(11),15 + generateCode(11));
            randomCode += code;
        }
        $scope.randomCode = randomCode;
        console.log($scope.randomCode);
    }
    $scope.drawCode();

});