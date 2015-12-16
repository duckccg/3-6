/**
 * Created by Administrator on 15-12-1.
 */
var detailsmodule = angular.module("details",[]);
detailsmodule.controller("details",function($scope,ajax,$routeParams,$location){
    ////===========加载详情页面=================
    $scope.productid=$routeParams.prdid;
    $scope.showdetailpage=function(){
        ajax({
            type:"post",
            url:"/product/findByproductid",
            data:{
                productid:$scope.productid
            },
            success:function(r){
                console.log(r);
                $scope.messages= r.messages;
                $scope.messagecount = r.messages.length;
                 $scope.product = r.product[0];
                var zoomimgs=$scope.product.p_zoomimg.split(",",3);
                for(var j=0;j<zoomimgs.length;j++){
                    zoomimgs[j]="images/zoomimg/"+zoomimgs[j]+".jpg";
                }
                $scope.zoomimgmiddle= zoomimgs[1];
                $scope.zoomimgsmall= zoomimgs[0];
                console.log(r.recom);
                for(j=0;j<r.recom.length;j++){
                    r.recom[j].p_showimg="images/showimg/"+r.recom[j].p_showimg+".jpg";
                }
                $scope.recoms= r.recom;
                var detailimgs=$scope.product.p_detailimg.split(",",5);
                for( j=0;j<detailimgs.length;j++){
                    detailimgs[j]="images/detailimg/"+detailimgs[j]+".jpg";
                }
                $scope.detailimgs=detailimgs;
            }
        });
    };
    $scope.showdetailpage();
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
        if(!$scope.loginuserid){
            alert("请先登录");
            location.href="js/modules/login/login.html"
        }else{
        ajax({
            type:"post",
            url:"/cart/addcart",
            data:{
                productid:$scope.productid,
                count:$scope.prdcount,
                userid:$scope.loginuserid,
                usernick:$scope.usernick
            },
            success:function(){
            }
        })
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
            if($scope.messagecontent.trim()!=""){
            if($scope.messagenick.trim()==""){
                $scope.messagenick="匿名";
            }
            ajax({
                type:"post",
                url:"/message/addMessage",
                data:{
                    content:$scope.messagecontent,
                    data:new Date(),
                    product:$scope.productid,
                    user:$scope.messagenick
                },
                success:function(){
                    $scope.showdetailpage();
                }
            })
            }else{
                alert("你还没输入任何评价")
            }
    };
    ////////////前往购物车+++++++++++++











    /////========推荐商品跳转+++++++++++++++
    $scope.todetailpage=function(id){
        //sessionStorage.setItem("productid",id);
        $location.path("/details"+id);
    };






    //setTimeout(function(){
    //    console.log(1);
        document.getElementById("img1").onmouseover=function(e){
            console.log(1);
            $("#div2").css("display","block");
            $("#div3").css("display","block");
            move(e)
        };
        document.getElementById("div2").onmousemove=function(e){
            move(e);
            document.getElementById("div2").onmouseout=function(){
                $("#div2").css("display","none");
                $("#div3").css("display","none");
            }
        };

    //},500);




    function move(e){
        //console.log(e.clientX-document.getElementById("img1").getBoundingClientRect().left);
        //console.log(e.clientY-document.getElementById("img1").getBoundingClientRect().top);
        var livex = e.clientX-document.getElementById("img1").getBoundingClientRect().left;
        var livey = e.clientY-document.getElementById("img1").getBoundingClientRect().top;
        if(livex<68){
            $("#div2").css("left",0);
            $("#img2").css("left",0)
        }else if(livex>272){
            $("#div2").css("left",204);
            $("#img2").css("left",340-850)
        }else{
            $("#div2").css("left",livex-68);
            $("#img2").css("left",5*(68-livex)/2);

        }
        if(livey<68){
            $("#div2").css("top",0);
            $("#img2").css("top",0)
        }else if(livey>272){
            $("#div2").css("top",204);
            $("#img2").css("top",340-850)
        }else{
            $("#div2").css("top",livey-68);
            $("#img2").css("top",5*(68-livey)/2);

        }
    }

});
