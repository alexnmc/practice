const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


// Middleware
app.use(express.json()) // Makes req.body available in POST and PUT requests.

app.use(morgan('dev'))  

app.use('/monkey', require('./routes/user')) //use database(database name) through the routes./routes/user

app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})


// Database Connect                         // name of db on local hard drive = "database"
mongoose.connect('mongodb://localhost:27017/monkey', {useNewUrlParser: true}, () => {
    console.log("connected to the db")
})


// Server 
app.listen(7000, () => {
    console.log(`[+] Server is running on port 7000`)
})