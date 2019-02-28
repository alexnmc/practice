const express = require('express')
const app = express()
require ('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require("express-jwt");
const path = require("path")
const PORT =  7000
const secret = process.env.SECRET || "some secret passphrase here for local development"



// Middleware
app.use(express.json()) // Makes req.body available in POST and PUT requests.
app.use(morgan('dev'))  
app.use("/api", expressJwt({secret})) //req.user === {username, password, _id}
app.use(express.static(path.join(__dirname, "client", "build")))





// Routes
app.use('/monkey', require('./routes/monkeys')) 
app.use('/auth', require("./routes/auth"))



app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})


// Database Connect                         // name of db on local hard drive = "monkey"
mongoose.connect('mongodb://localhost:27017/monkeyDB', {useNewUrlParser: true}, () => {
    console.log("connected to the db")
})


// Server 
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT} sir!`)
})