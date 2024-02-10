const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
  service_name: {
    type: String,
    required: [true, 'Please enter the service name'],
  },
  service_price: {
    type: Number,
    required: [true, 'Please enter the service price'],
  },
  service_type: {
    type: String,
    required: [true, 'Please enter the service type'],
  },
  isLocal: {
    type: Boolean,
    required: [true, 'Please provide if the service is local'],
  },
  location: {
    lat: {
      type: Number,
    },
    long: {
      type: Number,
    },
  },
  color: {
    type: String,
  },
})

module.exports = mongoose.model('services', servicesSchema)
