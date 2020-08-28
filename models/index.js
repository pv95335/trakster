const User = require('./user');
const Product = require('./product');
const Comment = require('./comment');
const { exit } = require('process');

User.hasMany(Product);

Product.belongsTo(User);

Comment.belongsTo(User);

Comment.belongsTo(Product);

User.hasMany(Comment);

Product.hasMany(Comment);

module.exports = { User, Product, Comment };