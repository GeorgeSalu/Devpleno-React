import React from 'react'
import {View, Text, Dimensions} from 'react-native'

export default class TripsScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    const dim = Dimensions.get('window')
    return(
      <View style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch'
      }}>
        <View style={{
          backgroundColor: 'red',
          flex: 1
        }}>
          <Text>Mapa</Text>
        </View>
        <View style={{
          backgroundColor: 'pink'
        }}>
          
        </View>
      </View>
    )
  }
}