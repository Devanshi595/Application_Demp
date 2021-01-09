const mongoose = require('mongoose');
//Schemas

const Schema = mongoose.Schema;
const VendorSchema = new Schema({
    VendorName:String,
    Address:String,
    Services:String,
    Notes:String,
date:{
    type:String,
    default: Date.now()
}
});


//Model
const Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;