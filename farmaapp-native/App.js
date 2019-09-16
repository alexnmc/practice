import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      phone:'',
      product:''
    };
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.cauta}>Cauta produsul dorit:</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
        />

       <TextInput
          style={styles.input}
          placeholder="phone"
          onChangeText={(text) => this.setState({phone: text})}
          value={this.state.phone}
        />

       <TextInput
          style={styles.input}
          placeholder="product"
          onChangeText={(text) => this.setState({product:text})}
          value={this.state.product}
        />

        <TouchableOpacity
          style={styles.saveButton}
          onPress={this.handleSubmit}
        >
        <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>


        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   input:{
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius:3,
    height: 40, 
    width: 200,
    margin:5,
    padding: 3
   },
   saveButton:{
     width: 200,
     height: 40,
     display: "flex",
     alignItems: "center",
     justifyContent: 'center',
     backgroundColor: 'blue',
     borderWidth: 1,
     borderColor: 'blue',
     margin: 10,

   },
   saveButtonText:{
     color: "white"
   },
   cauta:{
     color:"blue",
     fontWeight: "900",
     marginBottom:30
   }
});
