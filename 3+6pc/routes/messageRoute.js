/**
 * Created by Administrator on 15-12-4.
 */
var express = require('express');
var router = express.Router();
var messageService = require("../service/messageService");

/* GET users listing. */
//router.post('/findByproduct', function(req, res, next) {
//    messageService.findByProduct(req.body.product,function(r){
//        res.send(r);
//    });
//});

router.post('/addMessage', function(req, res, next) {
    messageService.addMessage([req.body.content,req.body.data,req.body.product,req.body.user],function(){
        res.end();
    });
});


module.exports = router;