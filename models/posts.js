"use strict";
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define(
    "posts",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      isLogin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      userId: DataTypes.INTEGER,
      author: DataTypes.STRING,
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  posts.associate = function(models) {
    // associations can be defined here
    posts.hasMany(models.comments, {
      foreignKey: "postId"
    });
  };
  return posts;
};
