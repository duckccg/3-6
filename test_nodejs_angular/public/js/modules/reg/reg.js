var regModule = angular.module("regModule",[]);
regModule.controller("RegController",function($scope,$http,$location,ajax){
    $scope.validateUsername = function(){
        console.log(/^[0-9a-zA-Z]$/.test($scope.username));
        if($scope.username && /^[0-9a-zA-Z]{6,20}$/.test($scope.username)){
            $http.post("/users/validateName",{name:$scope.username})
                .success(function(data){
                    if(data == "true"){
                        $scope.usernameLabel = "正确";
                        $scope.isUsernameRight = "green";
                    }else{
                        $scope.usernameLabel = "用户名已存在";
                        $scope.isUsernameRight = "red";
                    }
                });

        }else{
            $scope.usernameLabel = "格式不正确";
            $scope.isUsernameRight = "red";
        }
    }
    $scope.validatePwd = function(){
        if($scope.pwd && /^.{6,}$/.test($scope.pwd)){
            $scope.pwdLabel = "正确";
            $scope.isPwdRight = "green";
        }else{
            $scope.pwdLabel = "格式不正确";
            $scope.isPwdRight = "red";
        }
    }
    $scope.reg = function(){
        $scope.validateUsername();
        $scope.validatePwd();
        if($scope.isUsernameRight == "green"
            && $scope.isPwdRight == "green"){
            //$http.post("/users/reg",{username:$scope.username,password:$scope.pwd})
            //    .success(function(){
            //        $location.path("/login");
            //    });

            ajax({
                type:"post",
                url:"/users/reg",
                data:{username:$scope.username,password:$scope.pwd},
                success:function(){
                    $location.path("/login");
                }
            });
        }
    }
});