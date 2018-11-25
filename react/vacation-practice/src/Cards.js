import React from 'react'


const Cards = (props) => {
    let id = 'class'
    

    let usd = '$'

    function myFunction(){
         id = "blue"
         return id
    }
    
return(
    <div className = {id}>
    <h1 onClick = {myFunction}>{props.place}</h1>
    <p>{props.price}{usd}</p>
    <p>{props.timeToGo}</p>
    </div>
    )
}



export default Cards