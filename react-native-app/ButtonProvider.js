import React, { Component } from 'react'
import axios from 'axios'



const ButtonContext = React.createContext()


class ButtonProvider extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            channelName: 'choose source ' ,
            toggle: false,
            toggle2: false,
            loading: 'off'
           
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
        this.setState({loading: 'on'})
        axios.get( `https://newsapi.org/v2/top-headlines?country=${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
                channelName: name,
                loading: 'off'
                
            })
        })
            this.setState(prevState=>{  
                return { 
                    toggle: false,
                    toggle2: false
                }
            })
        
    }

    getNewsSource= (url, name) => { 
        this.setState({loading: 'on'})
        axios.get( `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
                channelName: name,
                loading: 'off'
                
            })
        })
            this.setState(prevState=>{
                return{ 
                    toggle: false,
                    toggle2: false
                    
                }
            })
        
    }

    editToggle = () => {
        this.setState(prevState=>{
            return{ 
                toggle: !prevState.toggle,
                toggle2: false
            }
        })
    }

    editToggle2 = () => {
        this.setState( prevState => {   
            return { 
                toggle2: !prevState.toggle2, 
                toggle: false,
                
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
                    getNewsSource: this.getNewsSource,
                    editToggle: this.editToggle,
                    editToggle2: this.editToggle2
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