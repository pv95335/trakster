const router = require('express').Router();
const sequelize = require('../config/connections');
const { Product, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Product.findAll({
        where: {
            user_id: req.session.user_id
        },
        atributes: [
          'id',
          'title',
          'created_at',
          'post_content',
          'zip_code'  
        ],
        include: [
            {
                model: Comment,
                attributes: [

                ]
            }
        ]
    })
})


module.exports = router;