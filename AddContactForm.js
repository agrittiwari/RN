import React, { Component } from 'react'

import {TextInput, View, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';



const styles = StyleSheet.create({
    input :{
padding: 7,
borderWidth:1,
borderColor: 'black',
    }
})

export default class AddContactForm extends Component {
  static propTypes ={
      addContact : PropTypes.func,
  }

  state = {
      name: '',
      phone: '',
  }
  
handleNameChange = name => {
    this.setState({name})
}


handlePhoneChange = phone => {
    this.setState({phone})
}
    render() {
        return (
      <View style={ {paddingTop:20}}>
        <TextInput 
        style={styles.input} 
        onChangeText={this.handleNameChange} 
        value ={this.state.name} 
        />
        <TextInput 
         style={styles.input}
         onChangeText={this.handlePhoneChange}
         value={this.state.phone} 
         keyboardType="numeric"/>
        
        <Button title="Add Contact"/>  
    </View>
    )
  }
}
