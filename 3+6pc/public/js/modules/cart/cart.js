/**
 * Created by Administrator on 15-12-1.
 */
var cartsmodule = angular.module("cart",[]);
cartsmodule.controller("cart",function($scope,ajax,$location){
    $scope.cartnum=0;
    $scope.total=0;
    $scope.arr=[];
    $scope.checkarr=[];
    $scope.allchecked=false;
    $scope.showcartpage=function(){
        console.log($scope.loginuserid);
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
                    for(var i=0;i< r.length;i++){
                        r[i].prdid=i;
                        $scope.arr.push({num:r[i].car_count});
                        $scope.checkarr.push({ischecked:false})
                    }
                    //for(i=0;i<$scope.arr.length;i++){
                    //    $scope.cartnum+=$scope.arr[i].num;
                    //    $scope.total =parseFloat($scope.total)+$scope.carts[i].p_price*$scope.arr[i].num;
                    //    $scope.total=$scope.total.toFixed(2)
                    //}
                }else{
                    $scope.ishide = true;
                }
            }
        })
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
    };

    //////改变商品数量++++++++++++
    $scope.addcount=function(prdid){
        $scope.arr[prdid].num++;
        $scope.addtotal();

    };
    $scope.delcount=function(prdid){
        if($scope.arr[prdid].num>1){
            $scope.arr[prdid].num--;
            $scope.addtotal();
        }
    };
    ////========继续购物==============+++
    $scope.goshopping=function(){
        $location.path("/home")
    };
    ////+++++++++++去结算++++++++++++++
    $scope.toaccounts=function(){
        alert("本店暂为开通网上支付,想购物请联系陈老板 tele:15208468075")
    };
    //////////////确认购买此商品++++++++++++;
    $scope.buythisgood=function(prdid){
        console.log(prdid);
        $scope.checkarr[prdid].ischecked=!$scope.checkarr[prdid].ischecked;
        $scope.addtotal();
    };
    ////================手动输入+++++++++++++++++
    $scope.handinput=function(){
        $scope.addtotal();
    };
    ///////////////购买全部++++++++++++
    $scope.buyallgoods=function(){
        $scope.allchecked=!$scope.allchecked;
        for(i=0;i<$scope.arr.length;i++){
            $scope.checkarr[i].ischecked=$scope.allchecked;
        }
        $scope.addtotal();
    };
    //////////结算回调++++++++++++
    $scope.addtotal=function(){
        $scope.total=0;
        $scope.cartnum=0;
        for( i=0;i<$scope.arr.length;i++){
            if($scope.checkarr[i].ischecked){
                $scope.cartnum+=parseInt($scope.arr[i].num);
                $scope.total+=$scope.carts[i].p_price*$scope.arr[i].num;
            }
        }
        $scope.total=$scope.total.toFixed(2)
    }
});
