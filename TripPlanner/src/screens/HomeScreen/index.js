import React from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native'
import assets from './assets'
import styles from './styles'

export default class HomeScreen extends React.Component {

  state = {
    counter: 0
  }

  handleCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return(
      <ImageBackground 
        source={assets.background}
        imageStyle={{ resizeMode: 'stretch' }}
        style={styles.background}
      >
        <View style={styles.wrapperlogoTripePlanner}>
          <Image source={assets.tripplanner} />
        </View>
        <View style={styles.wrapperlogoDevPLeno}>
          <Image source={assets.devpleno} />
        </View>
        <TouchableWithoutFeedback onPress={this.handleCounter}>
          <View style={styles.buttonBackground}>
            <Text style={styles.buttonText}>COMEÇAR!{this.state.counter}</Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    )
  }
}