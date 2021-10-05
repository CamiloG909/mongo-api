"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var tasksController = {};

var Task = require("../models/Task");

var getPagination = require("../libs/getPagination");

tasksController.getTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, title, condition, _getPagination, limit, offset, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$query = req.query, size = _req$query.size, page = _req$query.page, title = _req$query.title;
            condition = title ? {
              title: {
                $regex: new RegExp(title),
                $options: "i"
              }
            } : {};
            _getPagination = getPagination(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
            _context.next = 5;
            return Task.paginate(condition, {
              offset: offset,
              limit: limit
            });

          case 5:
            data = _context.sent;
            res.json({
              totalItems: data.totalDocs,
              tasks: data.docs,
              totalPages: data.totalPages,
              currentPage: data.page - 1
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

tasksController.createTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, title, description, newTask, newTaskSave;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, description = _req$body.description;
            newTask = new Task({
              title: title,
              description: description,
              done: req.body.done ? req.body.done : false
            });
            _context2.next = 4;
            return newTask.save();

          case 4:
            newTaskSave = _context2.sent;
            res.json({
              message: "Successfully",
              data: newTaskSave
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

tasksController.completedTasks = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Task.find({
              done: true
            });

          case 2:
            tasks = _context3.sent;
            res.json(tasks);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

tasksController.getTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Task.findById(req.params.id);

          case 2:
            task = _context4.sent;
            res.json(task);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

tasksController.editTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, title, description;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description;
            _context5.next = 3;
            return Task.findByIdAndUpdate(req.params.id, {
              title: title,
              description: description,
              done: req.body.done ? req.body.done : false
            });

          case 3:
            res.json({
              message: "Successfully"
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

tasksController.deleteTask = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Task.findByIdAndDelete(req.params.id);

          case 2:
            response = _context6.sent;
            res.json({
              message: "Deleted successfully"
            });

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

module.exports = tasksController;