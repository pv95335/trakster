const User = require('./User');
const Post = require('./post');
const Comment = require('./Comment');
const { exit } = require('process');

User.hasMany(Post);

Post.belongsTo(User);

Comment.belongsTo(User);

Comment.belongsTo(Post);

User.hasMany(Comment);

Post.hasMany(Comment);

module.exports = { User, Post, Comment };