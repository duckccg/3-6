/**
 * Created by Administrator on 15-11-20.
 */
var mainApp = angular.module("mainApp",["ngRoute","home","lists","cart","details"]);

mainApp.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/lists:id",{templateUrl:"js/modules/lists/lists.html",controller:"lists"});
    $routeProvider.when("/cart",{templateUrl:"js/modules/cart/cart.html",controller:"cart"});
    $routeProvider.when("/details:prdid",{templateUrl:"js/modules/details/details.html",controller:"details"});
    $routeProvider.when("/home",{templateUrl:"js/modules/home/home.html",controller:"home"});
    $routeProvider.otherwise({
        redirectTo:"/home"
    })
}]);
mainApp.factory("ajax",["$http",function(http){
    return function(config){
        //判断请求的方法
        if(config.type == "get"){

            var param = "?";
            for(key in config.data){
                param += key+"="+config.data[key]+"&";
            }
            console.log(param);
            http.get(config.url+param).success(function(data){
                config.success(data);
            });
        }else{
            http.post(config.url,config.data).success(function(data){
                config.success(data);
            });
        }
    }
}]);
mainApp.controller("index",function($scope,ajax,$location){
    $scope.getuser=function(){
        ajax({
            type:"post",
            url:"/users/getuser",
            success:function(r){
                if(r.length>0){
                    sessionStorage.setItem("loginuserid",r[0].user_id);
                    $scope.loginuserid=r[0].user_id;
                    $scope.usernick=r[0].user_nick;
                    $scope.isget = true
                }else{
                    $scope.isget = false
                }
            }
        })
    };
    $scope.getuser();

    $scope.seachthistype=function(content){
        $scope.mysearch=content;
        $location.path("/lists:"+Math.random());
    };

    $scope.myprdsearch=function(){
        $location.path("/lists:"+Math.random());
    };
    $scope.tocartpage=function(){
        if($scope.loginuserid==undefined){
            alert("请先登录");
            location.href="js/modules/login/login.html"
        }else{
            $location.path("/cart")
        }

    };

    $scope.backhomepage=function(){
        $location.path("/home")
    }

});
