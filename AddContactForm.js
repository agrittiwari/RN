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
  


    render() {
        return (
      <View style={ {paddingTop:20}}>
        <TextInput style={styles.input}     value ={this.state.name} />
        <TextInput  style={styles.input} value={this.state.phone}/>
        
        <Button title="Add Contact"/>  
    </View>
    )
  }
}