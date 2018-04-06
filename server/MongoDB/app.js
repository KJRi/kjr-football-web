var express = require("express");
var app = express();
// app.use(express.static("www"));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

//cookie-parser模块，用于cookie解析，cookie的值是一个字符串，格式为x1=y1;x2=y2;.....。cookie-parser可以将字符串解析为对象，添加在请求报文对象req.cookies中。
var cookieParser = require("cookie-parser");
app.use(cookieParser());

module.exports = app;