const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');


const mongoURI = keys.mongo.URI
    .replace('<dbuser>', keys.mongo.user)
    .replace('<dbpassword>', keys.mongo.password);

console.log('mongo URI', mongoURI);
mongoose.connect(mongoURI);

const app = express();
app.use (
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.get('/v1test', (req, res) => {
    res.send({ hi: 'from herokuhero'});
});
// Project Id: sailing1-221323
// Project Number:


//FullStackNodeTutorial-Dev

// client Id: 905994347416-hpi7e1o60edcjkccarou8vffoi6hk742.apps.googleusercontent.com
// client secret: VH-hU2cr6S5C02D-oddvuvdV

require('./routes/authRoutes')(app);


const PORT = process.env.PORT   || 5000;

app.listen(PORT);
