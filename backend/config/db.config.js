const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log(`MongoDB Connected on ${connect.connection.host}`)
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = connectDB
