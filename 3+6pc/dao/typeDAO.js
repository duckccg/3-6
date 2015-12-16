/**
 * Created by Administrator on 15-12-4.
 */
/**
 * Created by lovo_bdk on 15-11-13.
 */
var db = require("./database");
//根据用户名查询信息
exports.findType = function(content,func){
    console.log(content);
    db.query("select a.type_id from types a where a.type_content like '%"+content+"%'",[],function(r){
        func(r);
        console.log(r)
    });
};
