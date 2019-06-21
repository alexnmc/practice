import React ,{Component} from 'react'
import {withUser} from './UserProvider'
import {withData} from './DataProvider'



class Data extends Component{
   
   componentDidMount(){
      this.props.getNotes(this.props.user._id)
      
   }

   componentWillReceiveProps(){
    this.props.getNotes(this.props.user._id)
      
   }
   
   
   handleSubmit = (e) => {
    e.preventDefault()
    this.props.saveNotes(this.props.user._id)
   
    
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
        <div className = 'data'>
            <form onSubmit = {this.handleSubmit}>
                <textarea rows = '20'
                className = "notes"
                type ='text'
                name ='newNotes'
                placeholder ='write something'
                value = {this.props.newNotes}
                onChange= {this.props.handleChange2}>
                </textarea>
                <button className = 'loginButton'>Submit</button>
            </form>
            <h1>write something</h1>
            <div className = 'showNotes2'>
                {notes}
            </div>
        </div>
    )
}
}


export default  withUser(withData(Data))