'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vote = sequelize.define('Vote', {
    id: { type : DataTypes.INTEGER, primaryKey : true, autoIncrement: true },
    userId: DataTypes.INTEGER,
    optionId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
  };
  return Vote;
};
