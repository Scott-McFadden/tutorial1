const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');


console.log('mongo_db uri', keys.mongo.URI);

passport.serializeUser((user, done)=> {
    console.log('serializeUser => ', user.name);
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log('deserializeUser => ', id);
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});
passport.use(new GoogleStrategy(
    {
        clientID: keys.google.client_id,
        clientSecret: keys.google.client_secret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done ) => {
        console.log("access token: " + accessToken);
        console.log("profile: ", profile);
        User.findOne({googleId: profile.id})
            .then((existingUser) => {
                if (existingUser) {
                    // user already exists
                    console.log('user ', profile.displayName, ' already exists');
                    // null - error condition
                    // existingUser  - passed to call back
                    done(null, existingUser);
                }
                else
                {
                    // user was not found - create it.

                    // saves user to database.
                    new User({
                        googleId: profile.id,
                        email: profile.emails[0].value,
                        name: profile.displayName
                    })
                        .save()
                        .then(user => done(null, user));
                    console.log('user ', profile.displayName, ' was created');
                }
            });


        }
    )
);
