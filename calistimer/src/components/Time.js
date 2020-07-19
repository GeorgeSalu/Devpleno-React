import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Timer = props => {
  const minutes = parseFloat(props.time / 60) 
  const seconds = props.time % 60
  return (
  <Text>{minutes}:{seconds}</Text>
  )
}

const styles = StyleSheet.create({

})

export default Timer