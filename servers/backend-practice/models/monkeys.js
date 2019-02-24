const mongoose = require('mongoose')
const Schema = mongoose.Schema

const monkeySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    score: {
        type: Number,
        default:0
    }


})

module.exports = mongoose.model("Monkey", monkeySchema)