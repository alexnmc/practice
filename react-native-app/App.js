import React, { Component }  from 'react';
import {ScrollView, ImageBackground, StyleSheet, Text, View , Image} from 'react-native'
import A from 'react-native-a'
import axios from 'axios'

 export default class App extends Component{
  
  constructor(){
    super()
    this.state = {
        
        articles:[],
       
        
    }
}
  
componentDidMount(){ 
  axios.get( `https://newsapi.org/v2/top-headlines?country=au&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
   .then(response => {
      this.setState({
          articles: response.data.articles,
          
      })
  })
}
  
  
  
render(){
  
  
  const article = this.state.articles.map(item => {
      return (
          <View key={Math.random()} style = {styles.body}>
              <Text style = {{margin:'auto'}}> {item.title} </Text>
              <Image source ={{uri: item.urlToImage}} style={{width: '100%', height: '50%', margin:'auto'}}/>
              <Text style = {{margin:'auto'}}> {item.description} </Text>
              <Text style = {{margin:'auto'}}>{item.source.name} </Text>
              <View >
                  <A href={item.url} style = {{margin:'auto'}}>read more</A>
              </View>
          </View>
      )
  })
  
    return (
      
      <ScrollView contentContainerStyle = {styles.body2}> 
        <ImageBackground source={require('./Photos/news.jpg')} 
          style={{flex:1,  
                  position: 'fixed',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',   
                  resizeMode: "repeat"}}>
          </ImageBackground>
          {article}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  body:{
    width: '90%',
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
   
 },

 body2:{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
  
}
})
