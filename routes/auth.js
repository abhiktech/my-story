const express = require('express');
const passport = require('passport');

const router = express.Router();

const {ensureAuth, ensureGuest} = require('../middleware/auth');

// @desc Authenticate with google, directs to google login page, scope specifies what info we want
// @route GET /auth/google
router.get('/google', ensureGuest, passport.authenticate('google', {scope: ['profile']}));

// @desc Google auth callback, google returns info to server
// @route GET /auth/google/callback
router.get('/google/callback', ensureGuest, passport.authenticate('google', {failureRedirect: '/'}), (req, res) => {
    res.redirect('/dashboard');
});

// @desc Logout user
// @route GET /auth/logout
router.get('/logout', ensureAuth, (req, res) => {
    req.session.destroy(); // Delete session object from MongoDB storage
    req.logout();
    res.redirect('/');
});

module.exports = router;