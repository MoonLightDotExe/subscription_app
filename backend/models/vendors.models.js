const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  items: [
    {
      itemName: {
        type: String,
      },
      cost: {
        type: Number,
      },
      costMetric: {
        type: String,
      },
      sub_limit: {
        type: Number,
      },
      totalSubs: {
        type: Number,
        default: 0,
      },
      subscribers: [
        {
          user_id: {
            type: String,
            ref: 'User',
          },
        },
      ],
    },
  ],
  location: {
    lat: {
      type: Number,
    },
    long: {
      type: Number,
    },
  },
})

module.exports = mongoose.model('vendors', vendorSchema)
