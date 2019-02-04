import React, { Component } from 'react'
import axios from 'axios'
import MenuItem from './menuBar.js'



export default class App extends Component { // no need to exposrt on the bottom of the page
    constructor(props){
        super(props)

        console.log("Props are:" + props)
        this.state = {
            articles:[],
            url: this.props.url

        }
    }

   
    componentDidMount(){
        
        axios.get(this.state.url)
         .then(response => {
            
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
                 <MenuItem/>
                 {article}
            </div>
        )
    }
}


              