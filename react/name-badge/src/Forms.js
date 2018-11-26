import React from 'react'




const Forms = props =>{
    return(
    <form className = 'form'>
        <input type = 'text' 
            placeholder = ' Name:' 
            onChange = {props.handleChange} 
            value = {props.name}
            name = 'name' /> 
        <input type = 'text'
            placeholder = 'Last Name:'
            onChange = {props.handleChange}
            value = {props.lname}
            name = 'lname' />
        <input type = 'email'
            placeholder = 'Email:'
            onChange = {props.handleChange}
            value = {props.email}
            name = 'email' />
        <input type = 'text'
            placeholder = 'Favorite food:'
            onChange = {props.handleChange}
            value ={props.favfood}
            name = 'favfood' />
        <input type = 'number'
            placeholder = 'Phone:'
            onChange = {props.handleChange}
            value ={props.phone}
            name = 'phone' />
        <input type = 'text'
            placeholder = 'Place of birth:'
            onChange = {props.handleChange}
            value ={props.place}
            name = 'place' />
        <input type = 'text'
            placeholder = 'Tell us about yourself:'
            onChange = {props.handleChange}
            value ={props.about}
            name = 'about' 
            className = 'inp7'/>
         <button  onClick = {props.handleSubmit} >Submit</button>
         </form>
    )
}


                  export default Forms
 