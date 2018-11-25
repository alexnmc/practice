import React from 'react'
import Pet from './Pet'

const Friend  = (props) => {
    const newPets = props.pets.map(pets => {

        return (<Pet name = {pets.name} breed = {pets.breed} />)

    })
    
        return (
            <div>
                <h1>Name: {props.name}</h1>
                <p>Age:{props.age}</p>
                <div>
                    <h4>Pets: { newPets } </h4>
                </div>
            </div> 
        )
   
}

export default Friend















