const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const sequelize = require('../../config/connections');
const withAuth = require('../../utils/auth');









module.exports = router;