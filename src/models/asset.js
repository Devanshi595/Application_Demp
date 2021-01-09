const mongoose = require('mongoose');
//Schemas

const Schema = mongoose.Schema;
const AssetSchema = new Schema({
   AssetId:String,
   Address:String,
   RTSP:String,
date:{
    type:String,
    default: Date.now()
}
});


//Model
const Asset = mongoose.model('Asset', AssetSchema);

module.exports = Asset;