const express = require('express')
const messageRouter = express.Router()
const Message = require("../models/message")



messageRouter.get('/', (req, res) => {    // get all for testing with postman 
   
    Message.find((err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
    
})



messageRouter.delete('/', (req, res, next) => {
    
    Message.remove((err, data) => {      // for postman testing, deletes everything !
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send('all messages were succesfully deleted!')
    })
})


messageRouter.post('/',  (req, res, next) => {   
            
    Message.findOne({name: req.params.name, phone:req.body.phone, medication:req.body.medication}, (err, message) => {
        if (err) {
            res.status(500)
            return next(err)
        } if(message){ 
            return res.status(200).send("Mesajul a fos trimis!")
        } else {   
            const newMessage = new Message(req.body)
            newMessage.save((err, message) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send("Mesaj trimis!")
            })

        }   
    }


)})
 




module.exports = messageRouter


