/**
 * Created by lovo_bdk on 15-11-16.
 */
var studentDAO = require("../dao/StudentDAO");
exports.showAll = function(curpage,eachpage,func){
    studentDAO.findAll(curpage,eachpage,function(r){
        func(r);
    })
}

exports.addStudent = function(data,func){
    studentDAO.add(data,function(){
        func();
    })
}

exports.delStudent = function(id,func){
    studentDAO.del(id,function(){
        func();
    });
}
exports.showById = function(id,func){
    studentDAO.findById(id,function(r){
        func(r);
    })
}

exports.updateStudent = function(data,func){
    studentDAO.update(data,function(){
        func();
    })
}
exports.search = function(type,value,func){
    if(type == "name"){
        studentDAO.findByName(value,function(r){
            func(r);
        })
    }else if(type == "sex"){
        studentDAO.findBySex(value,function(r){
            func(r);
        })
    }else if(type == "age"){
        studentDAO.findByAge(value,function(r){
            func(r);
        })
    }
}
