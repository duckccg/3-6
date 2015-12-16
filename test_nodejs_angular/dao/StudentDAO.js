/**
 * Created by lovo_bdk on 15-11-16.
 */
var db = require("./database");
exports.findAll = function(curpage,eachpage,func){
    db.queryByPage(curpage,eachpage,"select * from t_students",function(r){
        func(r);
    });
}

exports.add = function(data,func){
    db.query("insert into t_students (s_name,s_sex,s_age) values(?,?,?)",data,function(){
        func();
    });
}

exports.del = function(id,func){
    db.query("delete from t_students where s_id=?",[id],function(){
        func();
    });
}
exports.findById = function(id,func){
    db.query("select * from t_students where s_id=?",[id],function(r){
        func(r);
    });
}
exports.update = function(data,func){

    db.query("update t_students set s_name=?,s_sex=?,s_age=? where s_id=?",data,function(){
        func();
    });
}
exports.findByName = function(name,func){
    db.query("select * from t_students where s_name like ?",["%"+name+"%"],function(r){
        func(r);
    });
}
exports.findBySex = function(name,func){
    db.query("select * from t_students where s_sex=?",[name],function(r){
        func(r);
    });
}
exports.findByAge = function(name,func){
    db.query("select * from t_students where s_age=?",[name],function(r){
        func(r);
    });
}