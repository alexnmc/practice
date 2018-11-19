import React , {Component} from 'react'




class App extends Component{
    constructor(){
        super()

        this.state = {
            counter: 0
        }
    }

    minOne = () => {
        this.setState(prevState => {
            return {
                counter : prevState.counter - 1
            }
        })
    }
    
    addOne = () => {
        this.setState(prevState => {
            return {
                counter : prevState.counter + 1
            }
        })
    }

    mult2 = () => {
        this.setState(prevState => {
            return {
                counter : prevState.counter * 2
            }
        })
    }

    div2 = () => {
        this.setState(prevState => {
            return {
                counter : prevState.counter / 2
            }
        })
    }

    changeNum = () => {
        this.setState({
            counter: 10
        })
    }

  render(){

    return (
        <div>
        <h1>{this.state.counter}</h1>
        <button onClick = {this.minOne}>-</button>
        <button onClick = {this.addOne}>+</button>
        <button onClick = {this.mult2}>*</button>
        <button onClick = {this.div2}>/</button>
        <button onClick = {this.changeNum}>10</button>
        </div>
    )
  }
}

export default App
