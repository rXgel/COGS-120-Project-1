
/*
 * GET home page.
 */
var team = ("../require/team.json")
var data = ("..require/data.json")

exports.view = function(req, res){
  res.render('team', team);
};

exports.view = function(req, res){
  res.render('team', data);
};