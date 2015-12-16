/**
 * Created by Administrator on 15-12-3.
 */
var homemodule = angular.module("home",[]);
homemodule.controller("home",function($scope,ajax,$routeParams,$location){
    $scope.loginuser=$routeParams.loginuser;
    $scope.showhomepage=function(){
        ajax({
            type:"post",
            url:"/product/showHomepage",
            success:function(r){
                console.log(r);
                for(var j=0;j<r.recom.length;j++){
                    r.recom[j].p_showimg="images/showimg/"+r.recom[j].p_showimg+".jpg";
                }
                $scope.recoms= r.recom;
                for( j=0;j<r.newrprd.length;j++){
                    r.newrprd[j].p_showimg="images/showimg/"+r.newrprd[j].p_showimg+".jpg";
                }
                $scope.newprds= r.newrprd;
                for( j=0;j<r.floor1.length;j++){
                    r.floor1[j].p_showimg="images/showimg/"+r.floor1[j].p_showimg+".jpg";
                }
                $scope.floor1s= r.floor1;
            }

        })
    };
    $scope.showhomepage();


    $scope.getuser=function(){
        ajax({
            type:"post",
            url:"/users/getuser",
            success:function(r){
                if(r.length>0){
                    $scope.loginuserid=r[0].user_id;
                    $scope.usernick=r[0].user_nick;
                }
            }
        })
    };
    $scope.getuser();







    $scope.todetailpage=function(id){
        $location.search("id",id);
        $location.path("/detailsmobile");
    };
    $scope.tosearchpage = function(){
        $location.search("content",$scope.searchcontent);
        $location.path("/searchmobile");
    };
    $scope.tocartpage=function(){
        if($scope.loginuserid){
            $location.search("loginuser",$scope.loginuser);
            $location.path("/cartmobile")
        }else{
            $location.path("/loginmobile")
        }
    };
    $scope.tologinpage=function(){
        $location.path("/loginmobile")
    }







});
