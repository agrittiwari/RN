import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import contacts from './contacts'
import Row from './row'
export default class App extends React.Component {
  state = {
    showContacts: false,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  renderItem = (obj) => <row {...obj.item} />

  render() {
    return(
    
      <View  style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {(this.state.showContacts) && (
             <FlatList 
             renderItem ={ obj =>  <Row {...(obj.item)}/>}
             data ={contacts}
             />
        )}
      </View>
    
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
