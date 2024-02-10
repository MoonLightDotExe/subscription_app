const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
