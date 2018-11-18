import React from 'react'
import VacationSpots from './VacationSpots'
import './Style.css'

let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]

  const App = ()=>{

       return(
           <VacationSpots vacationSpots = {vacationSpots} />
       )
  }

  export default App