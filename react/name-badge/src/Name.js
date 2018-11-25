import React from 'react'

const Name = (props) => {

    return (
        
        <div className={props.color}>
            <p className = 'top'>Badge: </p>
            <p>Name: {props.name}</p    >
            <p>Last name: {props.lname}</p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
            <p>Favorite food: {props.favfood}</p>
            <p>Place of birth: {props.place}</p>
            <p className='p7'>{props.about}</p>
        </div>

    )
}

export default Name