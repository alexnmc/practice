import React, {Component} from 'react'
import {withButton} from './ButtonProvider'
import {Dimensions, Animated, Easing, StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native'

var {width, height} = Dimensions.get('window')


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
               duration:500,
               easing: Easing.linear
           }).start()
        }
    
        
render(){
    return (
        <View>
            <TouchableOpacity onPress={() => this.move()} style = {styles.buttonCover}>
                       <Text style = {styles.button}>Countries</Text>
            </TouchableOpacity>
               
            {this.props.toggle ?
             <View style = {styles.container}>
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

                   <TouchableOpacity onPress={() => this.getNews("gr", "Greece")}>
                       <Text style = {styles.newsLink}>Greece</Text>
                   </TouchableOpacity>
               
                   <TouchableOpacity onPress={() => this.getNews("hk", "Hong Kong")}>
                       <Text style = {styles.newsLink}>Honk Kong</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("hu", "Hungary")}>
                       <Text style = {styles.newsLink}>Hungary</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("it", "Italy")}>
                       <Text style = {styles.newsLink}>Italy</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("id", "Indonesia")}>
                       <Text style = {styles.newsLink}>Indonesia</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("ie", "Ireland")}>
                       <Text style = {styles.newsLink}>Ireland</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => getNews("il", "Israel")}>
                       <Text style = {styles.newsLink}>Israel</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("jp", "Japan")}>
                       <Text style = {styles.newsLink}>Japan</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("kr", "Korea")}>
                       <Text style = {styles.newsLink}>Korea</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews('lv','Latvia')}>
                       <Text style = {styles.newsLink}>Latvia</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("lt", "Lithuania")}>
                       <Text style = {styles.newsLink}>Lithuania</Text>
                   </TouchableOpacity>
               
                   <TouchableOpacity onPress={() => this.getNews("my", "Malaysia")}>
                       <Text style = {styles.newsLink}>Malaysia</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("mx", "Mexico" )}>
                       <Text style = {styles.newsLink}>Mexico </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("ma", "Morocco" )}>
                       <Text style = {styles.newsLink}>Morocco </Text>
                   </TouchableOpacity>
                   
                   <TouchableOpacity onPress={() => this.getNews("nl", "Netherlands" )}>
                       <Text style = {styles.newsLink}>Netherlands </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("nz", "New Zealand" )}>
                       <Text style = {styles.newsLink}>New Zealand </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("ng", "Nigeria" )}>
                       <Text style = {styles.newsLink}>Nigeria </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("no", "Norway" )}>
                       <Text style = {styles.newsLink}>Norway </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("pl", "Poland" )}>
                       <Text style = {styles.newsLink}>Poland </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("pt", "Portugal" )}>
                       <Text style = {styles.newsLink}>Portugal </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("ru", "Russia" )}>
                       <Text style = {styles.newsLink}>Russia</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("ro", "Romania" )}>
                       <Text style = {styles.newsLink}>Romania </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("sa", "Saudi Arabia" )}>
                       <Text style = {styles.newsLink}>Saudi Arabia </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("rs", "Serbia" )}>
                       <Text style = {styles.newsLink}>Serbia </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("sg", "Singapore" )}>
                       <Text style = {styles.newsLink}>Singapore</Text>
                   </TouchableOpacity>
                   
                   <TouchableOpacity onPress={() => this.getNews("sl", "Slovakia" )}>
                       <Text style = {styles.newsLink}>Slovakia</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("za", "South Africa" )}>
                       <Text style = {styles.newsLink}>South Africa</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("se", "Sweeden" )}>
                       <Text style = {styles.newsLink}>Sweeden</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("ch", "Swiss" )}>
                       <Text style = {styles.newsLink}>Swiss </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("tw", "Taiwan" )}>
                       <Text style = {styles.newsLink}>Taiwan </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("th", "Thailand" )}>
                       <Text style = {styles.newsLink}>Thailand </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("tr", "Turkey" )}>
                       <Text style = {styles.newsLink}>Turkey</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("ua", "Ukraine" )}>
                       <Text style = {styles.newsLink}>Ukraine </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("ae", "United Arab Emirates" )}>
                       <Text style = {styles.newsLink}>Emirates </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("gb", "United Kingdom" )}>
                       <Text style = {styles.newsLink}>UK </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("us", "USA" )}>
                       <Text style = {styles.newsLink}>USA </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("ve", "Venezuela")}>
                       <Text style = {styles.newsLink}>Venezuela</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews( )}>
                       <Text style = {styles.newsLink}></Text>
                   </TouchableOpacity>

                  
                   <TouchableOpacity onPress={() => this.getNews( )}>
                       <Text style = {styles.newsLink}></Text>
                   </TouchableOpacity>
                  
                  
                   <TouchableOpacity onPress={() => this.getNews( )}>
                       <Text style = {styles.newsLink}></Text>
                   </TouchableOpacity>
                   
                   
                   <TouchableOpacity onPress={() => this.getNews( )}>
                       <Text style = {styles.newsLink}></Text>
                   </TouchableOpacity>

                </ScrollView>
                </Animated.View>
                </View>
                
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
            fontWeight: '900',
            color: 'rgb(155, 0, 0)'
        },

        container: {
            top: 40,
            height: height,
            width: width,
            backgroundColor: 'black',
            position: 'absolute'
        },

        navbarWrap: {
            marginTop: 10, 
            width: 200,
            borderWidth: 0.5,
            borderColor: 'black',
            position:'absolute',
            height:600,
            backgroundColor: 'white'
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

