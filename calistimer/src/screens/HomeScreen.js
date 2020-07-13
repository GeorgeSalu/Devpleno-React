import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

const HomeScreen = props => {
  return (
    <View style={{ flex: 1 ,backgroundColor: '#D6304A' }}>
      <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 48, textAlign: 'center', color: 'white', marginTop: 111 }} >Calistimer</Text>
      <TouchableHighlight  onPress={ () => props.navigation.navigate('EMOM') }>
        <Text style={{ color: 'white', fontFamily:'Ubuntu-Regular', fontSize: 24, textAlign: 'center' }}>EMOM</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={ () => props.navigation.navigate('EMOM') }>
        <Text>AMRAP</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={ () => props.navigation.navigate('EMOM') }>
        <Text>Isometria</Text>
      </TouchableHighlight>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null
}

export default HomeScreen;