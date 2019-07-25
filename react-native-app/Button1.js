import React from 'react'
import {withButton} from './ButtonProvider'
import {ScrollView, StyleSheet, Text, View , Button} from 'react-native'
import A from 'react-native-a'

    const Button1 = (props) => {

        function getNews(url, name) {
           props.getNewsSource(url, name)
           
        }
    
        function getNews2(url, name) {
            props.getNewsCountry(url, name)
        }

        
    return (
        <View style = {{ position: 'absolute', height:'auto'}}>
           <Button
                onPress={() => props.getNews()}
                title="Read"
                color="tomato"
                accessibilityLabel="Learn more about this purple button"
                style = {{width: 200, height: 100, margin:'auto'}}
            />
            {props.toggle ?
                    <ScrollView>
                        <TouchableOpacity onPress={() => { this.getNews('ar','Argentina')}}>
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

