import React from 'react'


const Box = (props) =>{
    return(
        <div className = {props.cssClass} >
            <h1>{props.title}</h1>
        </div>
    )
}

 export default Box