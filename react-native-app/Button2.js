import React from 'react'
import {withButton} from './ButtonProvider'
import {StyleSheet, ScrollView, TouchableOpacity, Text, View} from 'react-native'

    
    const Button2 = (props) => {

        
        function getNews(url, name) {
           props.getNewsSource(url, name)
        }
    
       

    return (
        <View>
            <TouchableOpacity onPress={() => props.editToggle2()} style = {styles.buttonCover2}>
                       <Text style = {styles.button2}>Read</Text>
            </TouchableOpacity>
               
            {props.toggle2 ?
                <ScrollView style = {styles.navbarWrap2}>
                   
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

        navbarWrap2: {
            marginTop: 80, 
            width: 200,
            borderWidth: 0.5,
            borderColor: 'black',
            position:'absolute',
            height:600,
            marginLeft: -70
        },

        button2:{
            fontSize:14,
            fontFamily: 'Helvetica',
            fontWeight: '900',
            color: 'rgb(241, 241, 241)',
        },

        buttonCover2:{
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
            width: 90,
            height: 34,
            backgroundColor: 'rgb(175, 0, 0)',
            borderWidth: 1,
            borderColor: 'rgb(141, 0, 0)',
            margin: 5,
            
        }
      
    })
               

export default  withButton(Button2)

