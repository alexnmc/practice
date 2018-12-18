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
        axios.post('/players', newPlayer).then(response => {
            console.log(response.data.name)
            this.setState(prevState => ({
                  user: response.data

            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    
    updateScore = (id, score) => {
        axios.put(`/players/${id}`, score).then(response => {
            
            const updatedScore = response.data
            this.setState(prevState => {
                return {
                    players: prevState.players.map(item => item._id === id ? updatedScore : item )
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
                    
                }}>
                { this.props.children }
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



