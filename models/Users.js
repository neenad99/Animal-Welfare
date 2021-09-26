const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    email:{
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

const Users = mongoose.model('User',userSchema);

module.exports = Users;