import React from 'react'
import {Text, StyleSheet } from 'react-native'

const Timer = props => {
  const minutes = parseInt(props.time / 60) 
  const seconds = parseInt(props.time % 60)
  const format = num => {
    if(num < 10) {
      return '0'+num
    }
    return num
  }
  return (
    <Text style={styles.text}>{format(minutes)}:{format(seconds)}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 96,
    textAlign: 'center',
    color: 'white'
  }
})

export default Timer