import React, {Component} from 'react'
import {withButton} from './ButtonProvider'
import {Animated, Easing, StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native'



class Button1 extends Component{
  
    constructor(){
      super()
     
      this.state = {
        left: new Animated.Value(-200)
      }
  }
  
   


    
        getNews = (url, name) => {
           this.props.getNewsCountry(url, name)
        }

        
        move = () => {
            this.state.left.setValue(-200)// reseting the animation
            this.props.editToggle()
            Animated.timing(this.state.left, {
               toValue:5,
               duration:1000,
               easing: Easing.linear
           }).start()
        }
    
        
       
       
render(){
    return (
        <View>
            <TouchableOpacity onPress={() => this.move()} style = {styles.buttonCover}>
                       <Text style = {styles.button}>Read</Text>
            </TouchableOpacity>
               
            {this.props.toggle ?
             <Animated.View style = {[styles.navbarWrap, {left: this.state.left}]}>
                <ScrollView>
                   
                   
                   <TouchableOpacity onPress={() => this.getNews('ar', 'Argentina')}>
                       <Text style = {styles.newsLink}>Argentina</Text>
                   </TouchableOpacity>
               
                   <TouchableOpacity onPress={() => this.getNews('au','Austrialia')}>
                       <Text style = {styles.newsLink}>Australia</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('at','Austria')}>
                       <Text style = {styles.newsLink}>Austria</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('be','Belgium')}>
                       <Text style = {styles.newsLink}>Belgium</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('br','Brazil')}>
                       <Text style = {styles.newsLink}>Brazil</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("bg", "Bulgaria")}>
                       <Text style = {styles.newsLink}>Bulgaria</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('ca','Canada')}>
                       <Text style = {styles.newsLink}>Canada</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("cu", "Cuba")}>
                       <Text style = {styles.newsLink}>Cuba</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("co", "Colombia")}>
                       <Text style = {styles.newsLink}>Colombia</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('cn','China')}>
                       <Text style = {styles.newsLink}>China</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("cz", "Czech Republic")}>
                       <Text style = {styles.newsLink}>Czech Republic</Text>
                   </TouchableOpacity>
               
                   <TouchableOpacity onPress={() => this.getNews("eg", "Egypt")}>
                       <Text style = {styles.newsLink}>Egypt</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("fr", "France")}>
                       <Text style = {styles.newsLink}>Francce</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('de','Germany')}>
                       <Text style = {styles.newsLink}>Germany</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('ar', 'Argentina')}>
                       <Text style = {styles.newsLink}>Argentina</Text>
                   </TouchableOpacity>
               
                   <TouchableOpacity onPress={() => this.getNews('au','Austrialia')}>
                       <Text style = {styles.newsLink}>Australia</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('at','Austria')}>
                       <Text style = {styles.newsLink}>Austria</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('be','Belgium')}>
                       <Text style = {styles.newsLink}>Belgium</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('br','Brazil')}>
                       <Text style = {styles.newsLink}>Brazil</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("bg", "Bulgaria")}>
                       <Text style = {styles.newsLink}>Bulgaria</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews('ca','Canada')}>
                       <Text style = {styles.newsLink}>Canada</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("cu", "Cuba")}>
                       <Text style = {styles.newsLink}>Cuba</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("co", "Colombia")}>
                       <Text style = {styles.newsLink}>Colombia</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('cn','China')}>
                       <Text style = {styles.newsLink}>China</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("cz", "Czech Republic")}>
                       <Text style = {styles.newsLink}>Czech Republic</Text>
                   </TouchableOpacity>
               
                   <TouchableOpacity onPress={() => this.getNews("eg", "Egypt")}>
                       <Text style = {styles.newsLink}>Egypt</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("fr", "France")}>
                       <Text style = {styles.newsLink}>Francce</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('ar', 'Argentina')}>
                       <Text style = {styles.newsLink}>Argentina</Text>
                   </TouchableOpacity>
               
                   <TouchableOpacity onPress={() => this.getNews('au','Austrialia')}>
                       <Text style = {styles.newsLink}>Australia</Text>
                   </TouchableOpacity>

                   

                   
                   

                   
                </ScrollView>
                </Animated.View>
                
                :
                
                 null
            }
            </View>

        )
    }
}

    
    

    const styles = StyleSheet.create({
        
        newsLink:{
            margin: 10,
            fontSize: 20,
           
        },

        navbarWrap: {
            marginTop: 60, 
            width: 200,
            borderWidth: 0.5,
            borderColor: 'black',
            position:'absolute',
            height:600,
           
        },

        button:{
            fontSize:14,
            fontFamily: 'Helvetica',
            fontWeight: '900',
            color: 'rgb(241, 241, 241)',
        },

        buttonCover:{
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

               

export default  withButton(Button1)

