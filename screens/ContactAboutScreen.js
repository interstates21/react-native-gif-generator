import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'

const apiKey = 'VtovCVsaBaV8iYBntNYZgMXmQXEj28KC'
// Use API to get a pic
class ContactAboutScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('name')
  })

  state = {
    gifs: []
  }

  searchGif = async (name) => {
  const response = await
  fetch(`http://api.giphy.com/v1/gifs/search?q=${name[0]}+${name[1]}&api_key=${apiKey}&limit=1`)
  const {data} = await response.json()
  this.setState({gifs: data})
}

componentDidMount() {
  this.searchGif(this.props.navigation.getParam('name').split(' '))
}

  render() {
    if (!this.state.gifs[0])
      return(<Text> Loading </Text>)
    return (
      <View style={styles.container}>
        <Text> {this.props.navigation.getParam('name')} </Text>
        <Image
        source={{uri: this.state.gifs[0].images.fixed_height.url}}
         style={{margin: 20, width: 200, height:200 }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
export default ContactAboutScreen