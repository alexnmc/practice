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

    getPlayer = () => {// I am not using this method..the addPlayer method does it's job..
        axios.get('/players').then(response => {
            this.setState({
                user: response.data
            })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    
    addPlayer = (newPlayer) => { // this method checks for the player name, if the name is not in the database adds it and the response data is the players info displayed on the body component.
        axios.post(`/players/${newPlayer.name}`, newPlayer).then(response => {
            console.log(response.data)
            this.setState(prevState => ({
                user: response.data

            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    
    incrementScore = (id, score) => { // the score change is done directly in the database, it updates state after each round, 
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
                    decrementScore: this.decrementScore,
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



