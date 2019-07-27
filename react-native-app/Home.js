import React, { Component }  from 'react';
import {ScrollView, StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import A from 'react-native-a'
import {withButton} from './ButtonProvider'
import Button1 from './Button1'
import Button2 from './Button2'
import Loading from './Loading'


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
      this.props.toggle || this.props.toggle2 ?
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
      <View style={{ backgroundColor: 'black'}}>
        <View style={{ width: '100%', height: 80, backgroundColor: 'black', display:'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
           <Button1/>
           <Text style = {styles.channelName}>{this.props.channelName}</Text>
           <Button2/>
        </View>
        <ScrollView contentContainerStyle = {styles.body2} ref = {this.myRef}> 
        {this.props.loading === 'on' ?
          <Loading/>
        :
          article
        }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    
    news:{
      width: '97%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:50,
      padding: 7,
      backgroundColor: 'white'
    },

  body2:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTitle:{
    color:'rgb(131, 0, 0)',
    fontSize: 18,
    fontWeight: "900",
    width:'100%'
  },

  mainText:{
    fontSize:17,
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
     width: '97%',
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems:"center",
     marginTop: 5
  },

  channelName: {
    color: 'white',
    fontWeight: "900",
    fontSize: 17,
    margin: 10,
    width: "32%",
    textAlign: 'center'
   
  }


})

export default withButton(Home)
