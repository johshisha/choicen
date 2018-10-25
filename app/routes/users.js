var express = require('express');
var models = require("../models");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.all().then(users => {
    res.render('users/index', {users: users});
  });
});

// new
router.get('/new', function(req, res, next) {
    res.render('users/new');
});

// create
router.post('/create', function(req, res) {
  models.User.create({
    name: req.body.name
  }).then(user => {
    res.redirect('/questions?user_id=' + user.id);
  });
});



module.exports = router;
