const User = require('./User');
const Product = require('./Product');
const Comment = require('./Comment');
const { exit } = require('process');

User.hasMany(Product);

Product.belongsTo(User);

Comment.belongsTo(User);

Comment.belongsTo(Product);

User.hasMany(Comment);

Product.hasMany(Comment);

module.exports = { User, Product, Comment };