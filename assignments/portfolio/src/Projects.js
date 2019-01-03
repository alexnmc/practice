import React from 'react'
import exchange from  './Photos/exchange.png'
import shell from  './Photos/shellgame.png'



const Projects = () => {
    return (
        <div className="block">
        <div className = "projects1">
            
            <p className = "work">My Work:</p>
        
        <div className="projects">
            
            <div className = 'excDiv'>
                <a>
                <img className ="exchange" alt = '' src = {exchange}/>
                </a>
                <p className = 'exchangeText'>React website displaying and converting all the foreign currencies including Bitcoin. The aplication gets the data from the Fixer API using Euro as base currency.</p>
            </div>

            <div className = ' shellDiv'>
                <a>
                <img className = "shell" alt = '' src = {shell}/>
                </a>
                <p className = 'shellText'>Shell Game, a fullstack aplication  created in React with CSS animations and lots of JavaScript. Custom API routes built with Mongoose and Express to save player info in MongoDB.
                  </p>
            </div>
            
            
            {/* <div className = "group"></div> */}

        </div>
       
        </div>
        <div className = 'home5'></div>
        
           
        </div>
    )
}

export default Projects