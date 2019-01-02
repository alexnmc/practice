import React from 'react'
import exchange from  './Photos/exchange.png'
import shell from  './Photos/shellgame.png'



const Projects = () => {
    return (
        <div>
        <div className = "projects1">
            
            <p className = "work">My Work:</p>
        
        <div className="projects">

            <img className ="exchange" alt = '' src = {exchange}/>
            <img className = "shell" alt = '' src = {shell}/>
            <div className = "group"></div>

        </div>
       
        </div>
        <div className = 'home5'></div>
        
           
        </div>
    )
}

export default Projects