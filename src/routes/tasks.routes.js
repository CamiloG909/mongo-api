const { Router } = require("express");

const router = Router();

const {
  getTasks,
  createTask,
  completedTasks,
  getTask,
  editTask,
  deleteTask,
} = require("../controllers/tasks.controller");

router.route("/").get(getTasks).post(createTask);

router.get("/completed", completedTasks);

router.route("/:id").get(getTask).put(editTask).delete(deleteTask);

module.exports = router;
