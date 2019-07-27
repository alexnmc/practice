import React from 'react'
import AnimatedLoader from "react-native-animated-loader";
import {Dimensions, StyleSheet, View} from 'react-native'
var {width, height} = Dimensions.get('window')




const Loading = ({type, color}) => {
    
  return(
    <View style = {{backgroundColor: 'black', height: height, width: width}}>
    <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  lottie: {
    width: 300,
    height: 300
  }
});


export default Loading
