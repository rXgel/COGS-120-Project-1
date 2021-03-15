
/*
 * GET about page.
 */
var data = require("../data.json");
var subtasks = require("../subtasks.json");

exports.view = function(req, res){
  res.render('subtasks', data);
};

exports.view = function(req, res){
  res.render('subtasks', subtasks);
};