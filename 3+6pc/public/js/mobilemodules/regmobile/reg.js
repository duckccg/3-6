/**
 * Created by Administrator on 15-12-8.
 */
var regmodule = angular.module("reg",[]);
regmodule.controller("reg",function($scope,ajax,$location){
        $scope.istelenum=true;
        $scope.istele=true;
        $scope.ispwdhide=true;
        $scope.isrpwdhide=true;
        $scope.vttele=function(){

        };
        $scope.vttelenum=function(){
            $scope.istelenum=/^[0-9]{11}$/.test($scope.telenum);
            return /^[0-9]{11}$/.test($scope.telenum);
        };
        $scope.vtpassword=function(){
            $scope.ispwdhide=/^[a-zA-Z0-9]\w{5,17}$/.test($scope.pwd);
            return /^[a-zA-Z0-9]\w{5,17}$/.test($scope.pwd)
        };
        $scope.vtrpwd=function(){
            $scope.isrpwdhide=$scope.pwd==$scope.rpwd;
            return $scope.pwd==$scope.rpwd
        };
        $scope.reguser=function(){
            var one =$scope.vttelenum();
            var two =$scope.vtpassword();
            var three =$scope.vtrpwd();
            if(one&&two&&three){
               ajax({
                   type:"post",
                   url:"/users/registeruser",
                   data:{
                       telenum:$scope.telenum,
                       pwd:$scope.pwd,
                       nick:"该用户很懒没取名"
                   },
                   success:function(){
                       $location.path("/loginmobile");
                   }
               })
            }
        };
    $scope.tologinpage=function(){
        $location.path("/loginmobile")
    }
});