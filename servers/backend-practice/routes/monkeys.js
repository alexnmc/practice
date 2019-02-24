const express = require('express')
const monkeyRouter = express.Router()
const Monkey = require('../models/monkeys')


// GET ALL 


monkeyRouter.get('/', (req, res, next) => {
    
    Monkey.find((err, data) => {
        if(err) {
             res.status(500)
             return next(err)
        }
        return res.status(200).send(data)
    })
})





// get one by id..
monkeyRouter.get('/:id', (req, res, next) => {
    Monkey.findOne({_id: req.params.id} , (err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})






monkeyRouter.post('/', (req, res, next) => {
    const newMonkey = new Monkey(req.body)
    newMonkey.save(err => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newMonkey)
    })
})






monkeyRouter.delete('/:id', (req, res, next) => {
    Monkey.findOneAndDelete({_id: req.params.id}, (err, deletedMonkey) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`${deletedMonkey.name} was succesfully deleted!`)
    })
})



monkeyRouter.delete('/', (req, res, next) => {
    Monkey.remove( (err, data) => {
       if (err) {
           res.status(500)
           return next(err)
       }
       return res.status(202).send(`was succesfully deleted!`)
   })
})






monkeyRouter.put('/:id', (req, res, next) => {
    Monkey.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, updatedMonkey) => {
            if (err) {
                
                return next(err)
            }
            return res.status(201).send(updatedMonkey)
        }
    )
})



//update score


monkeyRouter.put('/inc/:id', (req, res, next) => {
    Monkey.findOneAndUpdate(
        {_id: req.params.id},
        {$inc: {score: 1}},
        {new: true},
        (err, updatedMonkey) => {
            if (err) {
                return next(err)
            }
            return res.status(201).send(updatedMonkey)
        }
    )
})


monkeyRouter.put('/dec/:id', (req, res, next) => {
    Monkey.findOneAndUpdate(
        {_id: req.params.id},
        {$inc: {score: -1}},
        {new: true},
        (err, updatedMonkey) => {
            if (err) {
                return next(err)
            }
            return res.status(201).send(updatedMonkey)
        }
    )
})





module.exports = monkeyRouter