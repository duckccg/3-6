/**
 * Created by Administrator on 15-12-4.
 */
var typeDAO = require("../dao/typeDAO");
exports.findType = function(content,func){
    typeDAO.findType(content,function(r){
        func(r)
    });
};

