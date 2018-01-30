var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home');
});

router.get('/flash', function(req, res) {
  req.flash('info', 'You are a buttface.');
  //res.render('home');
  return res.redirect(303, '/');
});

module.exports = router;