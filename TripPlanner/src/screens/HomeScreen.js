import React from 'react'
import {StyleSheet, View, Text, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  wrapperlogoTripePlanner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapperlogoDevPLeno: { 
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 32
  },
  buttonBackground: { 
    backgroundColor: 'white',
    paddingBottom: 16,
    paddingTop: 16
  },
  buttonText: { textAlign: 'center', fontSize: 18 }
})

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
        source={require('../assets/background.png')}
        imageStyle={{ resizeMode: 'stretch' }}
        style={styles.background}
      >
        <View style={styles.wrapperlogoTripePlanner}>
          <Image source={require('../assets/logo-tripplanner.png')} />
        </View>
        <View style={styles.wrapperlogoDevPLeno}>
          <Image source={require('../assets/logo-devpleno.png')} />
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