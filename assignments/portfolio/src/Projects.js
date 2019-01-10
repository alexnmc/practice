import React from 'react'
import exchange from  './Photos/exchange.png'
import shell from  './Photos/shellgame.png'
import group from './Photos/group.png'



const Projects = () => {
    return (
        <div className="block" id = '3'>
        <div className = "projects1">
            
            <p className = "work">Projects:</p>
        
        <div className="projects">
            
            <div className = 'excDiv'>
                <a href = "https://excrates.surge.sh">
                <img className ="exchange" alt = '' src = {exchange}/>
                </a>
                <p className = 'exchangeText'>React website displaying and converting all the foreign currencies including Bitcoin, having Euro as base currency. The aplication gets the data from the Fixer API using Axios.</p>
                <a className = 'git1' href = "https://github.com/alexnmc/assignments-practice/tree/master/assignments/projects/API%20PROJECT%20USING%20REACT ">
                    <div className = "git2"></div>
                </a>
            </div>

            <div className = ' shellDiv'>
                <a >
                <img className = "shell" alt = '' src = {shell}/>
                </a>
                <p className = 'shellText'>Shell Game, a fullstack aplication  created in React with CSS animations and lots of JavaScript. Custom API routes built with Mongoose and Express to save player info in MongoDB.
                </p>
                <a className = 'git1' href = "https://github.com/alexnmc/assignments-practice/tree/master/assignments/projects/FUL%20STACK%20PROJECT ">
                    <div className = "git2"></div>
                </a>
            </div>

            <div className = 'excDiv'>
                <a>
                <img className ="shell" alt = '' src = {group}/>
                </a>
                <p className = 'exchangeText'>User friendly appointment booking platform made with React. User authentication for admin with password encryption and protected routes. Bookings are stored in MongoDB.</p>
                <a className = 'git1' href = "https://github.com/alexnmc/assignments-practice/tree/master/assignments/projects/API%20PROJECT%20USING%20REACT ">
                    <div className = "git2"></div>
                </a>
            </div>
            
            
            {/* <div className = "group"></div> */}

        </div>
       
        </div>
        <div className = 'home5'></div>
        
           
        </div>
    )
}

export default Projects