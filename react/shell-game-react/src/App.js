import React, {Component} from 'react'
import Body from './Body'


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

            score: 0
            
            
        }
    }
            
    function1 = () => {
        if(Math.floor(Math.random()*(1 - 3) + 3) === 1){
            this.setState( prevState => {
                return {
                    box1: { backgroundColor: "rgba(245, 245, 245, 0.055)" , text: '.'},
                    box2: { backgroundColor: "rgba(245, 245, 245, 0.055)" },
                    box3: { backgroundColor: "rgba(245, 245, 245, 0.055)" },
                    h1: {text: 'YOU WON!' , color: "rgba(36, 26, 11, 0.877)"},
                    h1wrapper: {backgroundColor: 'rgba(245, 245, 245, 0.055)' },
                    score: prevState.score + 1
                }
            })
        } else {
            this.setState( prevState => {
                return {
                    box1: { backgroundColor: "rgba(245, 245, 245, 0.055)" },
                    box2: { backgroundColor: "rgba(245, 245, 245, 0.055)" },
                    box3: { backgroundColor: "rgba(245, 245, 245, 0.055)", text: '.'},
                    h1: {text: 'LOOOSER!' , color: "rgba(36, 26, 11, 0.877)"},
                    h1wrapper: {backgroundColor: 'rgba(245, 245, 245, 0.055)'},
                    score: prevState.score -1
                }

            })
        }
    }

    function2 = () => {
        if(Math.floor(Math.random()*(1 - 3) + 3) === 1){
            this.setState( prevState => {
               return{
                    box1: { backgroundColor: "rgba(245, 245, 245, 0.055)" },
                    box2: { backgroundColor: "rgba(245, 245, 245, 0.055)", text: '.' },
                    box3: { backgroundColor: "rgba(245, 245, 245, 0.055)" },
                    h1: {text: 'YOU WON!' , color: "rgba(36, 26, 11, 0.877)"},
                    h1wrapper: {backgroundColor: 'rgba(245, 245, 245, 0.055)'},
                    score: prevState.score +1
                }
            })
        } else {
            this.setState( prevState => {
                return{
                    box1: { backgroundColor: "rgba(245, 245, 245, 0.055)", text: '.'},
                    box2: { backgroundColor: "rgba(245, 245, 245, 0.055)" },
                    box3: { backgroundColor: "rgba(245, 245, 245, 0.055)" },
                    h1: {text: 'LOOOSER!' , color: "rgba(36, 26, 11, 0.877)"},
                    h1wrapper: {backgroundColor: 'rgba(245, 245, 245, 0.055)'},
                    score: prevState.score -1
                }

            })
        }
    }

    function3 = () => {
        if(Math.floor(Math.random()*(1 - 3) + 3) === 1){
            this.setState( prevState => {
                return{
                    box1: { backgroundColor: "rgba(245, 245, 245, 0.055)" },
                    box2: { backgroundColor: "rgba(245, 245, 245, 0.055)" },
                    box3: { backgroundColor: "rgba(245, 245, 245, 0.055)", text: '.'},
                    h1: {text: 'YOU WON!' , color: "rgba(36, 26, 11, 0.877)"},
                    h1wrapper: {backgroundColor: 'rgba(245, 245, 245, 0.055)'},
                    score: prevState.score+1
                }
            })
        } else {
            this.setState(prevState => {
                return{
                    box1: { backgroundColor: "rgba(245, 245, 245, 0.055)", text: '.'},
                    box2: { backgroundColor: "rgba(245, 245, 245, 0.055)" },
                    box3: { backgroundColor: "rgba(245, 245, 245, 0.055)" },
                    h1: {text: 'LOOOSER!' , color: "rgba(36, 26, 11, 0.877)"},
                    h1wrapper: {backgroundColor: 'rgba(245, 245, 245, 0.055)'},
                    score: prevState.score -1
                }

            })

        }
    }

    function4 = () => {
            this.setState({
                box1: { animation:"shake 1s , move 2.1s",  animationIterationCount: 'infinite, 2' },
                box2: { animation:"shake 1s , move2 2.1s", animationIterationCount: 'infinite, 2' },
                box3: { animation:"shake 1s , move3 2.1s", animationIterationCount: 'infinite, 2' },
                h1:{text: 'CHOOSE ONE:', color: 'rgb(202, 143, 77)'},
                h1wrapper: {backgroundColor: "rgba(36, 26, 11, 0.897)"}
      
            })

    }

    render(){
        return(
            <div>
                
                <Body 
                    style = {this.state}
                    function1 = {this.function1}
                    function2 = {this.function2}
                    function3 = {this.function3}
                    function4 = {this.function4}

                />
            </div>
        )
    }
}

export default App