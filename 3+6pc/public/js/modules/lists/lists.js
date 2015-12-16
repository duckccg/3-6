/**
 * Created by Administrator on 15-12-1.
 */
var listsmodule = angular.module("lists",[]);
listsmodule.controller("lists",function($scope,ajax,$location){
    $scope.listsearch=$scope.mysearch;
    $scope.showlistspage=function(){
        ajax({
            type:"post",
            url:"/product/findBysearched",
            data:{
                content:$scope.listsearch
            },
            success:function(r){
                console.log(r);
                for(var j=0;j<r.recom.length;j++){
                    r.recom[j].p_showimg="images/showimg/"+r.recom[j].p_showimg+".jpg";
                }
                $scope.recoms= r.recom;
                for( j=0;j<r.list.length;j++){
                    r.list[j].p_showimg="images/showimg/"+r.list[j].p_showimg+".jpg";
                }
                $scope.lists= r.list;
            }
        })
    };
    $scope.showlistspage();
    $scope.todetailpage=function(id){
        $location.path("/details"+id);
    };

    $scope.addtocart=function(prdid){
        if(!$scope.loginuserid){
            alert("请先登录");
            location.href="js/modules/login/login.html"
        }else{
            ajax({
                type:"post",
                url:"/cart/addcart",
                data:{
                    productid:prdid,
                    count:1,
                    userid:$scope.loginuserid,
                    usernick:$scope.usernick
                },
                success:function(){
                    alert("添加成功")
                }
            })
        }
    };



});
