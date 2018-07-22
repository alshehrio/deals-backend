const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')

const dealsRoute = require('./routes/deals-route')
const usersRoute = require('./routes/users-route')


app = new express()


app.use(bodyParser.json())
app.use(passport.initialize())
app.use('/deals', dealsRoute)
app.use('/users', usersRoute)


app.listen(3000, () => console.log('Listening on port 3000'))