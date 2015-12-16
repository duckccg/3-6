/**
 * Created by lovo_bdk on 15-11-16.
 */
var express = require('express');
var router = express.Router();
var studentService = require("../service/StudentService");


router.get('/showAll',function(req,res,next){
    //设置允许ajax跨域访问的响应头
    //res.setHeader("Access-Control-Allow-Origin","*");
    //res.setHeader("Access-Control-Allow-Methods","GET,POST");
    var curpage = req.query.curpage;
    var eachpage = req.query.eachpage;
    console.log(curpage+" "+eachpage)
    studentService.showAll(curpage,eachpage,function(r){
        res.json(r);
    });
});

router.post('/addStudent',function(req,res,next){
    var username = req.body.username;
    var sex = req.body.sex;
    var age = req.body.age;
    var data = [username,sex,age];
    studentService.addStudent(data,function(){
        res.send("增加成功");
    });
});
router.get('/delStudent/:id',function(req,res,next){

    var id = req.params.id;

    studentService.delStudent(id,function(){
        res.send("删除成功");
    });
});

router.get('/showById/:id',function(req,res,next){

    var id = req.params.id;

    studentService.showById(id,function(r){
        res.json(r);
    });
});

router.post('/updateStudent/:id',function(req,res,next){

    var id = req.params.id;
    var username = req.body.username;
    var sex = req.body.sex;
    var age = req.body.age;

    studentService.updateStudent([username,sex,age,id],function(){
        res.send("修改成功");
    });
});

router.get("/search",function(req,res,next){
    var type = req.query.type;
    var value = req.query.value;
    studentService.search(type,value,function(r){
        res.json(r);
    })
});


module.exports = router;