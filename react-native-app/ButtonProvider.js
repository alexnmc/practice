import React, { Component } from 'react'
import axios from 'axios'


const ButtonContext = React.createContext()


class ButtonProvider extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            channelName: 'Austria',
            toggle: false,
        }
    }

    getNews = () => {
        axios.get( `https://newsapi.org/v2/top-headlines?country=au&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
        .then(response => {
           this.setState({
               articles: response.data.articles,
               
           })
       })
    }

    getNewsCountry = (url, name) => {  
        axios.get( `https://newsapi.org/v2/top-headlines?country=${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
                channelName: name
                
            })
        })
            this.setState(prevState=>{  
                return { 
                    toggle: !prevState.toggle,
                    
                    
                }
            })
        
    }

    getNewsSource= (url, name) => { 
        axios.get( `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
                channelName: name
                
            })
        })
            this.setState(prevState=>{
                return{ 
                    toggle: !prevState.toggle,
                    
                }
            })
        
    }

    editToggle = () => {
        this.setState(prevState=>{
            return{ 
                toggle: !prevState.toggle,
            }
        })
    }
    
    
    render() {
      
        return (
            <ButtonContext.Provider
                value={{
                    ...this.state,
                    getNews: this.getNews,
                    getNewsCountry: this.getNewsCountry,
                    editToggle: this.editToggle
                    
                }}>
                {this.props.children}
            </ButtonContext.Provider>
        )
    }
}

export default ButtonProvider


export const withButton = C => props => (
    <ButtonContext.Consumer>
        {value => <C {...props} {...value}/> }
    </ButtonContext.Consumer>
)