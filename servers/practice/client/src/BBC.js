import React, { Component } from 'react'
import axios from 'axios'



export default class BBC extends Component { // no need to exposrt on the bottom of the page
    constructor(){
        super()
        this.state = {
            articles:[]

        }
    }

   
    componentDidMount(){
        // Get the data once the page has loaded and save it in state
        axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa")
         .then(response => {
            console.log(response.data.articles)
             
            this.setState({
                articles: response.data.articles
            })
        })
    }
   
   
    save = (title, urlToImage, description) => {
       
        const article1 = {
            "title": title,
            "urlToImage": urlToImage,
            "description": description
        }
        
        axios.post(`/articles/${title}`, article1).then(response => {
            
           alert(response.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
   
   
   
    render(){
        const article = this.state.articles.map(item => {
        return(
           <div key = { Math.random()}>
               
            <div className = "newsDiv" >
               
               <h1> {item.title}</h1>
               <img alt = '' src={item.urlToImage} />
               <h2> {item.description}</h2>
               <button onClick = {() => this.save(item.title, item.urlToImage, item.description)}>Save</button>
              
           </div>
           </div>
       
        )
    })
       
        return(
            <div>
            <div className = "topSpace">
            </div>
            {article}
            </div>
            
        )
    }
}

              