import React from 'react'

const Todos = props =>{
    return(
        <div>
        <h1>{props.title}</h1>
        <button onClick = {()=>{props.handleDelete(props.id)}}>Delete</button>
        </div>
    )
}



export default Todos