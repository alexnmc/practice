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
    
    Player.remove((err, data) => {  // deletes everything !
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(` was succesfully deleted!`)
    })
})





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

// axios.put('/player/inc/345345345')
// axios.put('/player/dec/345345345')

// update score after each round
playerRouter.put('/inc/:id', (req, res, next) => {
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

// playerRouter.put('/dec/:id')




module.exports = playerRouter