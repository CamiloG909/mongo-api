const tasksController = {};

const Task = require("../models/Task");

const getPagination = require("../libs/getPagination");

tasksController.getTasks = async (req, res) => {
  const { size, page, title } = req.query;

  const condition = title
    ? {
        title: { $regex: new RegExp(title), $options: "i" },
      }
    : {};

  const { limit, offset } = getPagination(page, size);
  const data = await Task.paginate(condition, { offset, limit });
  res.json({
    totalItems: data.totalDocs,
    tasks: data.docs,
    totalPages: data.totalPages,
    currentPage: data.page - 1,
  });
};

tasksController.createTask = async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({
    title,
    description,
    done: req.body.done ? req.body.done : false,
  });
  const newTaskSave = await newTask.save();
  res.json({ message: "Successfully", data: newTaskSave });
};

tasksController.completedTasks = async (req, res) => {
  const tasks = await Task.find({ done: true });
  res.json(tasks);
};

tasksController.getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

tasksController.editTask = async (req, res) => {
  const { title, description } = req.body;
  await Task.findByIdAndUpdate(req.params.id, {
    title,
    description,
    done: req.body.done ? req.body.done : false,
  });
  res.json({ message: "Successfully" });
};

tasksController.deleteTask = async (req, res) => {
  const response = await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};

module.exports = tasksController;
