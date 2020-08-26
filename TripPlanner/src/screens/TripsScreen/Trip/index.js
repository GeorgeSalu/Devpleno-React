import React from 'react'
import {View} from 'react-native'

const Trip = props => {
  return (
    <View style={{
      backgroundColor: 'white',
      paddingTop: 16,
      paddingLeft: 16
    }}>
      <View style={{
        backgroundColor: 'green',
        width: dim.width-32,
        height: 144
      }}><Text>Image</Text></View>
      <Text>Eurotrip 2019</Text>
      <Text style={{
        position: 'absolute',
        top: 144-16,
        right: 32,
        textAlign: 'right',
        backgroundColor: '#24C6DC',
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 4,
        paddingLeft: 4,
        color: 'white'
      }}>R$ 200</Text>
    </View>
  )
}

export default Trip