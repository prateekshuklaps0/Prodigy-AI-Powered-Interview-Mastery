const express = require('express');
const {authorization} = require('../middlewares/auth.middleware')
const { register, login, logout } = require('../controllers/user.controllers');

const userRouter = express.Router();

userRouter.post('/register', register);

userRouter.post('/login', login);

userRouter.use(authorization);
userRouter.post('/logout', logout);

module.exports = userRouter