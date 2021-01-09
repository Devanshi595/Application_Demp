const mongoose = require('mongoose');
//Schemas

const Schema = mongoose.Schema;
const ComplaintSchema = new Schema({
    ComplaintName:String,
    ComplaintId:String,
    Note:String,
date:{
    type:String,
    default: Date.now()
}
});


//Model
const Complaint = mongoose.model('Complaint', ComplaintSchema);

module.exports = Complaint;