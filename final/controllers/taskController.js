const { response } = require('express');

const Task = require('../model/task').task;

async function createTask(req,res){
    try{
        const task = req.body;
        await Task.create(task);
        res.json({message:"task created successfully"})

    }
    catch(err){
        console.log(err);
        res.json({message:err.message});
    }
}
async function readTask(req, res){
    try{
        const task = await Task.find();
        if(!task){
            return res.status(404).json({message:"No Task Found"});
        }
        return res.json({task});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}
async function updateTask(req,res){
    try {
        const task = req.body.task;

        await Task.updateOne({_id:task._id},{$set:task})
        res.json({message:"Task updated successfully"});
    } 
    catch (err) {
        res.status(500).json({message:err.message});
    }
}
async function deleteTask(req,res){
    try {
        const task = req.body.task;

        await Task.deleteOne({_id:task._id});
        res.json({message:"Task deleted successfully"});
    } 
    catch (err) {
        res.status(500).json({message:err.message});
    }
}
module.exports = {
    createTask,
    readTask,
    updateTask,
    deleteTask
}