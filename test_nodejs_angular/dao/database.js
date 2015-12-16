/**
 * Created by Administrator on 2015-4-14.
 *  by bdk
 *  demo s使用mysql 模块链接 mysql 数据库
 */
// 引用mysql 模块
var mysql  = require('mysql');

/**
 *    获得链接对象
 * @returns {*}   链接对象
 */


function getConAPI(){
    var con = mysql.createConnection({
        host:'127.0.0.1',
        user:'root',
        password:'lovo',
        database:'f21'
    });

    return con;
}
//crud操作
function query(sql,param,func){
    var con = getConAPI();
    if(!func){
        func = param;
        param = [];
    }
    con.query(sql,param,function(e,r){
        if(e){
            console.log("服务器出错："+e);
        }else{
            func(r);
        }
        //关闭连接
        con.end();
    });
}
//分页查询
function queryByPage(curpage,eachpage,sql,param,func){
    var con = getConAPI();
    if(!curpage || curpage <= 0){
        curpage = 1;
    }
    if(!func){
        func = param;
        param = [];
    }
    con.query("select count(*) cnt from ("+sql+") t",param,function(e,r){
        //获取总数量
        var count = r[0].cnt;
        //获取总页码
        var maxpage = Math.ceil(count/eachpage);
        sql += " limit "+((curpage-1)*eachpage)+","+eachpage;
        var inner_con = getConAPI();
        inner_con.query(sql,param,function(e,r){


            var page = {"curpage":curpage,"maxpage":maxpage,"eachpage":eachpage};
            if(e){
                console.log("服务器出错："+e);
            }else{
                page.data = r;
                func(page);
            }

            //关闭连接
            inner_con.end();

        });
        //关闭连接
        con.end();

    });

}
exports.getCon = getConAPI;
exports.query = query;
exports.queryByPage = queryByPage;