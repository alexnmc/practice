import React from 'react'
import {Link} from 'react-router-dom'

const Home = props => {
    return (
        <div className="home"  >
       
        <div className = "home1"> 
        <p className = 'navbarP2' style = {props.style.navbarP2} onClick={props.changeColor}>Alexander Nemechek </p>
        </div>
        <div className = "home2">
        
        <p className = 'navbarP'></p>
        <p  className = 'navbarP'>Welcome to my portofolio website</p>
        <h5>this site was made with REACT</h5>
        
        <div className = "home3">
        <p className = "aboutP">
        My name is Alexander Nemechek, I am a full stack software developer.
        I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, 
        continuing to learn new languages and development techniques.
        </p>
        
        <Link className = 'linkedin1' to = "/https://www.linkedin.com/in/alexander-nemechek-10240a167/">
        <div className = "linkedin"></div>
        </Link>
        
        </div>
        
        </div>
            
        </div>
    )
}

export default Home