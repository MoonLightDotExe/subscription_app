const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({
    vendorName: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    items: [{
        itemName: {
            type: String
        },
        cost: {
            type: Number
        },
        costMetric: {
            type: String
        },
        subscribers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    }],
    location: {
        lat: {
            type: Number
        },
        long: {
            type: Number
        }
    }
})

module.exports = mongoose.model('vendors', vendorSchema)
