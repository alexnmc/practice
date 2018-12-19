import React, {Component} from 'react'
import Body from './Body'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from  './About'
import Navbar from './Navbar'
import { withPlayer } from './PlayerProvider'




class App extends Component {
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
            
            functionOn: false
        }
    }
    
    ballInCup1 = () => {
        this.setState({
            box1: {text: '.', background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))"}
        })
    }
    
    ballInCup2 = () => {
        this.setState({
            box2: {text: '.', background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))"}
        })
    }

    ballInCup3 = () => {
        this.setState({
            box3: {text: '.', background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))"}
        })
    }

    function1 = () => {
        if(this.state.functionOn === true) {
                this.setState({
                    functionOn: false
                })
            if(Math.floor((Math.random() * 3) + 1)===1) {
               
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
        if(this.state.functionOn === true) {
            this.setState({
                functionOn: false
            })
            if(Math.floor((Math.random() * 3) + 1)===1) {
                this.setState( prevState => {
                    return{
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
                    return{
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
        if(this.state.functionOn === true) {
            this.setState({
                functionOn: false
            })
            if(Math.floor((Math.random() * 3) + 1)===1) {
                this.setState( prevState => {
                    return{
                        box1: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        box2: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))" },
                        box3: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        h1: { text: 'WINNER!' , color: "rgba(36, 26, 11, 0.800)"},
                        h1wrapper: {background: "rgba(148, 105, 56, 0.200)" },
                        
                    }
                })
                        setTimeout(this.ballInCup3, 750)
                        this.props.incrementScore(this.props.user._id, this.props.user.score)
            } else {
                this.setState(prevState => {
                    return{
                        box1: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        box2: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))" },
                        box3: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.438))"},
                        h1: { text: 'YOU LOST!' , color: "rgba(36, 26, 11, 0.877)"},
                        h1wrapper: {background: "rgba(148, 105, 56, 0.200)" },
                        
                    }
                })
                        setTimeout(this.ballInCup1, 750)
                        this.props.decrementScore(this.props.user._id, this.props.user.score)
            }
        }   
    }

    
    disableShuffle = () => {    // triggers 6.4 seconds after function4 is called
        this.setState({
           functionOn: true
       })
    } 
    
    
    function4 = () => {     // shuffle button
        
        this.setState({
                
                box1: { animation:"shake 1s , move  2s",  animationIterationCount: 'infinite, 2' },
                box2: { animation:"shake 1.1s , move2 2s", animationIterationCount: 'infinite, 2' },
                box3: { animation:"shake 1s , move3 2s", animationIterationCount: 'infinite, 2' },
                h1: { text: `${this.props.user.name ? this.props.user.name.toUpperCase() + ","  :  ' '} CHOOSE ONE:`, color: 'rgb(202, 143, 77)'},
                h1wrapper: { backgroundColor: 'rgba(58, 39, 17, 0.980)'},
                
            })
           
                setTimeout(this.disableShuffle, 3500)
        }

    

    render(){
        return(
            <div> 
                <Navbar/>
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/about" component = {About}/>
                    <Route path="/body"  render = {props => <Body {...props}
                                                                    style = {this.state}
                                                                    function1 = {this.function1}
                                                                    function2 = {this.function2}
                                                                    function3 = {this.function3}
                                                                    function4 = {this.function4}
                                                                />}/>
                </Switch>

            </div>
        )
    }
}

export default withPlayer(App)