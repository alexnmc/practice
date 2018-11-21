import React from 'react'

const DiceBox = (props) => {
    
    let {number1, number2, number3, number4, number5} = props.numbers
    
    
    return (
        
        <div>
            <h1>{number1}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <h1>{number4}</h1>
            <h1>{number5}</h1>
            <button onClick = {props.rand}>click</button>
        </div>
    )
}

export default DiceBox

