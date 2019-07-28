import React, {Component} from 'react'




class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle: true,
            
        }
}


render(){
    return(
        <div className = "contact">
            <h1 className = 'h1'>Cristian Lazar, tel: 0773853041</h1>
            
        </div>
    )
}
}

export default Home