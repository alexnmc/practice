const express = require('express')
const bountyRouter = express.Router()
const Bounty = require("../models/bounty")


bountyRouter.get('/', (req, res, next) => {
    Bounty.find((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

bountyRouter.get('/:id', (req, res, next) => {
    Bounty.findOne({_id: req.params.id} , (err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

bountyRouter.post('/', (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save(err => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newBounty)
    })
})

bountyRouter.put('/:id', (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if (err) {
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

 bountyRouter.delete('/:id', (req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.id}, (err, deletedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`${deletedBounty.name} was succesfully deleted!`)
    })
})


module.exports = bountyRouter