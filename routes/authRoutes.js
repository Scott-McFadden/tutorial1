const passport = require('passport');
const keys = require('../config/keys');
module.exports = (app) => {
    app.get('/callbackgoogle', passport.authenticate('google', {
        scope: ['profile', 'email']
    }), (req,res) => {
       res.redirect(keys.callbackClient + '/surveys');
    });

    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req,res) =>{
            console.log('auth/google/callback called');
            res.redirect(keys.callbackClient + '/surveys');
        }
    );


    app.get('/auth/logout', (req,res) => {
        console.log('log out called');
        req.logout();
        res.redirect(keys.callbackClient + '/');

    });
    app.get('/api/current_user', (req,res) => {
        console.log('user called');
        res.send(req.user || {user: 'none'});
    });
};
