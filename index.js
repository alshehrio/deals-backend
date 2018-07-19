const express = require('express')
const bodyParser = require('body-parser')

const dealsRoute = require('./routes/deals-route')


app = new express()


app.use(bodyParser.json())
app.use('/deals', dealsRoute)


app.listen(3000, () => console.log('Listening on port 3000'))