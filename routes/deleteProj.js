
/*
 * GET deleteProj page.
 */
var data = ("../require/data.json");

exports.view = function(req, res){
    res.render('deleteProj', data);
  };