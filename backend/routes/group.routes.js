const express = require('express')
const group = require('../controllers/group.controllers')

const groupRouter = express.Router()

groupRouter.post('/addGroup', group.addGroup)

groupRouter.post('/joinGroup', group.joinGroup)

module.exports = groupRouter
