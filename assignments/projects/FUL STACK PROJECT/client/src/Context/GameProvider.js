import React, {Component} from 'react'
import { withPlayer } from './PlayerProvider'

const GameContext = React.createContext()


class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            box1: {
                background: '',
                text: '',
                animation: '', 
                animationIterationCount: ''
            },

            box2: {
                background: '',
                text:'',
                animation: '', 
                animationIterationCount: ''
            },

            box3: {
                background: '',
                text: '',
                animation: '', 
                animationIterationCount: ''
            },

            h1: {
                text: '',
                background: ''
            },

            h1wrapper: {
                color: ''
            },
            
            btn: {
                color: 'rgb(75, 224, 75) '
            },
            
            functionOn: false,
            functionOff: false,
        }

    }
    
   //functions start here:
    function1 = () => {
        console.log(this.state.functionOn)
        if( this.state.functionOn === true) {
                this.buttonLight()
                this.setState({
                    functionOn: false
                }, ()=>{
                    console.log(this.state.functionOn)
                })
            if( Math.floor((Math.random() * 2) + 1)===1) {
               
                this.setState( prevState => {
                    return {
                        box1: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        box2: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))" },
                        box3: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        h1: { text: 'WINNER!' , color: "rgba(36, 26, 11, 0.800)"},
                        h1wrapper: { backgroundColor: "rgba(148, 105, 56, 0.200)"  },
                    }
                })
                        setTimeout(this.ballInCup1, 750)
                        this.props.incrementScore(this.props.user._id, this.props.user.score)
            } else {
                this.setState( prevState => {
                    return {
                        box1: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        box2: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))" },
                        box3: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                       
                        h1: { text: 'YOU LOST!' , color: "rgba(36, 26, 11, 0.800)"},
                        h1wrapper: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                    }
                })
                        setTimeout(this.ballInCup3, 750)
                        this.props.decrementScore(this.props.user._id, this.props.user.score)
            }    
        }
    }
    
    function2 = () => {
        console.log(this.state.functionOn)
        if( this.state.functionOn === true) {
            this.buttonLight()
            this.setState({
                functionOn: false
            }, ()=>{
                console.log(this.state.functionOn)
            })
            if( Math.floor((Math.random() * 2) + 1)===1) {
                this.setState( prevState => {
                    return {
                        box1: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        box2: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))" },
                        box3: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        h1: { text: 'WINNER!' , color: "rgba(36, 26, 11, 0.800)"},
                        h1wrapper: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                    }
                })
                        setTimeout(this.ballInCup2, 750)
                        this.props.incrementScore(this.props.user._id, this.props.user.score)
            } else {
                this.setState( prevState => {
                    return {
                        box1: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        box2: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))" },
                        box3: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        h1: { text: 'YOU LOST!' , color: "rgba(36, 26, 11, 0.800)"},
                        h1wrapper: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                    }
                })
                        setTimeout(this.ballInCup1, 750)
                        this.props.decrementScore(this.props.user._id, this.props.user.score)
            }
        }
    }

    
    function3 = () => {
        console.log(this.state.functionOn)
        if( this.state.functionOn === true) {
            this.buttonLight()
            this.setState({
                functionOn: false
            }, ()=>{
                console.log(this.state.functionOn)
            })
            if( Math.floor((Math.random() * 2) + 1)===1) {
                this.setState( prevState => {
                    return {
                        box1: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        box2: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))" },
                        box3: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        h1: { text: 'WINNER!' , color: "rgba(36, 26, 11, 0.800)"},
                        h1wrapper: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                    }
                })
                        setTimeout(this.ballInCup3, 750)
                        this.props.incrementScore(this.props.user._id, this.props.user.score)
            } else {
                this.setState(prevState => {
                    return {
                        box1: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        box2: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))" },
                        box3: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        h1: { text: 'YOU LOST!' , color: "rgba(36, 26, 11, 0.877)"},
                        h1wrapper: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                    }
                })
                        setTimeout(this.ballInCup1, 750)
                        this.props.decrementScore(this.props.user._id, this.props.user.score)
            }
        } 
    }

    
    function4 = () => {     // shuffle button
        console.log(this.state.functionOn)
        if( this.state.functionOff === false && this.state.functionOn === false) {
            this.setState({
                
                btn:  { color: ' rgb(195, 28, 2) '}, //red
                box1: { animation:"shake 1.6s , move  1.7s", animationIterationCount: 'infinite, 2' },
                box2: { animation:"shake 1.5s , move2 1.7s", animationIterationCount: 'infinite, 2' },
                box3: { animation:"shake 1.7s , move3 1.7s", animationIterationCount: 'infinite, 2' },
                h1: { text: `${this.props.user.name ? this.props.user.name.toUpperCase() + ","  :  ' '} CHOOSE ONE:`, color: 'rgb(202, 143, 77)'},
                h1wrapper: { backgroundColor: 'rgba(58, 39, 17, 0.980)'},
                
            })
            setTimeout(this.disableShuffle, 3500)
        }
    }
            
    reset = () => {  // enter button on login page 
           
        this.setState({
            btn: { color: 'rgb(195, 28, 28)' },//red
            box1: { background: 'radial-gradient(circle at 100px 100px, rgba(153, 103, 42, 0.397), rgba(83, 47, 9, 0.89))' },
            box2: { background: 'radial-gradient(circle at 100px 100px, rgba(153, 103, 42, 0.397), rgba(83, 47, 9, 0.89))' },
            box3: { background: 'radial-gradient(circle at 100px 100px, rgba(153, 103, 42, 0.397), rgba(83, 47, 9, 0.89))' },
            h1wrapper: { backgroundColor: 'rgba(78, 53, 22, 0.856)'},
            h1: { text: ''},
            functionOn: false
        })
            setTimeout(this.showBall, 700)
            setTimeout(this.buttonLight, 3600)
    }

    
    ballInCup1 = () => {
        this.setState({
            box1: { text: '.', background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))"}
        })
    }
    
    ballInCup2 = () => {
        this.setState({
            box2: { text: '.', background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))"}
        })
    }

    ballInCup3 = () => {
        this.setState({
            box3: { text: '.', background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))"}
        })
    }
    
    buttonLight = () => {
            this.setState({
                btn: { color: 'rgb(75, 224, 75)'}
            })
    }

    //functions showing the ball after sign in:
    showBall = () => {
        this.setState({
            functionOff: true
        })
        if( Math.floor((Math.random() * 3) + 1) === 1) {
            this.setState ({
                box1: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))", text: '.', fontSize: "570px" }
            })
            setTimeout(this.resetBall1, 1400)
            setTimeout(this.reset1, 3100)
        } else if ( Math.floor((Math.random() * 3) + 1) === 2) {
            this.setState ({
                box2: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))", text: '.', fontSize: "570px" }
            })
            setTimeout(this.resetBall2, 1400)
            setTimeout(this.reset2, 3100)
        } else {
            this.setState ({
                box3: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))", text: '.', fontSize: "570px" }
            })
            setTimeout(this.resetBall3, 1400)
            setTimeout(this.reset3, 3100)
        }
            
    }
        
    
    resetBall1 = () => {
        this.setState({
            box1: { text: ".", fontSize: "340px" , background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))"}
        })
    }

    resetBall2 = () => {
        this.setState({
            box2: { text: ".", fontSize: "340px" , background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))"}
        })
    }

    resetBall3 = () => {
        this.setState({
            box3: { text: ".", fontSize: "340px" , background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))"}
        })
    }
        
    
    reset1 = () => {
        this.setState({
            box1: { background: 'radial-gradient(circle at 100px 100px, rgba(153, 103, 42, 0.397), rgba(83, 47, 9, 0.89))' }
        })
        this.enableShuffle()
    }

    reset2 = () => {
        this.setState({
            box2: { background: 'radial-gradient(circle at 100px 100px, rgba(153, 103, 42, 0.397), rgba(83, 47, 9, 0.89))' }
        })
        this.enableShuffle()
    }

    reset3 = () => {
        this.setState({
            box3: { background: 'radial-gradient(circle at 100px 100px, rgba(153, 103, 42, 0.397), rgba(83, 47, 9, 0.89))' }
        })
        this.enableShuffle()
    }
    

    disableShuffle = () => {    // triggers 6.4 seconds after function4 is called
        this.setState({
            functionOn: true
        })
    } 
    
    
    enableShuffle = () => {
        this.setState({
            functionOff: false
        })
    }

    
    render(){
        return (
            <GameContext.Provider 
                value={{
                    style: this.state,
                    function1: this.function1,
                    function2: this.function2,
                    function3: this.function3,
                    function4: this.function4,
                    reset: this.reset
                }}>
                    {this.props.children}
            </GameContext.Provider>
        )
    }
    
}

export default withPlayer(Game)

export const withGame = C => props => (
    <GameContext.Consumer>
        {value => <C {...props} {...value}/>}
    </GameContext.Consumer>
)
