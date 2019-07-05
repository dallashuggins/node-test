const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.set('port', process.env.APP_PORT || '3000')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

module.exports = app
