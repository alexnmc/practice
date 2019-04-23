const express = require('express')
const app = express()
require ('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000


app.use(express.json()) 
app.use(morgan('dev'))  

//Routes
app.use('/articles', require('./routes/articles'))


mongoose.connect('mongodb://localhost:27017/version5', {useNewUrlParser: true}, () => {
    console.log('connect to the db captain!')    // name of database is version2
})



app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
         res.status(err.status); //secret error 
    }
    return res.send({errMsg: err.message})
})



app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT} sir!`)
})