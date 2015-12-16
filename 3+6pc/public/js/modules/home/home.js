/**
 * Created by Administrator on 15-12-1.
 */
var homeModule = angular.module("home",[]);
homeModule.controller("home",function($scope,ajax,$location){
///首页加载
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
                for( j=0;j<r.floor2.length;j++){
                    r.floor2[j].p_showimg="images/showimg/"+r.floor2[j].p_showimg+".jpg";
                }
                $scope.floor2s= r.floor2;
                for( j=0;j<r.floor3.length;j++){
                    r.floor3[j].p_showimg="images/showimg/"+r.floor3[j].p_showimg+".jpg";
                }
                $scope.floor3s= r.floor3;
                for( j=0;j<r.floor4.length;j++){
                    r.floor4[j].p_showimg="images/showimg/"+r.floor4[j].p_showimg+".jpg";
                }
                $scope.floor4s= r.floor4;
                for( j=0;j<r.floor5.length;j++){
                    r.floor5[j].p_showimg="images/showimg/"+r.floor5[j].p_showimg+".jpg";
                }
                $scope.floor5s= r.floor5;
                for( j=0;j<r.floor6.length;j++){
                    r.floor6[j].p_showimg="images/showimg/"+r.floor6[j].p_showimg+".jpg";
                }
                $scope.floor6s= r.floor6;

            }

        })



    };
    $scope.showhomepage();
    $scope.todetailpage=function(id){
        $location.path("/details"+id);
    };





























//=================轮播===============
//    $scope.hide1 = true;
//    $scope.bgcolor1="#999999";
//    $scope.hide2 = false;
//    $scope.bgcolor2="#e4393c";
//    $scope.hide3 = true;
//    $scope.bgcolor3="#999999";
//    var i=0;
//    var run=setInterval(shuff,2000);
//    function shuff(){
//        $scope.$apply(function(){
//            status()
//        });
//        i++;
//    }
//    function status(){
//        if(i%3==0){
//            $scope.hide2 = true;
//            $scope.bgcolor2="#999999";
//            $scope.hide1 = false;
//            $scope.bgcolor1="#e4393c";
//            $scope.hide3 = true;
//            $scope.bgcolor3="#999999";
//        }else if(i%3==1){
//            $scope.hide1 = true;
//            $scope.bgcolor1="#999999";
//            $scope.hide2 = false;
//            $scope.bgcolor2="#e4393c";
//            $scope.hide3 = true;
//            $scope.bgcolor3="#999999";
//        }else{
//            $scope.hide1 = true;
//            $scope.bgcolor1="#999999";
//            $scope.hide3 = false;
//            $scope.bgcolor3="#e4393c";
//            $scope.hide2 = true;
//            $scope.bgcolor2="#999999";
//        }
//    }
//    $scope.moveonimg=function(obj){
//        console.log(obj);
//        clearInterval(run);
//        i=obj;
////               $scope.$apply(function(){
//        status();
////               })
//    };
//    $scope.moveoutimg=function(){
//        run=setInterval(shuff,2000);
//    };
});