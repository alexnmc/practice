import React from 'react'
import Friend from './Friend'

const FriendList = props =>{
    const newFriends = props.friends.map(friend =>{
            return (
                      <Friend name = {friend.name}
                              age = {friend.age}
                              pets = {friend.pets} />
            )
    })

    return (
        <div>
         { newFriends }
        </div>
    )
}



export default FriendList