const router = require('express').Router();
let deals = require('../resources/deals.json')


router.get('/', (req, res) => {
    if (req.query.category) {
        return res.send(deals.filter(deal => deal.dealCategory === req.query.category))
    } else {
        return res.send(deals)
    }
})

router.get('/:id', (req, res) => res.send(deals.find(deal => deal.dealId == req.params.id)))

router.post('/', (req, res) => {
    const deal = { dealId: deals.length + 1, ...req.body }
    deals = [...deals, deal]

    return res.send(deal)
})

router.patch('/:id', (req, res) => {
    deals = deals.map(deal => deal.dealId == req.params.id ? { ...deal, ...req.body } : deal)
    return res.send(deals)
})

router.delete('/:id', (req, res) => {
    deals = deals.filter(deal => deal.dealId != req.params.id)
    return res.send(deals)
})



module.exports = router