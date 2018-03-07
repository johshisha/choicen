var express = require('express');
var models = require("../models");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var text = "Welcome to Choicen!"
  res.render("index", { text: text });
});

module.exports = router;
