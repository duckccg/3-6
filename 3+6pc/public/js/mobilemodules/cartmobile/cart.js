/**
 * Created by Administrator on 15-12-8.
 */
var cartmodule = angular.module("cart",[]);
cartmodule.controller("cart",function($scope,ajax,$routeParams,$location){
    $scope.loginuser=$routeParams.loginuser;
    console.log($scope.loginuser);
    $scope.cartnum=0;
    $scope.total=0;
    $scope.showcartpage=function(){
            ajax({
                type:"post",
                url:"/users/getuser",
                success:function(r){
                    if(r.length>0){
                        $scope.loginuserid=r[0].user_id;
                        ajax({
                            type:"post",
                            url:"/cart/findcart",
                            data:{
                                id:$scope.loginuserid
                            },
                            success:function(r){
                                console.log(r);
                                if(r.length>0){
                                    $scope.ishide=false;
                                    $scope.carts=r;
                                    $scope.cartnum= r.length;
                                    for(var i=0;i< r.length;i++){
                                        $scope.total+=r[i].car_count*r[i].p_price
                                    }
                                }else{
                                    $scope.ishide = true;
                                }
                            }
                        })
                    }
                }
            });

    };
    $scope.showcartpage();
    $scope.deletecart=function(cartid){
        ajax({
            type:"post",
            url:"/cart/deletecart",
            data:{
                cartid:cartid
            },
            success:function(){
                $scope.showcartpage()
            }
        })
    }













});