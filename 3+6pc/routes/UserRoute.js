var express = require('express');
var router = express.Router();
var userService = require("../service/UserService");

/* GET users listing. */
router.post('/validateTele', function(req, res, next) {
    userService.validateTele(req.body.telenum,function(isUse){
     res.send(isUse);
    });
});

router.post('/registeruser', function(req, res, next) {
    userService.regiesteruser([req.body.telenum,req.body.pwd,req.body.nick],function(){
        res.send("傻逼你注册成功了")
    });
});
router.post('/userlogin',function(req,res,next){
    userService.userlogin([req.body.username,req.body.password],function(r){
        if(r.length>0){
            req.session.user=r
        }
        res.send(r)
    })
});
router.post('/getuser',function(req,res,next){
            var user= req.session.user;
            res.send(user)

});



module.exports = router;
