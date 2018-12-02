import React from 'react'


    
   


const ExchangeList = props => {

    return (
         
        <div className = 'excList'>
            <form onSubmit = {props.handleSubmit}>
              
              <input type = 'text' 
                     placeholder = '' 
                     onChange = {props.handleChange} 
                     value = {props.inputValue}
                     name = 'inputValue' /> 
                    <button>Search</button>
            </form>
              <div className = 'msg'>
              <h3 className = 'search'>{props.newItem.key && "Today's rate:"}</h3>
                 {props.newItem.key && '1 EUR ='}  {props.newItem.value} {props.newItem.key }
              </div> 
                                     {/* unary operator */}
             
            {props.mapCur}
        </div>
         
    )
    }
   

export default ExchangeList