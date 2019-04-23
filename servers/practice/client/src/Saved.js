import React, { Component } from 'react'
import axios from 'axios'



export default class Saved extends Component { // no need to exposrt on the bottom of the page
    constructor(){
        super()
        this.state = {
            articles:[]

        }
    }

   
    componentDidMount(){
        // Get the data once the page has loaded and save it in state
        axios.get(" /articles")
         .then(response => {
            console.log(response)
             
            this.setState({
                articles: response.data
            })
        })
    }
   
    delete = (id) => {
        axios.delete(`/articles/${id}`).then(response => {
             alert(response.data)
        })

        this.setState({
            articles: this.state.articles.filter(item => item._id !== id)
        })
    }
    
   
   
    render(){
        const article = this.state.articles.map(item => {
        return(
           <div key = {Math.random()}>
               <div className = "newsDiv" >
                    <h1> {item.title}</h1>
                    <img alt = '' src={item.urlToImage} />
                    <h2> {item.description}</h2>
                    <button className = 'delete' onClick = {() => this.delete(item._id)}>Delete</button>
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

              