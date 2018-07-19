const router = require('express').Router();
const deals = require('../resources/deals.json')


router.get('/', (req, res) => res.send(deals))

router.post('/', (req, res) => {
    const deal = { id: guid(), ...req.body}
    deals.push(deal)
    res.send(deal)
})


module.exports = router