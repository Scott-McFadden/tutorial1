const passport = require('passport');
module.exports = (app) => {
    app.get('/callbackgoogle', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', (req,res) =>
    {
        passport.authenticate('google' );
        res.send("logged in");
    });

    app.get('/auth/logout', (req,res) => {
        req.logout();
        res.send("logged out");

    });
    app.get('/api/current_user', (req,res) => {
        res.send(req.user || {user: 'none'});
    });
};
