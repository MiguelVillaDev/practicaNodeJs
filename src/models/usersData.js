const mongoose = require('mongoose');

const userSchema = mongoose.Schema ({
    name: {
        type: String,
        require: true,
    },
    roll:{
        type:String,
        require:true,
        unique: true,
    },
    registration:{
        type:String,
        require:true,
        unique:true,
    },

});


var userdata = mongoose.model('userdata', userSchema);
module.exports = userdata;