const mongoose = require('mongoose')


const inventorySchema = new mongoose.Schema({
    fruits: {
        type: String,
        required: true
    },
      vegetables: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Invetory", inventorySchema)