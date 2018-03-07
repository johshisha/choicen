var express = require('express');
var models = require("../models");
var router = express.Router();

// create_or_update
router.post('/create_or_update', function(req, res) {
  models.Vote.findOrCreate({
    "where": {
      userId: req.body.user_id,
      questionId: req.body.question_id
    },
    "defaults": {
      userId: req.body.user_id,
      questionId: req.body.question_id,
      optionId: req.body.option_id
    }
  }).spread(function(vote, created){
    var vote_id = vote.id;
    if (!created) {
      vote.update({
        optionId: req.body.option_id
      });
    }
    res.redirect('/questions');
  });
});

module.exports = router;
