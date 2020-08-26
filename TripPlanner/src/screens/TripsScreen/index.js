import React from 'react'
import {View, Text, FlatList} from 'react-native'
import Trip from './Trip'

export default class TripsScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  renderItem = item => {
    return <Trip title={item.item.name} price={item.item.price}/>
  }

  render() {
    const trips = [
      {id: '1', name: 'eurotrip 2019', price: 'r$ 200'},
      {id: '2', name: 'atacama', price: 'r$ 300'},
      {id: '3', name: 'portugal', price: 'r$ 1300'}
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
          <FlatList
            data={trips}
            renderItem={this.renderItem}
            horizontal
            keyExtractor={ item => item.id}
          />
          
        </View>
      </View>
    )
  }
}