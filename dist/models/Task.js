"use strict";

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var mongoosePaginate = require("mongoose-paginate-v2");

var taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  versionKey: false,
  timestamps: true
});
taskSchema.plugin(mongoosePaginate);
var Task = model("Task", taskSchema);
module.exports = Task;