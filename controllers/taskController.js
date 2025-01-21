const tasks = require('../models/taskModel');


const getAllTasks = (req, res) => {
    res.json({ success: true, data: tasks });
};


const getTaskById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const task = tasks.find(task => task.id === id);
    if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
    }
    res.json({ success: true, data: task });
};

const createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ success: false, message: 'Title and description are required' });
    }
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        completed: false,
    };
    tasks.push(newTask);
    res.status(201).json({ success: true, data: newTask });
};


const updateTask = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const task = tasks.find(task => task.id === id);
    if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
    }
    const { title, description, completed } = req.body;
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;
    res.json({ success: true, data: task });
};


const deleteTask = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        return res.status(404).json({ success: false, message: 'Task not found' });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};
