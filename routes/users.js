const express = require('express');
const User = require('../models/user');
const catchAsync = require('../utilities/asyncWrap');
const router = express.Router();
const passport = require('passport');
const users = require('../controllers/users')

router.route('/register').get(users.renderRegisterForm)
.post(catchAsync(users.register));


router.route('/login').get(users.loginForm)
.post(passport.authenticate('local',{
    failureFlash:true,
    failureRedirect:'/login'
}),users.login);

router.get('/logout',users.logout);

module.exports = router;