<<<<<<< HEAD
const exphbs = require('express-handlebars');
const path = require('path');
const express = require('express');
const routes = require('./controllers');
const helpers = require('./utils/helper');
const hbs = exphbs.create({ helpers });
const sequelize = require('./config/connections');


const app = express();
const PORT = process.env.PORT || 3001;

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'secret',
  cookie: { expires: 10 * 60 *1000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));




app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  

=======
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
>>>>>>> 78b7ebc6be5a48039e01c8e76e1fefa77127865a
