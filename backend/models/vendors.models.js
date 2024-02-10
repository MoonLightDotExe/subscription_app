const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({
    vendorName: {
        type: String
    },
    type: {
        type: String
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
        }
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
