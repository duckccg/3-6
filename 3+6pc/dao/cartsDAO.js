/**
 * Created by Administrator on 2015/12/6.
 */
var db = require("./database");
//根据用户名查询信息
exports.deleteCart = function(data,func){
    db.query("delete from carts where car_id=?",data,function(r){
        func(r);
    });
};
exports.addCart = function(data,func){
    db.query("insert into carts(car_count,car_prd_id,car_user_id) values(?,?,?)",data,function(){
        func()
    })
};
exports.findCart = function(data,func){
    db.query("select * from carts where car_user_id=?",data,function(r){
        func(r)
    })
};
exports.updateCart = function(data,func){
    db.query("update carts a set a.car_count = ? where  car_prd_id=? and where  car_user_id=?",data,function(){
        func()
    })
};
exports.getprdid = function(data,func){
    console.log(data);
    db.query("select a.car_prd_id from carts a where a.car_user_id=?",data,function(r){
        func(r)
    })
};
exports.liangbiao =function(id ,func){
    db.query("select * from carts a join products b on a.car_prd_id=b.p_id where a.car_user_id=?",id,function(r){
        func(r)
    })
};