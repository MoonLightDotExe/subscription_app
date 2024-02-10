const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.config')
const bodyParser = require('body-parser')
const groupRouter = require('./routes/group.routes')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()

connectDB()

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/api/groups/', groupRouter)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
