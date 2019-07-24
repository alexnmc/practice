import React from 'react';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style = {styles.body}> 
      <ImageBackground source={require('./Photos/news.jpg')} 
        style={{flex:1,  
                position: 'absolute',
                width: '10%',
                height: '10%',
                justifyContent: 'center',   
                resizeMode: "repeat"}}>
        <Text>News For You</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
 body:{
   width: '100%',
   height: '100%'
 }
});
