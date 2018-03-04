var express = require('express');
var models = require("../models");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var user_id = req.query.user_id || 1;
  var question_id = 1;
  models.Question.find(
    {
      "where": {"id": question_id},
    }
  ).then(function(question){
    console.log("question:" + question);
    question.getOptions().then(associatedOptions => {
      // associatedTasks is an array of tasks
      var options = associatedOptions;
      console.log("question.options:" + options);
      // res.send({"title": question.title, "options": options});
      res.render("index", { question: question.title, "options": options });
    });
  }).catch(function(reason) {
    console.log(reason);
  });
});

module.exports = router;
