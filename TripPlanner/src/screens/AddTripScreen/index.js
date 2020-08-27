import React from 'react'
import {View, Text, FlatList, TouchableOpacity,Image } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import styles from './styles'

export default class AddTripScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  renderItem = item => {
    return (
      <View style={styles.item}>
        <View style={styles.wrapperInfo}>
          <Text style={styles.itemName}>{item.item.name}</Text>
          <Text>{item.item.description}</Text>
        </View>
        <View style={styles.wrapperItemPice}>
          <Text style={styles.itemPrice}>{item.item.price}</Text>
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
      <View style={styles.wrapper}>
        
        <View style={styles.header}>
            <MapView style={{flex: 1}} initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}>
              <Marker 
                draggable
                coordinate={{
                  latitude: 37.78825,
                  longitude: -122.4324
                }} 
              />
            </MapView>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
              <Image source={require('../../assets/icon-chevron-left.png')} />
            </TouchableOpacity>
          </View>

          <Text style={styles.tripName}>{trip.name}</Text>
          <Text style={styles.tripPrice}>R$ 5000</Text>
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