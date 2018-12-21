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
            
            btn: {
                color: 'rgb(75, 224, 75) '
            },
            
            functionOn: false,
            functionOff: false,
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
        console.log(this.state.functionOn)
        if(this.state.functionOn === true) {
                this.buttonLight()
                this.setState({
                    functionOn: false
                }, ()=>{
                    console.log(this.state.functionOn)
                })
            if(Math.floor((Math.random() * 2) + 1)===1) {
               
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
        if(this.state.functionOn === true) {
            this.buttonLight()
            this.setState({
                functionOn: false
            }, ()=>{
                console.log(this.state.functionOn)
            })
            if(Math.floor((Math.random() * 2) + 1)===1) {
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
        console.log(this.state.functionOn)
        if(this.state.functionOn === true) {
            this.buttonLight()
            this.setState({
                functionOn: false
            }, ()=>{
                console.log(this.state.functionOn)
            })
            if(Math.floor((Math.random() * 2) + 1)===1) {
                this.setState( prevState => {
                    return{
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
                    return{
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
        if(this.state.functionOff === false && this.state.functionOn === false){

            this.setState({
                
                btn:  { color: ' rgb(195, 28, 28) '}, //red
                box1: { animation:"shake 1.1s , move  2s", animationIterationCount: 'infinite, 2' },
                box2: { animation:"shake 1.2s , move2 2s", animationIterationCount: 'infinite, 2' },
                box3: { animation:"shake 1.1s , move3 2s", animationIterationCount: 'infinite, 2' },
                h1: { text: `${this.props.user.name ? this.props.user.name.toUpperCase() + ","  :  ' '} CHOOSE ONE:`, color: 'rgb(202, 143, 77)'},
                h1wrapper: { backgroundColor: 'rgba(58, 39, 17, 0.980)'},
                
            })
            setTimeout(this.disableShuffle, 4000)
        }
                
    }
            

    buttonLight = () => {
       
            this.setState({
                btn: { color: 'rgb(75, 224, 75)'}
            })
        
    }

        
    showBall = () => {
        this.setState({
                functionOff: true
        })
        this.setState ({
                 box1: { background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))", text: '.', fontSize: "570px" }
        
        })
           
            setTimeout(this.resetBall, 1400)
            setTimeout(this.reset2, 3100)
           
        }
        
    resetBall = () => {
        this.setState({
                   
        box1: { text: ".", fontSize: "335px" , background: "radial-gradient(circle at 100px 100px, rgba(173, 114, 43, 0.164), rgba(90, 51, 15, 0.400))"}
            
        })
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

    
    reset2 = () => {
        this.setState({
                   
            box1: { background: 'radial-gradient(circle at 100px 100px, rgba(153, 103, 42, 0.397), rgba(83, 47, 9, 0.89))' }
            
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
        return(
            <div> 
                <Navbar/>
                <Switch>
                    <Route exact path="/" render = {props => <Home {...props}
                                                               reset = {this.reset}
                                                               style = {this.state}
                                                              />}/>
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