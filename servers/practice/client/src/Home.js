import React, { Component } from 'react'
import axios from 'axios'
export const { Provider, Consumer } = React.createContext()


export default class ExProvider extends Component {
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
            console.log(response)
        
            this.setState({
                articles: response.data.articles[0]
            })
        })
    }
   
   
   
   
   
    render(){
       return(
           <div><h1>{this.state.articles.title}</h1></div>
       )
   }
}