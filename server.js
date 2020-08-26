const express = require("express.js");
const hdlbr = require("handlebars");
const mysql = require("mysql");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const expressSession = require("express-session");
const path = require(path);
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;
