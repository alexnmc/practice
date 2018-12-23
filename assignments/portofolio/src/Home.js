import React from 'react'

const Home = props => {
    return (
        <div className="home" onClick={props.changeColor} >
       
        <div className = "home1"> 
        <p className = 'navbarP2' style = {props.style.navbarP2}>Alexander Nemechek</p>
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
        </div>
        </div>
            
        </div>
    )
}

export default Home