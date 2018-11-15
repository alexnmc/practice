import React from 'react'

const Profile = (props) => {
    return(
        <div>
            <img src={props.pic}/>
            <h1>{props.name}</h1>
        </div>
    )
}






 export default Profile