const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{
    toJSON:{
        transform(doc,ret){
            delete ret.__v;
        }
    }
});

const Contacts = mongoose.model('Contact',userSchema);

module.exports = Contacts;