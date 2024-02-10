const mongoose = require('mongoose')

const subscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cost: {
        type: Number
    },
    expiryDate: {
        type: Date
    },
    type: {
        type: String
    }
})

module.exports = mongoose.model('subscriptions', subscriptionSchema)
