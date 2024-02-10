const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    splits: [{
        contribution: [{
            user: mongoose.Schema.Types.ObjectId,
            amount: Number
        }]
    }],
    subscriptions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subscription'
    }]
})

module.exports = mongoose.model('groups', groupSchema)
