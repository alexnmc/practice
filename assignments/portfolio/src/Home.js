import React from 'react'
import {Link} from 'react-router-dom'


const Home = props => {
    return (
        <div className="home"  onMouseMove={props.changeColor}>
        
            <div className = "home1"> 
                <p className = 'navbarP2' style = {props.style.navbarP2} > Alexander Nemechek </p>
                <p className = "developer"> javascript developer</p>
            
            </div>
        
            <div className = "home2">
                <p  className = 'welcomeP'>Welcome to my portfolio website</p>
                <h5>this site was made with REACT</h5>
                <div className = "react"></div>
                
            </div>
        
            <div className = "home4">

            </div>
            
            <div className = "home3">
                
                <div className = "ID"></div>
                
                <div className = 'inline'>
                        <Link className = 'linkedin1' to ={ "/https://www.linkedin.com/in/alexander-nemechek-10240a167"}>
                        <div className = "linkedin"></div>
                        </Link>
                        <Link className = 'git1' to ={ "/https://www.linkedin.com/in/alexander-nemechek-10240a167"}>
                        <div className = "git"></div>
                        </Link>
                </div>

                    <p className = "aboutP">
                    My name is Alexander Nemechek, I am a full stack software developer.
                    I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, 
                    continuing to learn new languages and development techniques. 
                    </p>
                    <p className = "aboutP" > MY SKILLS ARE:</p>
            
                <div className = 'logos'>
                    
                    <div className = 'javascript'></div>
                    <div className = 'react'></div>
                    <div className = 'html'></div>
                    <div className = 'css'></div>
                    <div className = 'node'></div>
                    <div className = 'mongo'></div>
                    
                </div>

                <div className = "provide"> 
                    <ul>
                        <li>JavaScript (vanilla, React)</li>
                        <li>Responsive HTML/CSS</li>
                        <li>High-level user experience</li>
                        <li>Best practices</li>
                        <li>Performance</li>
                        <li>Animation</li>
                    </ul>

                    
                    <ul>
                        <li>Node.js</li>
                        <li>Npm</li>
                        <li>API integration and development with express</li>
                        <li>Mongoose</li>
                        <li>Database arhitecture in MongoDB</li>
                        <li>Git</li>
                            
                    </ul>
                    
                </div>
                    
            </div>
            
        </div>
    )
}

    export default Home