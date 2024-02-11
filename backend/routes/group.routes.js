const express = require('express')
const group = require('../controllers/group.controllers')

const groupRouter = express.Router()

groupRouter.post('/addGroup', group.addGroup)

groupRouter.post('/joinGroup', group.joinGroup)

groupRouter.post('/addSplit', group.addSplit)

groupRouter.post('/getGroupDetails', group.getGroupDetails)

groupRouter.post('/getSubDetails', group.getSubDetails)

module.exports = groupRouter
