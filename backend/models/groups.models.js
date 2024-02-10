const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
  group_name: {
    type: String,
    required: [true, 'Please enter Group name'],
  },
  group_code: {
    type: String,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  subscriptions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subscription',
    },
  ],
})

module.exports = mongoose.model('groups', groupSchema)
