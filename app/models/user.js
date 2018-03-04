'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Option,{
      through: models.Vote,
      foreignKey: "userId",
      otherKey: "optionId"
    });
    User.belongsToMany(models.Question,{
      through: models.Vote,
      foreignKey: "userId",
      otherKey: "questionId"
    });
  };
  return User;
};
