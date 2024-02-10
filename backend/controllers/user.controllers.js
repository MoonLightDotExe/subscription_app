const dotenv = require('dotenv').config()
const user = require('../repository/user.repository')

module.exports = {
  subscribeToService: async (req, res) => {
    try {
      const data = await user.subscribeToService(req.body)
      console.log(data)
      res.status(201).json({
        success: true,
        data,
        message: 'Subscribed to service successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err,
        message: 'Subscription failed!',
      })
    }
  },
}
