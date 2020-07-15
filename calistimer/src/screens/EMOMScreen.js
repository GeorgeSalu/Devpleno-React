import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Select extends Component {

  state = {
    current: ''
  }

  componentDidMount() {
    this.setState({
      current: this.props.current
    })
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
    const { options, label } = this.props
    const { current } = this.state

    return (
      <View style={{flex: 1}}>
        <Text style={styleSelect.label}>{label}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          {options.map(opt => {
            let id = ''
            let label = ''
            if(typeof opt === 'string') {
              id = opt
              label = opt
            } else if(typeof opt === 'object') {
              id = opt.id
              label = opt.label
            }
            return (
              <TouchableOpacity 
                key={id} 
                style={[styleSelect.opt, id === current ? styleSelect.optSelected : null]}
                onPress={this.handlePress(id)}
                > 
                <Text style={styleSelect.optLabel}>{label}</Text>
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
      <Select 
        label='Alertas:'
        current={'desligado'}
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
        current={'não'}
        options={['sim','não']}
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