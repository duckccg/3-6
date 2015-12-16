/**
 * Created by lovo_bdk on 15-11-13.
 */
var userDAO = require("../dao/UserDAO");
exports.validateTele = function(tele,func){
    userDAO.findByTele(tele,function(r){
        //判断数据库查询的数据
        if(r.length > 0){
            func(false);
        }else{
            func(true);
        }
    });
};
//注册功能
exports.regiesteruser = function(data,func){
    userDAO.registeruser(data,function(){
        func()
    })
};
//登录功能
exports.userlogin = function(data,func){
  userDAO.userlogin(data,function(r){
      func(r)
  })
};
