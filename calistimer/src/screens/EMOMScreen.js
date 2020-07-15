import React from 'react'
import { View, StyleSheet } from 'react-native'
import Select from '../components/Select'

const EMOMScreen = props => {
  return (
    <View style={styles.container}>
      <Select 
        label='Alertas:'
        current={0}
        options={[ 
          {
            id: 0,
            label: 'desligado'
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
        ]}
        onSelect={ opt => console.log('selecionado', opt) } />

      <Select 
        label='Contagem regressiva'
        current={0}
        options={[{ id: 1, label: 'sim'},{ id: 0, label:'não'}]}
        onSelect={ opt => console.log('selecionado', opt) } />
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