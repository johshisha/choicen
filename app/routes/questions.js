var express = require('express');
var models = require("../models");
var router = express.Router();

// index
router.get('/', function(req, res, next) {
  var user_id = req.query.user_id || 1;
  models.User.findById(user_id).then(user => {
    var ret = []
    models.Question.all().then(questions => {
      var all_length = questions.length;
      questions.forEach(question => {
        models.Vote.findOne({ where: {userId: user.id, questionId: question.id} }).then(vote => {
          var voted_id = vote ? vote.optionId : undefined
          question.getOptions().then(associatedOptions => {
            // associatedTasks is an array of tasks
            var options = associatedOptions;
            ret.push({ question: question, options: options, voted_id: voted_id })
          });
        });
      });
      console.log(ret.length)
      var counter = setInterval(() => {
        if (ret.length == all_length) {
          clearInterval(counter);
          // res.send({"ret": ret});
          res.render("questions/index", { ret: ret, user_id: user_id });
        }
      }, 100)
    }).catch(function(reason) {
      console.log(reason);
    });
  });
});

// create
router.post('/create', function(req, res) {
  models.Question.create({
    title: req.body.title
  }).then(question => {
    var question_id = question.id;
    req.body.options.forEach(option_name => {
      models.Option.create({
        name: option_name,
        questionId: question_id
      });
    })
    res.redirect('/questions');
  });
});

module.exports = router;
