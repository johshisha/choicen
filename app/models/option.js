'use strict';
module.exports = (sequelize, DataTypes) => {
  var Option = sequelize.define('Option', {
    name: DataTypes.STRING,
    questionId: DataTypes.INTEGER
  }, {});
  Option.associate = function(models) {
    // associations can be defined here
    Option.belongsTo(models.Question, {foreignKey: "questionId"});
  };
  return Option;
};
