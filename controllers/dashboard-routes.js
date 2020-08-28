const router = require('express').Router();
const sequelize = require('../config/connections');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        atributes: [
            'id',
            'title',
            'area',
            'post_content',
            'price',
            'created_at',
            'post_type'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id', 'comment_text', 'user_id', 'created_at'],
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
            const posts = dbPostData.map(post => post.get({ plain: true }));
            console.log(posts);
            res.render('post', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/createpost', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'area',
            'post_content',
            'price',
            'created_at',
            'post_type'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                   'id', 'comment_text', 'user_id', 'created_at'],
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
            // serialize data before passing to template
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('create-post', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
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
            'post_type'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                   'id', 'comment_text', 'user_id', 'created_at'],
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
            const post = dbPostData.get({ plain: true });
            res.render('edit-post', { post, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;