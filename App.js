import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import ContactListScreen from './screens/ContactListScreen'
import ContactAddScreen from './screens/ContactAddScreen'
import ContactAboutScreen from './screens/ContactAboutScreen'
import SettingsScreen from './screens/SettingsScreen'

const ContactsStack= createStackNavigator (
  {
    ContactAdd: ContactAddScreen,
    ContactAbout: ContactAboutScreen,
    ContactList: ContactListScreen
  },
  {
    initialRouteName: "ContactList"
  }
)

const AppNavigator = createSwitchNavigator(
  {
    ContactsTab: ContactsStack,
    SettingsTab: SettingsScreen
  },
  {
    initialRouteName: "ContactsTab"
  }
)


const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return (
     <View style={styles.containter}>
        <AppContainer />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
  }
})
