import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import styles from './styles'

const Trip = props => {
  const dim = Dimensions.get('window')
  return (
    <View style={styles.wrapperTrip}>
      <View style={[styles.image], { width: dim.width - 32 }}><Text>Image</Text></View>
      <Text>Eurotrip 2019</Text>
      <Text style={styles.price}>R$ 200</Text>
    </View>
  )
}

export default Trip