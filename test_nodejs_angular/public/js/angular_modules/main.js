/**
 * Created by lovo_bdk on 15-11-20.
 */
var mainApp = angular.module("mainApp",
    ["ngRoute","loginModule","regModule","studentModule"]);

mainApp.config(["$routeProvider",function($routeProvider){
    //配置路由
    $routeProvider.when("/login",{templateUrl:"js/modules/login/login.html",controller:"LoginController"});
    $routeProvider.when("/reg",{templateUrl:"js/modules/reg/reg.html",controller:"RegController"});
    $routeProvider.when("/student/:id/:name",{templateUrl:"js/modules/student/student.html",controller:"StudentController"});
    $routeProvider.otherwise({
        redirectTo:"/login"
    });
}]);

mainApp.factory("generateCode",[function(){
    return function(num){
        return parseInt(Math.random() * num);
    }
}]);
mainApp.factory("ajax",["$http",function(http){
    return function(config){
        //判断请求的方法
        if(config.type == "get"){

            var param = "?";
            for(key in config.data){
                param += key+"="+config.data[key]+"&";
            }
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
mainApp.directive("isUse",function(ajax){
    return {
        restrict:"A",
        require:"ngModel",
        link:function(scope,element,attr,model){
            element.on("blur",function(){
                scope.$apply(function(){
                    ajax({
                        type:"post",
                        url:"/users/validateName",
                        data:{name:model.$modelValue},
                        success:function(data){
                            if(data == "false"){
                                model.$error.use = true;
                            }else{
                                model.$error.use = false;
                            }
                        }
                    });

                });

            });
        }
    }
});
