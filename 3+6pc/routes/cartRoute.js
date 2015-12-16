/**
 * Created by Administrator on 15-12-4.
 */
var express = require('express');
var router = express.Router();
var cartService = require("../service/cartService");
var productService = require("../service/productService");

/* GET users listing. */
router.post('/deletecart', function(req, res, next) {
    cartService.deleteCart(req.body.cartid,function(r){
        res.end();
    });
});

router.post('/addcart', function(req, res, next) {
    cartService.addCart([req.body.count,req.body.productid,req.body.userid],function(){
        res.end();
    });
});

router.post('/updatecart', function(req, res, next) {
    cartService.addCart([req.body.count,req.body.productid,req.body.userid],function(){
        res.end();
    });
});
router.post('/findcart', function(req, res, next) {
    cartService.liangbiao(req.body.id,function(r){
        res.send(r);
    });
});




module.exports = router;