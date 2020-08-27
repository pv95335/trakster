const router = require('express').Router();
const { Product, User, Comment } = require('../../models');
const sequelize = require('../../config/connections');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Product.findAll({
        attributes: [
            'id',
            'title',
            'area',
            'post_content',
            'price',
            'created_at',
            'post_type',
            'user_id'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username', 'email']
                }
            },
            {
                model: User,
                attributes: ['username', 'email']
            },
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/:id', (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'area',
            'post_content',
            'price',
            'created_at',
            'post_type',
            'user_id'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username', 'email']
                }
            },
            {
                model: User,
                attributes: ['username', 'email']
            }
        ]    
    })
    .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.post('/', withAuth, (req, res) => {
 
    Product.create({
      title: req.body.title,
      post_content: req.body.post_content,
      area: req.body.area,
      price: req.body.price,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  router.put('/:id', withAuth, (req, res) => {
    Product.update(
      {
        title: req.body.title,
        post_content: req.body.post_content,
        area: req.body.area,
        price: req.body.price
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found'});
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  router.delete('/:id', withAuth, (req, res) => {
    Product.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        json.status(500).json(err);
      });
  });

module.exports = router;