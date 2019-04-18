const express = require('express')
const articlesRouter = express.Router()
const Article = require("../models/articles")



articlesRouter.get('/', (req, res) => {    // get all for testing with postman 
    
    Article.find((err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)

    })
})



articlesRouter.post('/', (req, res) => {   //for testing with postman
    
    const newArticle = new Article(req.body)
    
    newArticle.save((err, article) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(article)
    })
})



module.exports = articlesRouter