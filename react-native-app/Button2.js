import React, {Component} from 'react'
import {withButton} from './ButtonProvider'
import {Dimensions, Animated, Easing, StyleSheet, ScrollView, TouchableOpacity, Text, View} from 'react-native'

var {width, height} = Dimensions.get('window')

    
class Button2 extends Component{
  
    constructor(){
      super()
      
      this.state = {
        right: new Animated.Value(-200)
      }
    }

        getNews = (url, name) => {
           this.props.getNewsSource(url, name)
        }

        
        move = () => {
            this.state.right.setValue(-200)// reseting the animation
            this.props.editToggle2()
            Animated.timing(this.state.right, {
               toValue:5,
               duration:500,
               easing: Easing.linear
           }).start()
        }
    
       
render(){
    return (
        <View>
            <TouchableOpacity onPress={() => this.move()} style = {styles.buttonCover2}>
                <Text style = {styles.button2}>Channels</Text>
            </TouchableOpacity>
               
            {this.props.toggle2 ?
             <View style = {styles.container2}>
             <Animated.View style = {[styles.navbarWrap2, {right: this.state.right}]}>
                <ScrollView>
                   
                   <TouchableOpacity onPress={() => this.getNews("axios", "Axios")}>
                       <Text style = {styles.newsLink}>Axios </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("bbc-news", "BBC News" )}>
                       <Text style = {styles.newsLink}>BBC News </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => this.getNews("bbc-sport", 'BBC Sport' )}>
                       <Text style = {styles.newsLink}>BBC Sport </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("business-insider", 'Businsess Insider' )}>
                       <Text style = {styles.newsLink}>Businsess Insider</Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("business-insider-uk", 'Business Insider UK' )}>
                       <Text style = {styles.newsLink}>Business Insider UK </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("cbs-news", 'CBS News' )}>
                       <Text style = {styles.newsLink}>CBS News </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("cnn","CNN" )}>
                       <Text style = {styles.newsLink}>CNN </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews( "cnbc", "CNBC News")}>
                       <Text style = {styles.newsLink}>CNBC </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("crypto-coins-news", 'Crypto Coins News' )}>
                       <Text style = {styles.newsLink}>Crypto Coins News </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("daily-mail", "Daily Mail News" )}>
                       <Text style = {styles.newsLink}>Daily Mail </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("espn", 'ESPN News' )}>
                       <Text style = {styles.newsLink}>ESPN </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("entertainment-weekly", 'Entertaiment Weekly' )}>
                       <Text style = {styles.newsLink}>Entertaiment Weekly </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("financial-times", 'Financial Times')}>
                       <Text style = {styles.newsLink}>Financial Times </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("fox-news", 'FOX News' )}>
                       <Text style = {styles.newsLink}>FOX News </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("fox-sports", 'FOX Sports' )}>
                       <Text style = {styles.newsLink}>FOX Sports </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("google-news" , 'Google News' )}>
                       <Text style = {styles.newsLink}>Google News</Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("independent", 'Independent' )}>
                       <Text style = {styles.newsLink}>Independent </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("mtv-news", 'MTV News' )}>
                       <Text style = {styles.newsLink}>MTV News </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("the-new-york-times", ' NY Times' )}>
                       <Text style = {styles.newsLink}>NY Times </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("nfl-news", 'NFL News' )}>
                       <Text style = {styles.newsLink}>NFL News </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("national-geographic", 'National Georgraphic' )}>
                       <Text style = {styles.newsLink}>National Georgraphic </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("newsweek", 'Newsweek' )}>
                       <Text style = {styles.newsLink}>Newsweek </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("news24", 'NEWS 24' )}>
                       <Text style = {styles.newsLink}>News 24 </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews( "reuters", "Reuters")}>
                       <Text style = {styles.newsLink}>Reuters </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("the-economist", 'The Economist' )}>
                       <Text style = {styles.newsLink}>The Economist </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("the-washington-times", 'Washington Times' )}>
                       <Text style = {styles.newsLink}>Washington Times </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("the-washington-post", 'Washington Post' )}>
                       <Text style = {styles.newsLink}>Washington Post</Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("time", 'TIME' )}>
                       <Text style = {styles.newsLink}>TIME </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("usa-today", 'USA Today' )}>
                       <Text style = {styles.newsLink}>USA Today </Text>
                   </TouchableOpacity>
                
                   <TouchableOpacity onPress={() => this.getNews("the-wall-street-journal", 'Wall Street Journal' )}>
                       <Text style = {styles.newsLink}>Wall Street Journal </Text>
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

        navbarWrap2: {
            marginTop: 10, 
            width: 200,
            borderWidth: 0.5,
            borderColor: 'black',
            position:'absolute',
            height:600,
            backgroundColor: 'white'
        },

        container2: {
            top: 40,
            height: height,
            width: width,
            backgroundColor: 'black',
            position: 'absolute',
            left:-223
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

