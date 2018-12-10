const express = require('express')
const app = express()
const uuid = require('uuid/v4')
const cors = require('cors')

let bounties = [
    {   firstName: "Mike",
        lastName: "Great",
        living: true,
        bountyAmount: 15,
        type : "Jedi ",
       _id: uuid()
        
    },
    {  firstName: "David",
       lastName: "Strong",
       living: true,
       bountyAmount: 17,
       type : "Jedi ",
       _id: uuid()
       }
]

    app.use(express.json())

    app.get('/bounties/:_id', (req, res) => {
        
        res.send(bounties.filter(bounty => req.params._id === bounty._id))
    })

    app.get('/bounties/', (req, res) => {
        res.send(bounties)
    })

    app.post('/bounties/', (req, res) => {
        
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(bounties)
    })

    app.put('/bounties/:id', (req, res) => {
       
        const bountyId = req.params.id
        const bountyUpdates = req.body
        const updatedBounties = bounties.map(item => item._id === bountyId ? {...item, ...bountyUpdates} : item)
        res.send(updatedBounties)
    })


    app.delete('/bounties/:id', (req, res) => {
       
        const bountyId = req.params.id
        const updatedBounties = bounties.filter(item => item._id !== bountyId)
        bounties = updatedBounties
        res.send(bounties)
    })
    
    
    








app.listen(8000, () => {
    console.log('Server is running on port 8000')
})