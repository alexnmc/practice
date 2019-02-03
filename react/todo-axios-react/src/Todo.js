import React, {Component, Fragment} from 'react'

class Todos extends Component {
 
    constructor(){

        super()
        this.state = {
            isEditing: false,
            title: ''
        }
    }

    editToggler = () => {
        this.setState(prevState =>{
            return{
                isEditing: !prevState.isEditing
            }
        })
    }

    handleChange = event => {
        const {name, value} = event.target

         this.setState({
             [name]: value
         })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        const updates = {
            title: this.state.title

        }
        this.props.handleEdit(this.props.id, updates)
        this.setState({
            title: ''
        })
        this.editToggler()
    }

    
    render(){
        return(
         <Fragment> 
         { this.state.isEditing ? 
            
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type = 'text' 
                    value = {this.state.title}
                    onChange = {this.handleChange}
                    name = 'title'
                    placeholder = {this.props.title}
                    />
                    <button>Edit Submit</button>
                </form>
                <button onClick = {this.editToggler}>Close</button>
            </div>
            
          :  
            <div>
            <h1>{this.props.title}</h1>
            <button onClick = {()=>{this.props.handleDelete(this.props.id)}}>Delete</button>
            <button onClick = {this.editToggler}>Edit</button>
            </div>
         }
         </Fragment>
        )
    }
}



export default Todos