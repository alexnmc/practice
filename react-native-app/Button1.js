import React from 'react'
import {withButton} from './ButtonProvider'
import {ScrollView, TouchableOpacity, Text, View , Button} from 'react-native'

    const Button1 = (props) => {

        function getNews(url, name) {
           props.getNewsCountry(url, name)
           
        }
    
       

        
    return (
        <View style = {{ position: 'absolute', height:'auto'}}>
           <Button
                onPress={() => props.editToggle()}
                title="Read"
                color="tomato"
                accessibilityLabel="Learn more about this purple button"
            />
            {props.toggle ?
                    <ScrollView style = {{position: 'fixed', height: 300, width: 200, backgroundColor: 'white'}}>
                        <TouchableOpacity onPress={() => {getNews('at','Austria')}}>
                            <Text>Argentina</Text>
                        </TouchableOpacity>
                    </ScrollView>
                
               
            :
                null
            
            
            }
            </View>
       
         )
    }

               

export default  withButton(Button1)

