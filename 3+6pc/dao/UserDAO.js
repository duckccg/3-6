/**
 * Created by lovo_bdk on 15-11-13.
 */
var db = require("./database");
//根据用户名查询信息
exports.findByTele = function(tele,func){
    db.query("select * from users where user_tele=?",tele,function(r){
        func(r);
    });
};

exports.registeruser = function(data,func){
    db.query("insert into users(user_tele,user_pwd,user_nick) values(?,?,?)",data,function(){
        func()
    })
};

exports.userlogin = function(data,func){
    db.query("select * from users where user_tele=? and user_pwd=?",data,function(r){
        func(r)
    })
};
