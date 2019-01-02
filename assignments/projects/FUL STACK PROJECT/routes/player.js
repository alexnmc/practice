const express = require('express')
const playerRouter = express.Router()
const Player = require("../models/player")



playerRouter.get('/', (req, res) => {    // for testing only
    
    Player.find((err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)

    })
})


playerRouter.delete('/', (req, res, next) => {
    
    Player.remove((err, data) => {      // for testing, deletes everything !
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(` was succesfully deleted!`)
    })
})



//  this route is useless, the post request handles everything..I use it for testing
playerRouter.get('/:id', (req, res, next) => {
    Player.findOne({_id: req.params.id} , (err, player) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(player)
    })
})


// find player or add new player, the response data from this route is the player info displayed on the play page(body)
playerRouter.post('/:name', (req, res, next) => {
    Player.findOne({name: req.params.name}, (err, player) => {
        if (err) {
            res.status(500)
            return next(err)
        }
            
        if(player){ 
            return res.status(200).send(player)

        } else {
            
            const newPlayer = new Player(req.body)
            newPlayer.save((err, player) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(player)
            })
        }
    })
})


// update score after each round:
playerRouter.put('/inc/:id', (req, res, next) => {
    Player.findOneAndUpdate(
        {_id: req.params.id},
        {$inc: {score: 1}},
        {new: true},
        (err, updatedPlayer) => {
            if (err) {
                return next(err)
            }
            return res.status(201).send(updatedPlayer)
        }
    )
})


playerRouter.put('/dec/:id', (req, res, next) => {
    Player.findOneAndUpdate(
        {_id: req.params.id},
        {$inc: {score: -1}},
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