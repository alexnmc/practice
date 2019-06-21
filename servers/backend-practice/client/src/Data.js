import React ,{Component} from 'react'
import {withUser} from './UserProvider'
import {withData} from './DataProvider'



class Data extends Component{
   
   componentDidMount(){
      this.props.getNotes(this.props.user._id)
      
   }

   
   
   handleSubmit = (e) => {
    e.preventDefault()
    this.props.saveNotes(this.props.user._id)
    this.props.getNotes(this.props.user._id)
    
}
   
   render(props){ 
    
     let notes = this.props.notes.map(item =>{
         return(
             <div className = 'showNotes'>
               <h2>{item.notes}</h2>
             </div>
         )
     })
    
    
    
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
            {notes}
        </div>
    )
}
}


export default  withUser(withData(Data))