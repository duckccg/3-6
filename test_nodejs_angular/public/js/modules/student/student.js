/**
 * Created by lovo_bdk on 15-11-20.
 */
var studentModule = angular.module("studentModule",[]);
studentModule.controller("StudentController",function($scope,$routeParams,$http,ajax){
    console.log("id:"+$routeParams.id+",name:"+$routeParams.name);
    $scope.getSession = function(){
        ajax({
            type:"get",
            url:"/users/getSession",
            success:function(data){
                if(data){
                   $scope.isLogin = true;
                    $scope.users = data;
                }else{
                    $scope.isLogin = false;

                }
            }
        });
    }
    $scope.getSession();
    $scope.showAll = function(curpage){

        ajax({
            type:"get",
            url:"/students/showAll",
            data:{curpage:curpage,eachpage:3},
            success:function(data){
                        $scope.page = data;
                        $scope.pageAry = [];
                        for(var i = 1;i <= $scope.page.maxpage;i++){
                            $scope.pageAry.push(i);
                        }
            }
        });
        //$http.get("/students/showAll?curpage="+curpage+"&eachpage=3")
        //    .success(function(data){
        //        console.log(data);
        //        $scope.page = data;
        //        $scope.pageAry = [];
        //        for(var i = 1;i <= $scope.page.maxpage;i++){
        //            $scope.pageAry.push(i);
        //        }
        //    });
    };
    $scope.add = function(){
        $http.post("/students/addStudent",{
            username:$scope.addUsername,
            sex:$scope.addSex,
            age:$scope.addAge
        }).success(function(){
            $scope.showAll(1);
        });
    }
    $scope.findById = function(id){
        $http.get("/students/showById/"+id).success(function(data){
            $scope.updateId = data[0].s_id;
            $scope.updateUsername = data[0].s_name;
            $scope.updateSex = data[0].s_sex;
            $scope.updateAge = data[0].s_age;
        });
    }
    $scope.update = function(){
        $http.post("/students/updateStudent/"+$scope.updateId,{
            username:$scope.updateUsername,
            sex:$scope.updateSex,
            age:$scope.updateAge
        }).success(function(){
            $scope.showAll(1);
        });
    }
    $scope.del = function(id){
        $http.get("/students/delStudent/"+id).success(function(){
            $scope.showAll(1);
        });
    }
    $scope.showAll(1);
    $scope.parseInt = parseInt;
});