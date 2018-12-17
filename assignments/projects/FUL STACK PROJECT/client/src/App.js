import React, {Component} from 'react'
import Body from './Body'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from  './About'
import Navbar from './Navbar'



class App extends Component {
    constructor(){
        super()
        this.state = {
            box1: {
                backgroundColor: '',
                text: '',
                animation: '', 
                animationIterationCount: ''
     
            },
            box2: {
                backgroundColor: '',
                text:'',
                animation: '', 
                animationIterationCount: ''

            },
            box3: {
                backgroundColor: '',
                text: '',
                animation: '', 
                animationIterationCount: ''
            },

            h1: {
                text: '',
                backgroundColor: ''
            },

            h1wrapper: {
                color: ''
            },
            
            name: '',
            
            score: 0,

            functionOn: false

        }

    }
    
    
    ballInCup1 = () => {
        this.setState({
            box1: {text: '.', backgroundColor: "rgba(148, 105, 56, 0.200)"}
        })
    }
    
    ballInCup2 = () => {
        this.setState({
            box2: {text: '.', backgroundColor: "rgba(148, 105, 56, 0.200)"}
        })
    }

    ballInCup3 = () => {
        this.setState({
            box3: {text: '.', backgroundColor: "rgba(148, 105, 56, 0.200)"}
        })
    }

    function1 = () => {
        if(this.state.functionOn === true){
                this.setState({
                    functionOn: false
                })
            if(Math.floor((Math.random() * 3) + 1)===1){
               
                this.setState( prevState => {
                    return {
                        box1: { backgroundColor: "rgba(148, 105, 56, 0.200)"},
                        box2: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        box3: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        h1: {text: 'YOU WON!' , color: "rgba(36, 26, 11, 0.800)"},
                        h1wrapper: {backgroundColor: "rgba(148, 105, 56, 0.200)"  },
                        score: prevState.score + 1,
                    }
                })
                        setTimeout(this.ballInCup1, 750)
            } else {
                this.setState( prevState => {
                    return {
                        box1: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        box2: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        box3: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        h1: {text: 'LOOOSER!' , color: "rgba(36, 26, 11, 0.800)"},
                        h1wrapper: {backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        score: prevState.score -1,
                        
                    }
                })
                        setTimeout(this.ballInCup3, 750)
            }    
        }
    }

    function2 = () => {
        if(this.state.functionOn === true){
            this.setState({
                functionOn: false
            })
            if(Math.floor((Math.random() * 3) + 1)===1){
                this.setState( prevState => {
                    return{
                        box1: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        box2: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        box3: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        h1: { text: 'YOU WON!' , color: "rgba(36, 26, 11, 0.800)"},
                        h1wrapper: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        score: prevState.score +1,
                        
                    }
                })
                        setTimeout(this.ballInCup2, 750)
            } else {
                this.setState( prevState => {
                    return{
                        box1: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        box2: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        box3: { backgroundColor: "rgba(148, 105, 56, 0.200)"},
                        h1: { text: 'LOOOSER!' , color: "rgba(36, 26, 11, 0.800)"},
                        h1wrapper: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        score: prevState.score -1,
                    
                    }
                })
                        setTimeout(this.ballInCup1, 750)
            }
        }
    }

    function3 = () => {
        if(this.state.functionOn === true){
            this.setState({
                functionOn: false
            })
            if(Math.floor((Math.random() * 3) + 1)===1){
                this.setState( prevState => {
                    return{
                        box1: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        box2: { backgroundColor: "rgba(148, 105, 56, 0.200)"},
                        box3: { backgroundColor: "rgba(148, 105, 56, 0.200)"},
                        h1: {text: 'YOU WON!' , color: "rgba(36, 26, 11, 0.800)"},
                        h1wrapper: {backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        score: prevState.score+1,
                        
                    }
                })
                        setTimeout(this.ballInCup3, 750)
            } else {
                this.setState(prevState => {
                    return{
                        box1: { backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        box2: { backgroundColor:  "rgba(148, 105, 56, 0.200)"},
                        box3: { backgroundColor: "rgba(148, 105, 56, 0.200)"},
                        h1: {text: 'LOOOSER!' , color: "rgba(36, 26, 11, 0.877)"},
                        h1wrapper: {backgroundColor: "rgba(148, 105, 56, 0.200)" },
                        score: prevState.score -1,
                        
                    }
                })
                        setTimeout(this.ballInCup1, 750)
            }
        }   
    }

    
    disableShuffle = () => {    // triggers 6.4 seconds after function4 is called
        this.setState({
           functionOn: true
       })
    } 
    
    
    
    
    function4 = () => {
        
        this.setState({
                
                box1: { animation:"shake 1s , move  2.1s",  animationIterationCount: 'infinite, 2' },
                box2: { animation:"shake 1.1s , move2 2.1s", animationIterationCount: 'infinite, 2' },
                box3: { animation:"shake 1s , move3 2.1s", animationIterationCount: 'infinite, 2' },
                h1:{text: 'CHOOSE ONE:', color: 'rgb(202, 143, 77)'},
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

export default App