import React ,{Component} from 'react'
import {withUser} from './UserProvider'
import {withData} from './DataProvider'



class Data extends Component{
   
   componentDidMount(){
      
   }

   
   
   handleSubmit = (e) => {
    e.preventDefault()
    this.props.saveNotes(this.props.user._id)
}
   
   render(props){ 
    return(
        <div>
            <form onSubmit = {this.handleSubmit}>
                <input
                className = "notes"
                type ='text'
                name ='newNotes'
                placeholder ='write something'
                value = {this.props.newNotes}
                onChange= {this.props.handleChange2}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
}


export default  withUser(withData(Data))