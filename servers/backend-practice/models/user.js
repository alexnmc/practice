const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    score: {
        type: Number
    }


})

module.exports = mongoose.model("User", userSchema)