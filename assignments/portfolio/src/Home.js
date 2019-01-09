import React from 'react'



const Home = props => {
    return (
        <div className="home"  id = '1' onMouseOver = {props.changeColor}>
        
            <div className = "home1"> 
                <p className = 'navbarP2' style = {props.style.navbarP2} > Alexander Nemechek </p>
                <p className = "developer"> javascript developer</p>
            
            </div>
        
            <div className = "home2">
                <p  className = 'welcomeP'>Welcome to my portfolio website</p>
                <h5>this site was made with REACT</h5>
                <div className = "react1"></div>
                
            </div>
        
            <div className = "home4">

            </div>
            
            
        </div>
    )
}

    export default Home