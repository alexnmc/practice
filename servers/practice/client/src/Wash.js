import React, { Component } from 'react'
import axios from 'axios'


export default class Wash extends Component {
    constructor(){
        super()
        this.state = {
            articles:[]

        }
    }

   
    componentDidMount(){
        // Get the data once the page has loaded and save it in state
        axios.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-03&sortBy=publishedAt&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa")
         .then(response => {
            console.log(response.data.articles)
             
            this.setState({
                articles: response.data.articles
            })
        })
    }
   
   
   
   
   
    render(){
        const article = this.state.articles.map(item => {
        return(
           <div className = "newsDiv">
               
               <h1> {item.title}</h1>
               <h2> {item.description}</h2>
               <img src={ item.urlToImage} />
           </div>
        )
    })
       
        return(
        
            <div>
                {article}
            </div>
        )
    }
}

