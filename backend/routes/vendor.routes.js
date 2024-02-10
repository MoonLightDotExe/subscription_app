const express = require('express')
const vendor = require('../controllers/vendor.controller')

const vendorRouter = express.Router()

vendorRouter.post('/addItem', vendor.addItem)

vendorRouter.post('/updateItem', vendor.updateItem)

vendorRouter.post('/deleteItem', vendor.deleteItem)

vendorRouter.post('/register', vendor.vendorRegister)


module.exports = vendorRouter
