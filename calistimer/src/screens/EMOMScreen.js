import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import Select from '../components/Select'
import Title from '../components/Title'

const EMOMScreen = props => {
  return (
    <View style={styles.container}>
      <Title title="EMOM" subTitle="Every Minute On The Minutes" />
      <Image source={require('../../assets/settings-cog.png')} />
      <Select 
        label='Alertas:'
        current={0}
        options={
        [ 
          {
            id: 0,
            label: 'Desligado'
          }, 
          {
            id: 15, 
            label: '15s'
          },
          { 
            id: 30,
            label: '30s' 
          }, 
          {
            id: 45,
            label: '45s'
          }
        ]
        }
        onSelect={ opt => console.log('selecionado', opt) } />

      <Select 
        label='Contagem regressiva'
        current={0}
        options={[{ id: 1, label: 'sim'},{ id: 0, label:'não'}]}
        onSelect={ opt => console.log('selecionado', opt) } />
      <Text style={styles.label}>Quantod minutos:</Text>
      <Text style={styles.input}>15</Text>
      <Text style={styles.label}>minutos</Text>
      <Image source={require('../../assets/btn-play.png')} />
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
  },
  label: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24
  },
  input: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 48
  }

})

export default EMOMScreen;