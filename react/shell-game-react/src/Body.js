import React from 'react'


const Body = (props) =>{
   

    return(
    <div className = 'wrap'>  
        
      <h2 className = 'score'></h2>
      <p>WHICH CUP HAS THE BALL?</p>
    
    <div className = 'h1wrapper' style = {props.style.h1wrapper}> 
      <h1 className = 'h1' style = {props.style.h1} dangerouslySetInnerHTML = {{__html: props.style.h1.text}}></h1>
    </div>
    
    <div className ='container'>
        <div className = 'box1' onClick = {props.function1} style = {props.style.box1} dangerouslySetInnerHTML = {{__html: props.style.box1.text}}  ></div>
        <div className = 'box2' onClick = {props.function2} style = {props.style.box2} dangerouslySetInnerHTML = {{__html: props.style.box2.text}} ></div>
        <div className = 'box3' onClick = {props.function3} style = {props.style.box3} dangerouslySetInnerHTML = {{__html: props.style.box3.text}} ></div>
    </div>
        <button className = 'btn' onClick = {props.function4}>SHUFFLE</button>
     
   </div>

        
    )


}

        export default Body