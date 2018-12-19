const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 8000


app.use(express.json()) 
app.use(morgan('dev'))  



app.use('/players', require('./routes/player'))



mongoose.connect('mongodb://localhost:27017/cups-game', {useNewUrlParser: true}, () => {
    console.log('connect to the db captain!')
})



app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})



app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT} sir!`)
})