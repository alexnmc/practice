import React, { Component }  from 'react';
import {ScrollView, StyleSheet, Text, View , Image} from 'react-native'
import A from 'react-native-a'
import {withButton} from './ButtonProvider'
import Button1 from './Button1'


  class  App extends Component{
  
  constructor(){
    super()
    this.state = {
    }
}
  


  componentDidMount(){ 
    this.props.getNews()
  }
    
  
  
render(){
  const article = 
      this.props.toggle ?
      null
      :
      this.props.articles.map(item => {
      return (
          <View key={Math.random()} style = {styles.news}>
              <Text style = {styles.itemTitle}> {item.title} </Text>
              <Image source ={{uri: item.urlToImage}} style={{flex:1, width: '100%', height: '50%', margin:'auto'}}/>
              <Text style = {styles.mainText}> {item.description} </Text>
              <Text style = {styles.itemSource}>{item.source.name} </Text>
              <A href={item.url} style = {{margin:'auto'}}>read more</A>
          </View>
      )
  })
  
    return (
      <View>
        <View style={{ width: '100%', height:100, backgroundColor: 'black', display:'flex', alignItems: 'center', alignContent: 'center'}}>
          <Button1/>
        </View>
        <ScrollView contentContainerStyle = {styles.body2}> 
          {article}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    news:{
      width: '90%',
      height: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:50,
    },

  body2:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  itemTitle:{
    color:'rgb(131, 0, 0)',
    marginBottom: 3,
    fontSize: 15,
    fontWeight: "900",
    width:'100%'
  },

  mainText:{
    fontSize:14,
    fontFamily: 'Arial',
    marginTop: 3,
    fontWeight: '900'
  },

  itemSource:{
    color: 'rgb(128, 0, 0)'
  }


})

export default withButton(App)
