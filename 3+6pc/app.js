var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session'); //加载session模块

var userRoute = require('./routes/UserRoute');
var cartRoute = require('./routes/cartRoute');
var productRoute = require('./routes/productRoute');
var messageRoute = require('./routes/messageRoute');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret:"lovo", //加密的随机串
    //cookie:{maxAge:60 * 60 * 1000},
    resave:false,
    saveUninitialized:true

}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoute);
app.use('/product',productRoute);
app.use('/cart',cartRoute);
app.use('/message',messageRoute);



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('服务器已启动，监听地址为：http://3000', host, port);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    if(req.url!="/favicon.ico"){
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    }

});


module.exports = app;
