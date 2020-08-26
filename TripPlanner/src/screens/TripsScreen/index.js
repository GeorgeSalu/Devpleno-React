import React from 'react'
import {View, Text} from 'react-native'
import Trip from './Trip'

export default class TripsScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    
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
          <Trip />
        </View>
      </View>
    )
  }
}