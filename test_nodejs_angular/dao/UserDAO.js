/**
 * Created by lovo_bdk on 15-11-13.
 */
var db = require("./database");
//根据用户名查询信息
exports.findByName = function(name,func){
    db.query("select * from t_users where u_name=?",[name],function(r){
        func(r);
    });
}
//根据用户名和密码查询
exports.findByNameAndPwd = function(name,pwd,func){
    db.query("select * from t_users where u_name=? and u_pwd=?",[name,pwd],function(r){
        func(r);
    });
}
//增加数据
exports.add = function(data,func){
    db.query("insert into t_users(u_name,u_pwd) values(?,?)",data,function(){
        func();
    });
}