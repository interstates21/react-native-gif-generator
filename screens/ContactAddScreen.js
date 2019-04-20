import React from 'react'
import {Text, View, StyleSheet, TextInput, Button, KeyboardAvoidingView} from 'react-native'

// Todo find a usage for that

function ElementButton(props) {
  let color = props.element === props.elementSelected ?
  'orange' : 'black'
  return (
  <View style={styles.elementButton}>
   <Button
      color={color}
      onPress={props.handlePress}
      title={props.element}
    />
  </View>
  )
}


class ContactAddScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Add new Awesome Abstraction',
    headerStyle: {
      borderBottomWidth: 1,
      borderColor: 'lightgrey'
    }
  }

  state = {
    name: '',
    isValidForm: false,
    elementSelected: ''
  }

  validateContact = (name, elementSelected) => {
    let words = name.split(' ')
    name = name.trim()
    if (name.length > 4 && name.length < 26 &&
     elementSelected && words.length === 2) {
      this.setState({
        isValidForm: true
      })
    } else {
      this.setState({
        isValidForm: false
      })
    }
  }

  handleNameChange = name => {
    this.setState({name})
    this.validateContact(name, this.state.elementSelected)
  }

  handlePress = (option) => {
    this.setState(prevState => ({
      elementSelected: option
    }))
    this.validateContact(this.state.name, option)
  }
  
  onSubmit = () => {
    this.props.navigation.navigate('ContactList', {
      addName: this.state.name,
      addElement: this.state.elementSelected
    })
  }

  render() {
     return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='name'
          style={styles.input}
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />
      </View>
      <View style={styles.elementContainer}>
        <ElementButton
          element='Water'
          elementSelected={this.state.elementSelected}
          handlePress={() => {this.handlePress('Water')}}
        />
        <ElementButton
          element='Fire'
          elementSelected={this.state.elementSelected}
          handlePress={() => {this.handlePress('Fire')}}
        />
        <ElementButton
          element='Earth'
          elementSelected={this.state.elementSelected}
          handlePress={() => {this.handlePress('Earth')}}
        />
        <ElementButton
          element='Air'
          elementSelected={this.state.elementSelected}
         handlePress={() => {this.handlePress('Air')}}
        />
      </View>
      <Button
        onPress={this.onSubmit}
        color="orange"
        title="Add Line"
        disabled={!this.state.isValidForm} />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 60,
    justifyContent: 'center',
    flex: 1
  },
 inputContainer: {
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 1,
    margin: 5
},
input: {
  height: 40,
  textAlign: 'center',
  backgroundColor: '#ffffff'
},
  elementContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 40
  },
  elementButton: {
    margin: 3,
  },
})

export default ContactAddScreen