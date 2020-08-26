import React from 'react'
import {View, Text, FlatList} from 'react-native'
import Trip from './Trip'

export default class TripsScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  

  render() {
    const trips = [
      {id: '1', name: 'eurotrip 2019', price: 'r$ 200'},
      {id: '2', name: 'atacama', price: 'r$ 300'}
    ]
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

          <Trip title='EuroTrip 2019' price='R$ 4000'/>
        </View>
      </View>
    )
  }
}