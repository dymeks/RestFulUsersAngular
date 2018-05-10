require('../config/mongoose.js')();
const mongoose = require('mongoose');


var TaskSchema = new mongoose.Schema({
    title: {type: String,required: true},
    description:{type: String,default:""},
    completed:{type: Boolean,default: false}   
},{timestamps:true});

// mongoose.model('User', UserSchema);
Task = mongoose.model('Task',TaskSchema);
module.exports = Task;
