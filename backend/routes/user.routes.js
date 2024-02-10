const express = require('express')
const user = require('../controllers/user.controllers')

const userRouter = express.Router()

userRouter.post('/subscribe', user.subscribeToService)

module.exports = userRouter
