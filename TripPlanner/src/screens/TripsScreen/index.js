import React from 'react'
import { View, FlatList, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import Trip from './Trip'
import isIphoneX from '../../utils/isIphoneX'
import MapView from 'react-native-maps'

export default class TripsScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  state = {
    trips: []
  }

  renderItem = item => {
    return <Trip onPress={() => this.props.navigation.navigate('Trip')} title={item.item.name} price={item.item.price}/>
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = async() => {
    const tripsAs = await AsyncStorage.getItem('trips')
    let trips = []
    if(tripsAs) {
      trips = JSON.parse(tripsAs)
    }
    this.setState({ trips })
  }

  render() {
    const { trips } = this.state
    return(
      <View style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'stretch'
        }}>
        <View style={{
            flex: 1
          }}>
          <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddTrip')} style={{
              position: 'absolute',
              bottom: 0,
              right: 20,
              padding: 10
            }}>
            <Image source={require('../../assets/icon-add-trip.png')} />
          </TouchableOpacity>
        </View>
        <View style={{
            backgroundColor: 'white'
          }}>
          <FlatList
            data={trips}
            renderItem={this.renderItem}
            horizontal
            keyExtractor={ item => item.id}
            style={[
              isIphoneX() ? { marginBottom: 20 } : null
            ]}
          />
        </View>
      </View>
    )
  }
}