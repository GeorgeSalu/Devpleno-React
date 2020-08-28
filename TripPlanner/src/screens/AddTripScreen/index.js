import React from 'react'
import {View, Text, TouchableOpacity, TextInput } from 'react-native'
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
          <TextInput style={styles.input} placeholder='Nome do ponto' onChangeText={txt => this.setState({ trip: txt })}></TextInput>
          
          <TouchableOpacity style={styles.btn}>
            <Text>Salvar viagem</Text>
          </TouchableOpacity>
      </View>
    )
  }
}