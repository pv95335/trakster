const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Product extends Model {}

Product.init(
{
id: {
type: DataTypes.INTEGER,
allowNull: false,
primaryKey: true,
autoIncrement: true
},
title: {
    type: DataTypes.STRING,
    allowNull: false
}, 
post_content: {
    type: DataTypes.TEXT,
    allowNull: false
},
price: {
    type: Number,
    required: true
},
//zip code
area: {
    type: Number,
    reuired: true
},
user_id: {
    type: DataTypes.INTEGER,
    references: {
        moled: 'User',
        key: 'id'
    }
}
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product'
}
);

// Product Table: User ID, Username, Email, Buying, Selling, ZIP Code, Post, Price
//Post Table: User ID, Username, Post, Email, Passwords, Products = true or false







module.exports = Product;