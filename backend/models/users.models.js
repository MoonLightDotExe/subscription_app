const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name!'],
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
    },
  ],
  address: {
    firstLine: {
      type: String,
    },
    secondLine: {
      type: String,
    },
    thirdLine: {
      type: String,
    },
    pincode: {
      type: String,
    },
  },
  finances: {
    budget: {
      type: Number,
    },
    expenses: [
      {
        date: {
          type: Date,
        },
        amount: {
          type: Number,
        },
      },
    ],
  },
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

module.exports = mongoose.model('users', userSchema)
