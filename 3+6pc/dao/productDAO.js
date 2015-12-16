/**
 * Created by Administrator on 15-12-4.
 */
var db = require("./database");
//根据用户名查询信息
exports.findproductbyType = function(type,func){
    db.query("select * from products where p_type=?",type,function(r){
        func(r);
    });
};
exports.findHot = function(func){
    db.query("select * from products a join hots b on a.p_id=b.hot_product",[],function(r){
        func(r);
    });
};
exports.findNew = function(func){
    db.query("select * from products a join news b on a.p_id=b.new_product",[],function(r){
        func(r);
    });
};
exports.findRecom = function(func){
    db.query("select * from products a join recoms b on a.p_id=b.recom_product",[],function(r){
        func(r);
    });
};
exports.findByproductid=function(prdid,func){
    db.query("select * from products where p_id=?",prdid,function(r){
        func(r);
    });
};
