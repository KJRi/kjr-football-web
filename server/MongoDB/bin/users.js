var mongoose = require("./connect.js");

var userSchema = new mongoose.Schema({
    name:String,
    password:String,
    psw:String,
    email:String,
});

var User = mongoose.model("user",userSchema);

module.exports = User;