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
        return res.status(201).send(notes)
    })
}
)

module.exports = notesRouter
