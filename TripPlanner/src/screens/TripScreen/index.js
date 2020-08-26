import React from 'react'
import {View, Text, FlatList, TouchableOpacity,Image } from 'react-native'

export default class TripScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  renderItem = item => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 16
      }}>
        <View style={{ flex: 1 }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 18
          }}>{item.item.name}</Text>
          <Text>{item.item.description}</Text>
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: 16
        }}>
          <Text style={{ textAlign: 'right', color: '#24C6DC', fontWeight: 'bold' }}>{item.item.price}</Text>
        </View>
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
        
        <View style={{
          height: 192,
          backgroundColor: 'grey'
        }}>
          <View style={{
            position: 'absolute',
            top: 36,
            left: 16,
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10
          }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
              <Image source={require('../../assets/icon-chevron-left.png')} />
            </TouchableOpacity>
          </View>

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
          contentContainerStyle={{
            paddingTop: 16,
            paddingLeft: 16
          }}
          keyExtractor={item => item.id}
          data={trip.places}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}