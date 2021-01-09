const mongoose = require('mongoose');
//Schemas

const Schema = mongoose.Schema;
const LoginSchema = new Schema({
  username:String,
   password:String,
   email:String,
date:{
    type:String,
    default: Date.now()
}
});


//Model
const Login = mongoose.model('Login', LoginSchema);

module.exports = Login;