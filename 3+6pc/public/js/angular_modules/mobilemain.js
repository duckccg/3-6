/**
 * Created by Administrator on 15-12-8.
 */
var mainApp = angular.module("mainApp",["ngRoute","home","search","cart","detail","login","reg"]);

mainApp.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/searchmobile",{templateUrl:"js/mobilemodules/searchmobile/search.html",controller:"search"});
    $routeProvider.when("/cartmobile",{templateUrl:"js/mobilemodules/cartmobile/cart.html",controller:"cart"});
    $routeProvider.when("/detailsmobile",{templateUrl:"js/mobilemodules/detailmobile/detail.html",controller:"detail"});
    $routeProvider.when("/homemobile",{templateUrl:"js/mobilemodules/homemobile/home.html",controller:"home"});
    $routeProvider.when("/loginmobile",{templateUrl:"js/mobilemodules/loginmobile/login.html",controller:"login"});
    $routeProvider.when("/regmobile",{templateUrl:"js/mobilemodules/regmobile/reg.html",controller:"reg"});
    $routeProvider.otherwise({
        redirectTo:"/homemobile"
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
    //$scope.getuser=function(){
    //    ajax({
    //        type:"post",
    //        url:"/users/getuser",
    //        success:function(r){
    //            if(r){
    //                sessionStorage.setItem("loginuserid",r[0].user_id);
    //                $scope.loginuserid=r[0].user_id;
    //                $scope.usernick=r[0].user_nick;
    //                $scope.isget = true
    //            }else{
    //                $scope.isget = false
    //            }
    //        }
    //    })
    //};
    //$scope.getuser();
    //$scope.myprdsearch=function(){
    //    $location.path("/lists:"+Math.random());
    //};
    //$scope.tocartpage=function(){
    //    if($scope.loginuserid==undefined){
    //        alert("请先登录")
    //    }else{
    //        $location.path("/cart")
    //    }
    //
    //}
});
