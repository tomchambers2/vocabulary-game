/*
 * Serve JSON to our AngularJS client
 */

var highscores = [
  {name: 'Bill', score: 100},
  {name: 'Ted', score: 50}
];

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};

exports.submit = function (req, res) {
	console.log(req.body);

  highscores.push(req.body);

  res.end();
};

exports.highscore = function (req, res) {
  res.json({
    highscores: highscores
  });
};