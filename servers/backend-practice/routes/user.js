const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')


// GET ALL 


userRouter.get('/', (req, res, next) => {
    
    User.find((err, data) => {
        if(err) {
             res.status(500)
             return next(err)
        }
        return res.status(200).send(data)
    })
})





// get one by id..
userRouter.get('/:id', (req, res, next) => {
    User.findOne({_id: req.params.id} , (err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})






userRouter.post('/', (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save(err => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newUser)
    })
})






userRouter.delete('/:id', (req, res, next) => {
     User.findOneAndDelete({_id: req.params.id}, (err, deletedUser) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`${deletedUser.name} was succesfully deleted!`)
    })
})



userRouter.delete('/', (req, res, next) => {
    User.remove( (err, data) => {
       if (err) {
           res.status(500)
           return next(err)
       }
       return res.status(202).send(`was succesfully deleted!`)
   })
})






userRouter.put('/:id', (req, res, next) => {
    User.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, updatedUser) => {
            if (err) {
                
                return next(err)
            }
            return res.status(201).send(updatedUser)
        }
    )
})



//update score


userRouter.put('/inc/:id', (req, res, next) => {
     User.findOneAndUpdate(
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


userRouter.put('/dec/:id', (req, res, next) => {
    User.findOneAndUpdate(
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





module.exports = userRouter