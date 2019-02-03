import React, { Component } from 'react'
import axios from 'axios'
import MenuBar from './menuBar.js'



export default class App extends Component { // no need to exposrt on the bottom of the page
    constructor(props){
        super(props)
        this.state = {
            articles:[]

        }
    }

   
    componentDidMount(){
        
        axios.get("https://newsapi.org/v2/everything?q=apple&from=2019-02-02&to=2019-02-02&sortBy=popularity&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa")
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
               <img src={ item.urlToImage} alt = '' />
               <h2> {item.description}</h2>
               
           </div>
        )
    })
       
        return(
        
            <div>
                <MenuBar/>
                {article}
            </div>
        )
    }
}


              