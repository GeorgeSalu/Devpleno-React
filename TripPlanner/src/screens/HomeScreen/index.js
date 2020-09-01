import React from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import assets from './assets'
import styles from './styles'
import isIphoneX from '../../utils/isIphoneX'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  state = {
    show: false
  }

  handleCounter = () => {
    this.setState({
      show: !this.state.show
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
        {
          !this.state.show ?
          <TouchableWithoutFeedback onPress={this.handleCounter}>
            <View style={[styles.buttonBackground, isIphoneX() ? { paddingBottom: 32 } : null]}>
              <Text style={styles.buttonText}>COMEÇAR!</Text>
            </View>
          </TouchableWithoutFeedback>
          : 
          <TouchableWithoutFeedback onPress={this.handleCounter}>
            <View style={styles.buttonEmptyStateBackground}>
              <Image source={assets.pin} style={styles.pin} />
              <Text style={styles.buttonEmptyStateText}>Vamos planejar sua primeira viajem!{this.state.counter}</Text>
              <Image source={assets.arrow}  style={[styles.arrow, isIphoneX() ? { marginBottom: 16 } : null]}/>
            </View>
          </TouchableWithoutFeedback>
        }
      </ImageBackground>
    )
  }
}