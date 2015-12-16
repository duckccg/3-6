/**
 * Created by Administrator on 15-12-4.
 */
var messageDAO = require("../dao/messageDAO");
exports.findByProduct = function(product,func){
    messageDAO.findByProduct(product,function(r){
        func(r)
    });
};

exports.addMessage = function(data,func){
    messageDAO.addMessage(data,function(){
        func()
    })
};
