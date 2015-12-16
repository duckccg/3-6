/**
 * Created by Administrator on 15-12-8.
 */
var loginmodule = angular.module("login",[]);
loginmodule.controller("login",function($scope,ajax,$location){
    $scope.islogin=true;
   $scope.userlogin=function(){
       ajax({
           type:"post",
           url:"/users/userlogin",
           data:{
               username:$scope.telenum,
               password:$scope.pwd
           },
           success:function(r){
               if(r.length>0){
                   $location.search("loginuser",r[0]);
                   $location.path("/homemobile");
               }else{
                   $scope.islogin=false
               }
           }
       })
   };
    $scope.toregpage=function(){
        $location.path("/regmobile");
    }
});