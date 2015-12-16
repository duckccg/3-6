/**
 * Created by Administrator on 15-12-4.
 */
var express = require('express');
var router = express.Router();
var productService = require("../service/productService");
var typeService = require("../service/typeService");
var messageService = require("../service/messageService");

/* GET users listing. */
router.post('/findByproductid', function(req, res, next){
    var prdid = req.body.productid;
    console.log(prdid);
    var detailjson = {};
    productService.findRecom(function(recom){
        detailjson.recom=recom;
        messageService.findByProduct(prdid,function(ms){
            detailjson.messages=ms;
            productService.findByproductid(prdid,function(r){
                detailjson.product=r;
                res.send(detailjson);
            });
        });
    });


});

router.post('/findBysearched', function(req, res, next) {
    var listjson= {};
    productService.findRecom(function(recom){
        listjson.recom=recom;
    });
    typeService.findType(req.body.content,function(r){
        var prdtype=r[0].type_id;
        productService.findBytype(prdtype,function(r){
            listjson.list=r;
            res.send(listjson);
        })
    });
});






router.post('/showHomepage', function(req, res, next) {
        var homejson={};
        //productService.findBytype(1,function(r) {
        //    homejson["floor" + 1] = r;
        //});
        //productService.findBytype(2,function(r) {
        //homejson["floor" + 2] = r;
        //});
        //productService.findBytype(3,function(r) {
        //    homejson["floor" + 3] = r;
        //});productService.findBytype(4,function(r) {
        //    homejson["floor" + 4] = r;
        //});productService.findBytype(5,function(r) {
        //    homejson["floor" + 5] = r;
        //});productService.findBytype(6,function(r) {
        //    homejson["floor" + 6] = r;
        //});
        productService.findHot(function(hot){
            homejson.hot=hot;
            productService.findNew(function(newprd){
                homejson.newrprd=newprd;
                productService.findRecom(function(recom){
                    homejson.recom=recom;
                    var temp =1;
                    for(var i=1;i<7;i++){
                        productService.findBytype(i,function(r) {
                            homejson["floor" + temp] = r;
                            temp++;
                            if(temp>=7){
                                temp=0;
                                res.send(homejson)
                            }
                        });
                    }

                })
            });

        });


});


module.exports = router;