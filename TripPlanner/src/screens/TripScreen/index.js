import React, {Component} from 'react'
import {View, Text, FlatList, TouchableOpacity,Image , TouchableWithoutFeedback} from 'react-native'

class TripScreen extends Component {

  static navigationOptions = {
    header: null
  }

  renderItem = item => {
    return (
      <View>
        <Text>{item.item.name}</Text>
        <Text>{item.item.description}</Text>
        <Text>{item.item.price}</Text>
      </View>
    )
  }

  render() {
    const trip = {
      name: 'EuroTrip 2019',
      price: 'R$ 5000',
      places: [
        {id: '1', name: 'Amsterdam', description: 'chegada',  price: 100, lat: 0, long: 0},
        {id: '2', name: 'bruxelas', description: 'hospedagem', price: 1000, lat: 0, long: 0},
      ]
    }
    return (
      <View style={{
        flex: 1
      }}>
        <TouchableWithoutFeedback>
          <Image source={require('../../assets/icon-chevron-left.png')} />
        </TouchableWithoutFeedback>
        <View style={{
          height: 192,
          backgroundColor: 'grey'
        }}>
          <Text style={{
            position: 'absolute',
            left: 16,
            bottom: 16
          }}>{trip.name}</Text>
          <Text style={{
              position: 'absolute',
              bottom: 16,
              right: 32,
              textAlign: 'right',
              backgroundColor: '#24C6DC',
              paddingTop: 4,
              paddingBottom: 4,
              paddingRight: 4,
              paddingLeft: 4,
              color: 'white'
          }}>R$ 5000</Text>
        </View>
        <FlatList style={{
          flex: 1
        }}
          data={trip.places}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

export default TripScreen