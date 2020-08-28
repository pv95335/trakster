const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Post extends Model {}

Post.init(

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
          area: {
              type: DataTypes.INTEGER,
              allowNull: false
          },
          post_content: {
            type: DataTypes.TEXT
            },
          post_type: {
                type: DataTypes.STRING,
                allowNull: false
            },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'User',
              key: 'id'
            }
          }
        },
        {
          sequelize,
          freezeTableName: true,
          underscored: true,
          modelName: 'Post'
        // sequelize
      }
      );



        module.exports = Post;