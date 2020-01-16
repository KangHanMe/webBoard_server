'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    isLogin: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    password: DataTypes.STRING
  }, {});
  posts.associate = function(models) {
    // associations can be defined here
  };
  return posts;
};