var Task  = require('../models/task.js');
// const mongoose = require('mongoose');
// var User = mongoose.model('User');
module.exports = {
    allTasks:function(req,res){
        Task.find({}, function(err, tasks) {
            console.log(tasks);
            res.json(tasks);    
        })
        console.log("I'm here!")
    },
    createTask:function(req,res){
        console.log(req.body);
        var task = new Task({
            title:req.body.title,
            description:req.body.description
        });
        task.save(function(err){
            console.log('I just finished saving!');
            if(err){
                console.log("something went wrong.");
                console.log(err.errors);
                res.json({error:err});
            } else {
                console.log("successfully added a user!")
                res.redirect('/tasks');
            }
        })
    },
    delete:function(req,res){
        Task.deleteOne({_id:req.params.id}, function(err){
            if(err)
            {
                res.json(err);
            }else {
                res.redirect('/');
            }    
        })
    },
    findTask: function(req,res){
        Task.find({_id:req.params.id}, function(err, users) {
            console.log(users);
            res.json(users);    
        })
    },
    updateById:function(req,res){
        let updatedInfo = {
            'title':req.body.title,
            'document':req.body.description,
            'completed':req.body.completed
        }
        Task.updateOne({_id:req.params.id},updatedInfo,function(err,data){
            if(err)
            {
                console.log("I failed.");
            } else {
                res.redirect('/')
            }
        })
    }
}