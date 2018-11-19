import React from 'react'
import Cards from './Cards'

const VacationSpots = props => {

    const mapVacSpots = props.vacationSpots.map(item => {

        return(
            <Cards place = {item.place}
                   price = {item.price}
                   timeToGo = {item.timeToGo}/>
        )
    })

        return(
        <div>
        {mapVacSpots}
        </div>
    )
    
}



export default VacationSpots