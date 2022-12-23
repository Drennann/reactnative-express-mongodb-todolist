import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
    const tasks = await Task.find();
    return res.json(tasks)
}

export const postTask = async (req, res) => {
    try{
        console.log(req.body)
        const {title, description} = req.body;
        const newTask = new Task({
            title,
            description
        })
        await newTask.save();
        return res.json({"status": "Task Created."})
    }catch(error){
        return res.json(error)
    }
}

export const putTask = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;
        const taskFounded = await Task.findByIdAndUpdate(id, {
            title,
            description
        })
        return res.json({"status": "Task Actualized."})
    }catch(error){
        return res.json(error)
    }
}

export const deleteTask = async (req, res) => {
    try{
        const {id} = req.params;
        await Task.findByIdAndDelete(id)
        return res.json({"status": "Task Deleted."})
    }catch(error){
        return res.json(error)
    }
}

export const getTask = async (req, res) => {
    try{
        const {id} = req.params;
        const taskFounded = await Task.findById(id)
        return res.json(taskFounded)
    }catch(error){
        return res.json(error)
    }
}