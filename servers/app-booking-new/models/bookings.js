const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingsSchema = new Schema({
    
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        
    },
    phone: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    
    userID: {
         type: String,
         required: true
    },

    username: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("bookings", bookingsSchema)