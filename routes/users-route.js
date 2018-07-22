const router = require('express').Router();
const user = require('../users')


router.post('/', (req, res) => {
    const newUser = user.createUser(req.body.username, req.body.password)
    return res.send(newUser)
})


module.exports = router