import React from 'react'

const Cards = (props) => {
    let dollar = " "
    if(props.price < 500 ){
        dollar = "$"
    }else if(props.price > 500 && props.price < 1000){
        dollar = '$$'
    }else{
        dollar = '$$$'
    }
    
    let currentClass = "" 
    if(props.timeToGo === "Summer"){
        currentClass = "hello"
    }else if(props.timeToGo === "Winter"){
        currentClass = "winter"
    }else if(props.timeToGo === "Spring"){
        currentClass = "spring"
    }else{
        currentClass = "fall"
    }
   
 return(
        <div className = {currentClass}>
            <h1>Place: {props.place}</h1>
            <h2>Price: {props.price}{dollar}</h2>
            <h3>Time: {props.timeToGo}</h3>
        </div>
        
    )
}







export default Cards