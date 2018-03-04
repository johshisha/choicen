'use strict';
module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('Question', {
    title: DataTypes.STRING
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.hasMany(models.Option, {foreignKey: "questionId"});
    Question.belongsToMany(models.User,{
      through: models.Vote,
      foreignKey: "questionId",
      otherKey: "userId"
    });
  };
  return Question;
};
