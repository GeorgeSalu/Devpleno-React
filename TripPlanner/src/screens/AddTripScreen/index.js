import React from 'react'
import {View, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native'
import styles from './styles'

export default class AddTripScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  state = {
    trip: ''
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

  handleSave = async () => {
    const trip = {
      id: new Date().getTime(),
      trip: this.state.trip,
      price: 0,
      latitude: 0,
      longitude: 0
    }

    const tripsAS = await AsyncStorage.getItem('trips')
    let trips = []
    if(tripsAS) {
      trips = JSON.parse(tripsAS)
    }
    trips.push(trip)
    await AsyncStorage.setItem('trips', JSON.stringify(trips))
  }

  render() {
    return (
      <View style={styles.wrapper}>
          <TextInput style={styles.input} placeholder='Nome da viajem' onChangeText={txt => this.setState({ trip: txt })}></TextInput>
          <TouchableOpacity style={styles.btn} onPress={this.handleSave}>
            <Text>Salvar viagem</Text>
          </TouchableOpacity>
      </View>
    )
  }
}