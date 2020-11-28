const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async(accessToken, refreshToken, profile, done) => {
        // console.log(profile); /* Change later, Note: This represents the user info*/
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value
        }

        try {
            let user = await User.findOne({googleId: profile.id});

            if(user) {
                done(null, user);
            } else {
                user = await User.create(newUser);
                done(null, user);
            }

        } catch(err) {
            console.error(err);
        }
    }));

    passport.serializeUser((user, done) => { // Creates an identifying token for a user that is stored in a cookie
        done(null, user.id);
    });
      
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
          done(err, user);
        });
    });
};