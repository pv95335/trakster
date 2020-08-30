const { User } = require('../models');

const userData = [
    {
        username: "lernan_tino",
        email: "lernan_tino@gmail.com",
        password: "password1!"
    },
    {
    username: "lernan_tino2",
        email: "lernan_tino2@gmail.com",
        password: "password2!"
    },
    {
        username: "lernan_tino3",
        email: "lernan_tino3@gmail.com",
        password: "password3!"
    },
];


const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;