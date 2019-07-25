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
  const article = this.props.articles.map(item => {
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
      <View>
      <View style={{ position: 'fixed', width: '100%', height:100, backgroundColor: 'black', display:'flex', alignItems: 'center', alignContent: 'center'}}>
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

export default withButton(App)
