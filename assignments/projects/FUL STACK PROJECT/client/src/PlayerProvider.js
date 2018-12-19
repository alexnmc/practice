import React, { Component } from 'react'
import axios from 'axios'

const PlayerContext = React.createContext()

class PlayerProvider extends Component {
    constructor(){
        super()
        this.state = {
            
            user: {},
            
            
        }
    }

    getPlayer = () => {
        axios.get('/players').then(response => {
            this.setState({
                user: response.data
            })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    
    addPlayer = (newPlayer) => {
        axios.post(`/players/${newPlayer.name}`, newPlayer).then(response => {
            console.log(response.data)
            this.setState(prevState => ({
                  user: response.data

            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    
    incrementScore = (id, score) => {
        axios.put(`/players/inc/${id}`, score).then(response => {
            console.log(response.data)
           this.setState(prevState => {
                return {
                    user: response.data
                }
            })
        })
    }
    
    
    
    decrementScore = (id, score) => {
        axios.put(`/players/dec/${id}`, score).then(response => {
            console.log(response.data)
            this.setState(prevState => {
                return {
                    user: response.data
                }
            })
        })
    }


    render(){
        return (
            <PlayerContext.Provider 
                value={{
                    user: this.state.user,
                    getPlayer: this.getPlayer,
                    addPlayer: this.addPlayer,
                    incrementScore: this.incrementScore,
                    decrementScore: this.decrementScore
                }}>
                    {this.props.children}
            </PlayerContext.Provider>
        )
    }
}

export default PlayerProvider


export const withPlayer = C => props => (
    <PlayerContext.Consumer>
        {value => <C {...props} {...value}/>}
    </PlayerContext.Consumer>
)



