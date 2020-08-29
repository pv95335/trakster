const { Post } = require('../models');

const postData = [
    {
        title: "LOREM IPSUM ",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user_id: 1,
        area: 91314,
        post_type: "seller",
        price: 140.00
    },
    {
        title: "Consequat interdum varius sit amet!",
        post_content: "Tortor condimentum lacinia quis vel eros donec ac odio. Enim neque volutpat ac tincidunt vitae semper quis lectus.",
        user_id: 2,
        area: 91364,
        post_type: "buyer",
        price: 100.00

    },
    {
        title: "Diam vulputate ut pharetra sit amet aliquam id",
        post_content: "Id velit ut tortor pretium viverra suspendisse. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
        user_id: 3,
        area: 91377,
        post_type: "Seller",
        price: 3000.00
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;