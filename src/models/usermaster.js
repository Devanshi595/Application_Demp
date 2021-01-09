const mongoose = require('mongoose');
//Schemas

const Schema = mongoose.Schema;
const UserMasterSchema = new Schema({
  phoneno:String,
  mobileno:String,
   email:String,
   passwordReset: 
  { type: String, 
    select: false },
});


//Model
const User = mongoose.model('User', UserMasterSchema);

module.exports = User;