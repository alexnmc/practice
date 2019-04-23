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




articlesRouter.post('/:title', (req, res, next) => {
    Article.findOne({title: req.params.title}, (err, article) => { // checks the database for an article with the same title like the one requested, this is awesome...
        if (err) {
            res.status(500)
            return next(err)
        }
            
        if(article){ 
            return res.status(200).send("article is already saved, no duplicates please!")

        } else {
            
            const newArticle = new Article(req.body)
            newArticle.save((err, player) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send("article saved")
            })
        }
    })
})




articlesRouter.delete('/', (req, res, next) => {  //delete one by ID 
     
    Article.remove((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send('articles deleted')
    })
})


articlesRouter.delete('/:id', (req, res, next) => {  //delete one by ID 
     
    Article.deleteOne({_id: req.params.id}, (err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send('article deleted')
    })
})



module.exports = articlesRouter