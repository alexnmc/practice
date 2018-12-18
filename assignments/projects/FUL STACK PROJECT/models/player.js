const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: {
        type: String
    },
    score: {
        type: Number,
        default: 0
    }
     
})

module.exports = mongoose.model("players", playerSchema)