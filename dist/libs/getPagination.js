"use strict";

var getPagination = function getPagination(page, size) {
  var limit = size ? +size : 3;
  var offset = page ? page * limit : 0;
  return {
    limit: limit,
    offset: offset
  };
};

module.exports = getPagination;