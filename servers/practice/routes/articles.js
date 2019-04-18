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



articlesRouter.post('/', (req, res) => {   
    
    const newArticle = new Article(req.body)
    
    newArticle.save((err, article) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(article)
    })
})


articlesRouter.delete('/:id', (req, res, next) => {  //delete one by ID 
     
    Article.findOneAndDelete({_id: req.params.id} , (err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send('article deleted')
    })
})



module.exports = articlesRouter