import React from 'react'
import {View, Text, FlatList, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import styles from './styles'

export default class TripScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  state = {
    trips: [],
    points: []
  }

  renderItem = item => {
    return (
      <View style={styles.item}>
        <View style={styles.wrapperInfo}>
          <Text style={styles.itemName}>{item.item.pointName}</Text>
          <Text>{item.item.description}</Text>
        </View>
        <View style={styles.wrapperItemPice}>
          <Text style={styles.itemPrice}>R$ {item.item.price.toFixed(2)}</Text>
        </View>
      </View>
    )
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = async() => {
    const id = this.props.navigation.state.params.id
    const tripsAS = await AsyncStorage.getItem('trips')
    let trips = []
    if(tripsAS) {
      trips = JSON.parse(tripsAS)
    }

    const pointsAs = await AsyncStorage.getItem('trip-'+id)
    let points = []
    if(pointsAs) {
      points = JSON.parse(pointsAs)
    }

    let trip = {
      trip: '',
      price: 0
    }
    trips.forEach(t => {
      if(t.id === id) {
        trip.trip = t.trip
        trip.price = t.price ? t.price : 0
      }
    })

    this.setState({ 
      trip: trip, 
      points: points 
    })
  }

  render() {
    const { points, trip } = this.state
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
              <Image source={require('../../assets/icon-chevron-left.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tripName}>{trip.trip}</Text>
          <Text style={styles.tripPrice}>R$ {parseFloat(trip.price).toFixed(2)}</Text>
        </View>
        <FlatList style={{
            flex: 1
          }}
          contentContainerStyle={{
            paddingTop: 16,
            paddingLeft: 16
          }}
          keyExtractor={item => item.id.toString()}
          data={points}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}