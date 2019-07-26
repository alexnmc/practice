import React, { Component }  from 'react';
import {ScrollView, StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import A from 'react-native-a'
import {withButton} from './ButtonProvider'
import Button1 from './Button1'


  class Home extends Component{
  
  constructor(){
    super()
    this.myRef = React.createRef()
    this.state = {
    }
}
  


  componentDidMount(){ 
    this.props.getNews()
  }
    
  scrolling = () => {
    
    this.myRef.current.scrollTo({top: 0, behavior: 'smooth'})
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
              <Image source ={{uri: item.urlToImage}} style={{width: '100%', height: 200, margin:5}}/>
              <Text style = {styles.mainText}> {item.description} </Text>
              <Text style = {styles.itemSource}>{item.source.name} </Text>
              <View style = {styles.bottom}>
                <A href={item.url} style = {{margin:'auto'}}>read more</A>
                <TouchableOpacity onPress={() => this.scrolling()}><Image source={require('./Photos/scroll.png')}  style={{width: 30, height:30}}/></TouchableOpacity>
              </View>
          </View>
      )
  })
  
    return (
      <View>
        <View style={{ width: '100%', height:100, backgroundColor: 'black', display:'flex', alignItems: 'center', alignContent: 'center'}}>
          <Button1/>
        </View>
        <ScrollView contentContainerStyle = {styles.body2} ref = {this.myRef}> 
          {article}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    news:{
      width: '90%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:50,
      padding: 5
    },

  body2:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  itemTitle:{
    color:'rgb(131, 0, 0)',
    fontSize: 15,
    fontWeight: "900",
    width:'100%'
  },

  mainText:{
    fontSize:15,
    fontFamily: 'Arial',
    fontWeight: '900',
    width: '100%'
  },

  itemSource:{
    color: 'rgb(128, 0, 0)',
    fontWeight: "900",
    marginTop: 2
  },

  bottom:{
     width: '95%',
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems:"center",
     marginTop: 5
    

  }


})

export default withButton(Home)
