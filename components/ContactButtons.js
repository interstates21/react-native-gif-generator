import React from 'react'
import {Button, View, StyleSheet} from 'react-native'

function ContactButtons(props) {
  return (
    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
      <View style={styles.buttonContainter}>
        <Button
        style={styles.button}
        title='sort name'
        onPress={props.sortName}/>
      </View>
       <View style={styles.buttonContainter}>
        <Button
        style={styles.button}
        title='sort element'
        onPress={props.sortElement}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainter: {
    flex: 1,
  },
  button: {
    backgroundColor: 'white'
  }
})

export default ContactButtons