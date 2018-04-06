var app = require("./MongoDB/app.js");
var User = require("./MongoDB/bin/users.js");
var md5 = require("md5");

app.post("/user/regist",function(req,res){
    User.findOne({name:req.body.name},function(err,data){
        if(data){
            res.send("账号已被使用");
        }else{
            var u = new User(req.body);
            // u.psw = md5(u.psw);
            u.save(function(err){
                if(!err){
                    console.log('注册成功');
                }else{
                    console.log(err);
                }
            });
        }
    });
});

//登录接口
app.post("/user/login",function(req,res){
    var condition = {
        name:req.body.name,
        psw:md5(req.body.psw)
    }

    User.findOne(condition,function(err,data){
        if(!data){
            res.send("账号或密码错误");
        }else{
            //res.cookie，设置需要返回给客户端的cookie，第一个参数是cookie名，第二个参数是cookie值，第三个参数是设置选项对象，在设置选项中可以设置有效期。
            res.cookie("account",data.account,{
                //有效期，单位是秒
                maxAge:24*60*60
            });
            console.log('登录成功');
        }
    });
});



app.listen(3000,function(){
    console.log("服务器已开启");
});