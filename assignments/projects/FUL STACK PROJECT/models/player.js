const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: {
        type: String
        
    },
     score: {
        type: Number
     }
})

module.exports = mongoose.model("Player", playerSchema)