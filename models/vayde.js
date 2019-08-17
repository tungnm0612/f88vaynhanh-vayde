const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VaydeSchema = new Schema({
    // money:{
    //     type: String,
    //     required: true
    // },
    sdt:{
        type:String
    },
    taisan:{
        type:String,
    },
    noicutru:{
        type:String
    },
    
});

module.exports = mongoose.model("Vayde", VaydeSchema);