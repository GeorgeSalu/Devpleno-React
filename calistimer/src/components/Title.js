import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = props => {
  return (
    <View style={{paddingTop: 20, paddingBottom: 20 }}>
      <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 48, color: 'white', textAlign: 'center' }}>{props.title}</Text>
      <Text>{props.subTitle}</Text>
    </View>
  )
}

export default Title