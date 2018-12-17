const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
   firstName: {
        type: String,
        
    },
    
    lastName: {
        type: String
    },

    living: {
        type: String
    },

    
    bountyAmount: {
        type: Number
    },

    type: {
        type: String
    }
})


module.exports = mongoose.model("Bounty", bountySchema)