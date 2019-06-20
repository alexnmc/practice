const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

const notesSchema = new Schema({  
    notes: {
        type: String,
    },

    userId:{
        type: String
    }
   

})
    


    


module.exports = mongoose.model("Notes", notesSchema); //admin model using the admin schema