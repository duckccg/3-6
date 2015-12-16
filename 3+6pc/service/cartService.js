/**
 * Created by Administrator on 15-12-4.
 */
var cartDAO = require("../dao/cartsDAO");
exports.deleteCart = function(data,func){
    cartDAO.deleteCart(data,function(r){
        func(r)
    });
};
//注册功能
exports.addCart = function(data,func){
   cartDAO.addCart(data,function(){
        func()
    })
};
exports.findCart = function(data,func){
    cartDAO.findCart(data,function(r){
        func(r)
    })
};
exports.updateCart = function(data,func){
    cartDAO.updateCart(data,function(){
        func()
    })
};
exports.getprdid = function(data,func){
    cartDAO.getprdid(data,function(r){
        func(r)
    })
};
exports.liangbiao=function(id,func){
    cartDAO.liangbiao(id, function (r) {
        func(r)
    })
}