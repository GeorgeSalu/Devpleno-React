import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const EMOMScreen = props => {
  return (
    <View style={styles.container}>
      <Text>EMOM Screen</Text>
    </View>
  )
}

EMOMScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6304A'
  }
})

export default EMOMScreen;