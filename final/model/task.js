const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        enum:['todo','inProgress','complete'],
        default:'todo'
    },
    dueDate:{
        type:Date,
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true});

const task = mongoose.model('task',taskSchema,'tasks');
//use the third argument to determine the name of db 
//different name means it will be stored in different database inside same collection

module.exports = {
    task
}