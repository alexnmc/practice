const express = require('express')
const notesRouter = express.Router()
const Notes = require("../models/notes")





notesRouter.post('/', (req, res, next) => {      // regular post request without checking anything in the database
    
    const newNotes = new Notes(req.body)
    newNotes.save((err, notes) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send('saved')
    })
}
)


notesRouter.get('/:id', (req, res, next) => {    
    
    Notes.find({userID: req.params.id}, (err, notes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(notes)
    })
   
})



notesRouter.get('/', (req, res, next) => {    
    
    Notes.find((err, notes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(notes)
    })
   
})


notesRouter.delete('/', (req, res, next) => {
    
    Notes.remove((err, data) => {      // for postman testing, deletes everything !
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send('all notes were deleted!')
    })
})


notesRouter.delete('/:id', (req, res, next) => {     //delete one by ID for admin use only
     
    Notes.findOneAndDelete({_id: req.params.id} , (err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send('note deleted')
    })
})


module.exports = notesRouter
