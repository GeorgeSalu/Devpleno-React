import React from 'react'
import {View, Text, TouchableOpacity,Image, TextInput } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import styles from './styles'

class AddPointScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  state = {
    position: {
      latitude: 37.78825,
      longitude: -122.4324
    },
    pointName: '',
    description: '',
    price: 0
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
                coordinate={{
                  latitude: 37.78825,
                  longitude: -122.4324
                }} 
                draggable
                onDragEnd={
                  (evt) => this.setState({ position: evt.nativeEvent.coordinate })
                }
              />
            </MapView>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
              <Image source={require('../../assets/icon-chevron-left.png')} />
            </TouchableOpacity>
          </View>
        </View>
          <TextInput style={styles.input} placeholder='Nome do ponto' onChangeText={txt => this.setState({ pointName: txt })}></TextInput>
          <TextInput style={styles.input} placeholder='Descricao' onChangeText={txt => this.setState({ description: txt })}></TextInput>
          <TextInput style={styles.input} placeholder='Preco' onChangeText={txt => this.setState({ price: txt })}></TextInput>
          <TouchableOpacity style={styles.btn}>
            <Text>Salvar ponto</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

export default AddPointScreen