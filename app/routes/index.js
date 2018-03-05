var express = require('express');
var models = require("../models");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var user_id = req.query.user_id || 1;
  models.User.findById(user_id).then(user => {
    var question_id = 1;
    var ret = []
    models.Question.all().then(questions => {
      for (var question of questions){
        models.Vote.findOne({ where: {userId: user.id, questionId: question.id} }).then(vote => {
          console.log("vote: " + vote);
          question.getOptions().then(associatedOptions => {
            // associatedTasks is an array of tasks
            var options = associatedOptions;
            ret.push({ question: question.title, options: options, voted_id: vote.optionId || undefined })
            console.log("RET: " + ret);
          });
        });
      }
      // res.render("index", { ret: ret });
    }).then(() => {
      console.log("ret: " + ret);
      res.send({"ret": ret});
    }).catch(function(reason) {
      console.log(reason);
    });
  });
});

module.exports = router;
