const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.config')
const bodyParser = require('body-parser')
const groupRouter = require('./routes/group.routes')
const cors = require('cors')
const vendorRouter = require('./routes/vendor.routes')

const PORT = process.env.PORT || 5000

const app = express()

connectDB()

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))

app.use('/api/groups/', groupRouter)
app.use('/api/vendors/', vendorRouter)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
