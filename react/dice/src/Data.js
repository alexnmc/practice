import React, {Component} from 'react'
import Axios from 'axios'


class Data extends Component{
        constructor(props){
           super(props)
            this.state = {
               data: ''
            }
        }
    

        componentDidMount(){
            Axios.get("").then(res => {
               this.setState({
                   data: res.data
               })
            })
        }


        render(){

            const newData = this.state.data.map(item => {
                return(
                    <div>
                        <h1>{item.name}</h1>
                        <h1>{item.height}</h1>
                    </div>
                )
            })


            return(
                <div>
                   {newData}
                </div>
            )
        }
}

export default Data