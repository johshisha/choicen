var express = require('express');
var models = require("../models");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var user_id = req.query.user_id || 1;
  models.User.findById(user_id).then(user => {
    var ret = []
    models.Question.all().then(questions => {
      var all_length = questions.length;
      questions.forEach(question => {
        models.Vote.findOne({ where: {userId: user.id, questionId: question.id} }).then(vote => {
          console.log("vote: " + vote);
          var voted_id = vote ? vote.optionId : undefined
          question.getOptions().then(associatedOptions => {
            // associatedTasks is an array of tasks
            var options = associatedOptions;
            ret.push({ question: question.title, options: options, voted_id: voted_id })
            console.log("RET: " + ret);
          });
        });
      });
      console.log(ret.length)
      var timer = setInterval(() => {
        console.log(ret.length + ", " + all_length)
        if (ret.length == all_length) {
          clearInterval(timer);
          // res.send({"ret": ret});
          res.render("index", { ret: ret });
        }
      }, 100)
    }).catch(function(reason) {
      console.log(reason);
    });
  });
});

module.exports = router;
