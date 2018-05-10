const tasks = require('../controllers/tasks.js');

module.exports = function(app){
    
    //retrieves all the things
    app.get('/tasks',function(req,res){
        tasks.allTasks(req,res);
    })
    
    //find by id
    app.get('/tasks/:id/',function(req,res){
        tasks.findTask(req,res);
    })
    
    
    app.post('/tasks',function(req,res){
        tasks.createTask(req,res);
    })

    //Update Task by Id
    app.put('/tasks/:id', function(req,res){
        tasks.updateById(req,res);
    })

    //Delete Task by Id
    app.delete('/tasks/:id', function(req,res){
        tasks.delete(req,res);
    })
}