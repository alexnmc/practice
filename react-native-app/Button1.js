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
                    <ScrollView style = {{position: 'absolute', height:'90%', width: 200, backgroundColor: 'white'}}>
                        <TouchableOpacity onPress={() => {getNews('ar','Argentina')}}>
                            <Text>Argentina</Text>
                        </TouchableOpacity>
                    
                        <TouchableOpacity onPress={() => {getNews('au','Austrialia')}}>
                            <Text>Australia</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {getNews('at','Austria')}}>
                            <Text>Austria</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {getNews('be','Belgium')}}>
                            <Text>Belgium</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {getNews('br','Brazil')}}>
                            <Text>Brazil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {getNews('ca','Canada')}}>
                            <Text>Canada</Text>
                        </TouchableOpacity>
                    </ScrollView>
                :
                null
            
            
            }
            </View>
       
         )
    }

               

export default  withButton(Button1)

