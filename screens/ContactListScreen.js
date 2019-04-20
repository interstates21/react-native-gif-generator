import React from 'react'
import {Text, View, StyleSheet, SectionList, Button} from 'react-native'
import contacts, {compareNames, compareElements} from'../components/ContactGenerate'
import ContactList from '../components/ContactList'

class ContactListScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: "I am your abstract list",
    headerStyle: {
      alingItems: 'center',
      justifyContent: 'center'
    },
    headerRight: (
      <View style={styles.addButton}>
      <Button
        onPress={() =>{
          navigation.navigate('ContactAdd')}}
        title="Add Line"
        color="black"
      />
      </View>
    ),
  })
  state = {
    contacts: contacts
  }

  sortNames = () => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.sort(compareNames)
    }))
  }

  sortElements = () => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.sort(compareElements)
    }))
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.navigation.getParam('addName'))
      return(prevState)
    return ({
      contacts: [
          ...prevState.contacts,
          {
            key: prevState.contacts.length,
            name: nextProps.navigation.getParam('addName'),
            element: nextProps.navigation.getParam('addElement')
          }
      ]
    })
  }

  // componentDidMount() {
  //   let addName = this.props.navigation.getParam('addName')
  //   let addElement = this.props.navigation.getParam('addElement')
  //   if (addName && addElement) {
  //     console.log("in")
  //     this.setState(prevState => ({
  //       contacts: [
  //         ...prevState.contacts,
  //         {
  //           key: prevState.contacts.length,
  //           name: addName,
  //           element: addElement
  //         }
  //       ]
  //     }))
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
      <ContactList
        contacts={this.state.contacts}
        onSelectContact={(contact) => {
          this.props.navigation.navigate('ContactAbout', {
            name: contact.name,
            element: contact.element
          })
        }}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  addButton: {
    width: 120,
    paddingEnd: 20
  }
})

export default ContactListScreen