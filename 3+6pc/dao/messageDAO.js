/**
 * Created by Administrator on 15-12-4.
 */
/**
 * Created by lovo_bdk on 15-11-13.
 */
var db = require("./database");
//根据用户名查询信息
exports.findByProduct = function(product,func){
    db.query("select * from messages where message_product=?",product,function(r){
        func(r);
    });
};

exports.addMessage = function(data,func){
    db.query("insert into messages(message_content,message_data,message_product,message_user) values(?,?,?,?)",data,function(){
        func()
    })
};
