import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Select extends Component {

  state = {
    current: 'Opt1'
  }

  handlePress = opt => () => {
    this.setState({
      current: opt
    })
    if(this.props.onSelect) {
      this.props.onSelect(opt)
    }
  }

  render() {
    const { options } = this.props
    const { current } = this.state

    return (
      <View style={{flex: 1}}>
        <Text style={styleSelect.label}>Label</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          {options.map(opt => {
            return (
              <TouchableOpacity 
                key={opt} 
                style={[styleSelect.opt, opt === current ? styleSelect.optSelected : null]}
                onPress={this.handlePress(opt)}
                > 
                <Text style={styleSelect.optLabel}>{opt}</Text>
              </TouchableOpacity>
            )
          })}
          
        </View>
      </View>
    )
  }

}

const styleSelect = StyleSheet.create({
  label: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24
  },
  opt: {

  },
  optSelected: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    opacity: 0.6
  },
  optLabel: {
    color: 'white',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24,
    opacity: 1
  }
})

const EMOMScreen = props => {
  return (
    <View style={styles.container}>
      <Text>EMOM Screen</Text>
      <Select 
        options={['Opt1','Opt2', 'Teste']}
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