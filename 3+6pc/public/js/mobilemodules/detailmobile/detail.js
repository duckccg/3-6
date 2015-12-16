/**
 * Created by Administrator on 15-12-3.
 */
var detailmodule = angular.module("detail",[]);
detailmodule.controller("detail",function($scope,ajax,$routeParams,$location){
    console.log("id:"+$routeParams.id);
    $scope.prdid=$routeParams.id;

    ////===========加载详情页面=================
    $scope.showdetailpage=function(){
        ajax({
            type:"post",
            url:"/product/findByproductid",
            data:{
                productid:$scope.prdid
            },
            success:function(r){
                $scope.messages= r.messages;
                $scope.messagecount = r.messages.length;
                $scope.product = r.product[0];
                var detailimgs=$scope.product.p_detailimg.split(",",5);
                for( j=0;j<detailimgs.length;j++){
                    detailimgs[j]="images/detailimg/"+detailimgs[j]+".jpg";
                }
                $scope.detailimgs=detailimgs;
            }
        });
    };
    $scope.showdetailpage();
    /////++++++++++++++============
    $scope.getuser=function(){
        ajax({
            type:"post",
            url:"/users/getuser",
            success:function(r){
                console.log(r);
                if(r.length>0){
                    $scope.loginuserid=r[0].user_id;
                    $scope.usernick=r[0].user_nick;
                }
            }
        })
    };
    $scope.getuser();


    /////////////+++++++选择商品数量==================
    $scope.prdcount=1;
    $scope.addcount=function(){
        $scope.prdcount++;
    };
    $scope.delcount=function(){
        if($scope.prdcount>1){
            $scope.prdcount--;
        }
    };
    //////////=======添加到购物车===========================
    $scope.addtocart=function(){
        //console.log($scope.loginuser);

            if($scope.loginuserid==undefined){
                alert("请先登录");
                $location.path("/loginmobile")
            }else{
                ajax({
                    type:"post",
                    url:"/cart/addcart",
                    data:{
                        productid:$scope.prdid,
                        count:$scope.prdcount,
                        userid:$scope.loginuserid,
                        usernick:$scope.loginuserid
                    },
                    success:function(){
                        alert("添加成功")
                    }
                })
            }


    };
    //////////结算===============
    $scope.tocartpage=function(){

            if($scope.loginuserid==undefined){
                $location.path("/loginmobile")
            }else{
                $location.search("loginuser",$scope.loginuser);
                $location.path("/cartmobile")
            }


    };
    //////////////详情和评价切换+++++++++++++++
    $scope.isdetail=false;
    $scope.detailchoosed="choosed";
    $scope.detailclick = function(){
        $scope.isdetail=false;
        $scope.detailchoosed="choosed";
        $scope.messagechoosed =""
    };
    $scope.messageclick = function(){
        $scope.isdetail=true;
        $scope.detailchoosed="";
        $scope.messagechoosed="choosed"
    };
    ////////////////评价=================
    $scope.messagecontent="";
    $scope.messagenick="";
    $scope.addMessage=function(){
        if($scope.messagecontent.trim()!="") {
            if ($scope.messagenick.trim() == "") {
                $scope.messagenick = "匿名";
            }
            ajax({
                type: "post",
                url: "/message/addMessage",
                data: {
                    content: $scope.messagecontent,
                    data: new Date(),
                    product: $scope.prdid,
                    user: $scope.messagenick
                },
                success: function () {
                    $scope.showdetailpage();
                }
            })
        }
    };
    $scope.backtohome=function(){
        $location.path("/homemobile")
    }
});