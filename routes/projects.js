
/*
 * GET home page.
 */

var data = require("../data.json");
var subtasks = require("../subtasks.json");

exports.view = function(req, res){
  res.render('projects', data);
};

exports.view = function(req, res){
  res.render('projects', subtasks);
};