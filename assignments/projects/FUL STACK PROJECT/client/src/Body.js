import React from 'react'
import { withPlayer } from './Context/PlayerProvider'
import { withGame } from './Context/GameProvider'


const Body = (props) =>{
   

    return (
        <div className = 'wrap'>  
            
            <div className = "scoreDiv">
                <h2 className = 'name'> Name: {props.user.name}</h2> 
                <h2 className = 'score'>Score: {props.user.score}</h2>
            </div>
            
            <p className = "whichCup">WHICH CUP HAS THE BALL?</p>
            
            <div className = "h1wrapper" style = {props.style.h1wrapper}> 
                <h1 className = 'h1' style = {props.style.h1}>{props.style.h1.text}</h1>
            </div>
        
            <div className ='container'>
                <div className = 'box1' onClick = {props.function1} style = {props.style.box1}> {props.style.box1.text} </div>
                <div className = 'box2' onClick = {props.function2} style = {props.style.box2}> {props.style.box2.text} </div>
                <div className = 'box3' onClick = {props.function3} style = {props.style.box3}> {props.style.box3.text} </div>
            </div>
                <button className = 'btn' onClick = {props.function4} style = {props.style.btn} >SHUFFLE</button>
        
        </div>

    )
}

export default withGame(withPlayer(Body))
