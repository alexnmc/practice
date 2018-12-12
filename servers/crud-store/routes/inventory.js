const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/')



inventoryRouter.get('/:id', (req, res) => {
    
    Inventory.findOne({_id: req.params.id}, (err, data) => {
        if (err) {
            
        }
        return res.status(200).send(data)
    })
})








inventoryRouter.get('/', (req, res) => {
    
    Inventory.find((err, data) => {
        if(err) {
            
        }
        return res.status(200).send(data)
    })
})




module.exports = inventoryRouter