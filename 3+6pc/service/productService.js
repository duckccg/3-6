/**
 * Created by Administrator on 15-12-4.
 */
var productDAO = require("../dao/productDAO");
exports.findBytype = function(type,func){
    productDAO.findproductbyType(type,function(r){
        func(r)
    });
};

exports.findHot = function(func){
    productDAO.findHot(function(r){
        func(r)
    });
};
exports.findNew = function(func){
    productDAO.findNew(function(r){
        func(r)
    });
};
exports.findRecom = function(func){
    productDAO.findRecom(function(r){
        func(r)
    });
};
exports.findByproductid=function(prdid,func){
    productDAO.findByproductid(prdid,function(r){
        func(r)
    })
};