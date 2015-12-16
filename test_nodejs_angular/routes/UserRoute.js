var express = require('express');
var router = express.Router();
var userService = require("../service/UserService");

/* GET users listing. */
router.post('/validateName', function(req, res, next) {

  userService.validateName(req.body.name,function(isUse){
     res.send(isUse);
  });
});

router.post('/reg',function(req,res,next){
    var data = [req.body.username,req.body.password];
    console.log(data);
    userService.reg(data,function(){
        res.send("注册成功");

    });
});

router.post('/login',function(req,res,next){

    userService.login(req.body.username,req.body.pwd,function(r){
        if(r.length > 0){
            //登录成功时，将用户信息存放到session中
            req.session.users = r[0];
        }
        res.send(r);

    });
});

router.get("/getSession",function(req,res){
    var users = req.session.users;
    res.send(users);
});



module.exports = router;
