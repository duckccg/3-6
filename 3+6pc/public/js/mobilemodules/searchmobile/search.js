/**
 * Created by Administrator on 15-12-3.
 */
var listsmodule = angular.module("search",[]);
listsmodule.controller("search",function($scope,ajax,$routeParams,$location){
    $scope.content=$routeParams.content;
    $scope.showlistspage=function(){
        ajax({
            type:"post",
            url:"/product/findBysearched",
            data:{
                content:$scope.content
            },
            success:function(r){
                console.log(r);
                //for(var j=0;j<r.recom.length;j++){
                //    r.recom[j].p_showimg="images/showimg/"+r.recom[j].p_showimg+".jpg";
                //}
                //$scope.recoms= r.recom;
                for( j=0;j<r.list.length;j++){
                    r.list[j].p_showimg="images/showimg/"+r.list[j].p_showimg+".jpg";
                }
                $scope.lists= r.list;
            }
        })
    };
    $scope.showlistspage();
    $scope.todetailpage=function(id){
        $location.search("id",id);
        $location.path("/detailsmobile");
    };
    $scope.backtohome=function(){
        $location.path("/homemobile")
    }
});
