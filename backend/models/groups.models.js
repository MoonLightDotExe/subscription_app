const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
  group_name: {
    type: String,
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
  splits: [
    {
      timestamp: Date,
      contributions: [
        {
          user_id: mongoose.Schema.Types.ObjectId,
          amount: Number,
        },
      ],
    },
  ],
  subscriptions: [
    {
      service_name: {
        type: String,
      },
      service_type: {
        type: String,
      },
      location: {
        lat: {
          type: Number,
        },
        lng: {
          type: Number,
        },
      },
      price: {
        type: Number,
      },
    },
  ],
})

module.exports = mongoose.model('groups', groupSchema)
