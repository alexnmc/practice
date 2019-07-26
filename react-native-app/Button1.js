import React from 'react'
import {withButton} from './ButtonProvider'
import {StyleSheet, ScrollView, TouchableOpacity, Text, View , Button} from 'react-native'

    
    const Button1 = (props) => {

        
        function getNews(url, name) {
           props.getNewsCountry(url, name)
        }
    
       

    return (
        <View style = {{marginTop: 40, height:400}}>
           <Button
                onPress={() => props.editToggle()}
                title="Read"
                color="tomato"
                accessibilityLabel="Learn more about this purple button"
            />
            {props.toggle ?
                   <ScrollView style = {styles.navbarWrap}>
                   <TouchableOpacity onPress={() => getNews('ar', 'Argentina')}>
                       <Text style = {styles.newsLink}>Argentina</Text>
                   </TouchableOpacity>
               
                   <TouchableOpacity onPress={() => getNews('au','Austrialia')}>
                       <Text style = {styles.newsLink}>Australia</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews('at','Austria')}>
                       <Text style = {styles.newsLink}>Austria</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews('be','Belgium')}>
                       <Text style = {styles.newsLink}>Belgium</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews('br','Brazil')}>
                       <Text style = {styles.newsLink}>Brazil</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews("bg", "Bulgaria")}>
                       <Text style = {styles.newsLink}>Bulgaria</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews('ca','Canada')}>
                       <Text style = {styles.newsLink}>Canada</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews("cu", "Cuba")}>
                       <Text style = {styles.newsLink}>Cuba</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews("co", "Colombia")}>
                       <Text style = {styles.newsLink}>Colombia</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews('cn','China')}>
                       <Text style = {styles.newsLink}>China</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews("cz", "Czech Republic")}>
                       <Text style = {styles.newsLink}>Czech Republic</Text>
                   </TouchableOpacity>
               
                   <TouchableOpacity onPress={() => getNews("eg", "Egypt")}>
                       <Text style = {styles.newsLink}>Egypt</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews("fr", "France")}>
                       <Text style = {styles.newsLink}>Francce</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews('de','Germany')}>
                       <Text style = {styles.newsLink}>Germany</Text>
                   </TouchableOpacity>
                
                </ScrollView>
                
                :
                
                 null
            }
            </View>
        )
    }

    const styles = StyleSheet.create({
        
        newsLink:{
            margin: 10,
            fontSize: 20,
           
        },

        navbarWrap: {
            marginTop: 80, 
            height:'100%' , 
            width: '50%', 
            borderWidth: 0.5,
            borderColor: 'black',
        }
      
    })
               

export default  withButton(Button1)

