import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Select = props => {
  return (
    <View style={{flex: 1}}>
      <Text style={styleSelect.label}>Label</Text>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity style={styleSelect.optSelected}> 
          <Text style={styleSelect.optLabel}>Opt1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleSelect.optSelected}>
          <Text style={styleSelect.optLabel}>Opt1</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styleSelect = StyleSheet.create({
  label: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24
  },
  optSelected: {
    backgroundColor: 'white'
  },
  optLabel: {
    color: 'white',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24
  }
})

const EMOMScreen = props => {
  return (
    <View style={styles.container}>
      <Text>EMOM Screen</Text>
      <Select />
    </View>
  )
}

EMOMScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6304A',
    paddingTop: 200
  }
})

export default EMOMScreen;