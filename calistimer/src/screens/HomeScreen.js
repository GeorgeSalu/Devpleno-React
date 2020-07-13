import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Button from '../componentes/Button'

const HomeScreen = props => {
  return (
    <View style={{ flex: 1 ,backgroundColor: '#D6304A' }}>
      <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 48, textAlign: 'center', color: 'white', marginTop: 111, marginBottom: 111 }} >Calistimer</Text>
      <Button style={{ padding: 20 }} onPress={ () => props.navigation.navigate('EMOM') }>EMOM</Button>
      <Button style={{ padding: 20 }} onPress={ () => props.navigation.navigate('EMOM') }>AMRAP</Button>
      <Button style={{ padding: 20 }} onPress={ () => props.navigation.navigate('EMOM') }>Isometria</Button>
      
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null
}

export default HomeScreen;