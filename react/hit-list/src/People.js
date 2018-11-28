import React from "react"

const People = props => {

    
    const style = {
        background: `url(${props.image}) center  `,
        height: 300,
        width: 200,
        display: "flex",
        alignItems:"flex-end",
        
        }
        
    return(
        
        
        <div style = {style} className = "class">
    
        <a>{props.name}</a>                                   
        
        </div>
    )
}

export default People