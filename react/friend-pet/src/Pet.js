import React from 'react'


const Pet = props => {
    return (
        <div>
            <h5>Name: {props.name}</h5>
            <p>Breed: {props.breed}</p>
        
        </div>
    )
}

export default Pet