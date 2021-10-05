"use strict";

var _require = require("express"),
    Router = _require.Router;

var router = Router();

var _require2 = require("../controllers/tasks.controller"),
    getTasks = _require2.getTasks,
    createTask = _require2.createTask,
    completedTasks = _require2.completedTasks,
    getTask = _require2.getTask,
    editTask = _require2.editTask,
    deleteTask = _require2.deleteTask;

router.route("/").get(getTasks).post(createTask);
router.get("/completed", completedTasks);
router.route("/:id").get(getTask).put(editTask)["delete"](deleteTask);
module.exports = router;