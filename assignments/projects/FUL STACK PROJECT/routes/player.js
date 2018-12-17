const express = require('express')
const playerRouter = express.Router()
const Player = require("../models/player")





// display player info on play page
playerRouter.get('/:id', (req, res, next) => {
    Player.findOne({_id: req.params.id} , (err, player) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(player)
    })
})


// add new player
playerRouter.post('/', (req, res, next) => {
    const newPlayer = new Player(req.body)
    newPlayer.save((err, player) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(player)
    })
})


// update score after each round
playerRouter.put('/:id', (req, res, next) => {
    Player.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, updatedPlayer) => {
            if (err) {
                return next(err)
            }
            return res.status(201).send(updatedPlayer)
        }
    )
})





module.exports = playerRouter