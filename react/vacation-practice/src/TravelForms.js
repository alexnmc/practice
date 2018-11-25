import React from 'react'
import Cards from './Cards'



const TravelForms = props =>{


const mapTRV = props.vacationSpots.map(function(item){

    return (<Cards
             place = {item.place}
             price = {item.price}
             timeToGo = {item.timeToGo}
        />)
    })

     return (
         <div>{mapTRV}</div>
     )

     }


    export default TravelForms