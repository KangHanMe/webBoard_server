"use strict";
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define(
    "comments",
    {
      isLogin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      userId: DataTypes.INTEGER,
      author: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  comments.associate = function(models) {
    // associations can be defined here
    comments.belongsTo(models.posts);
  };
  return comments;
};
