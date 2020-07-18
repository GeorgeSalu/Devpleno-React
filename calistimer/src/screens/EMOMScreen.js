import React,{Component} from 'react'
import { Keyboard, ScrollView, StyleSheet, Image, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import Select from '../components/Select'
import Title from '../components/Title'

class EMOMScreen extends Component {

  state = {
    keyboardIsVisible: false,

    alerts: 0,
    countdown: 0,
    time: '15',

    isRunning: false
  }

  componentDidMount() {
    this.kbShow = Keyboard.addListener('keyboardDidShow', () => {
      this.setState({ keyboardIsVisible: true })
    })
    this.kbHide = Keyboard.addListener('keyboardDidHide', () => {
      this.setState({ keyboardIsVisible: false })
    })
  }

  componentWillUnmount() {
    this.kbShow.remove()
    this.kbHide.remove()
  }

  render() {
    if(this.state.isRunning) {
      return (
        <View>
          <Text>Running</Text>
        </View>
      )
    }
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior='padding'>
        <ScrollView style={styles.container}>
          <Title title="EMOM" subTitle="Every Minute On The Minutes" style={{ paddingTop: this.state.keyboardIsVisible ? 20: 200 }} />
          <Image style={{ alignSelf: 'center', marginBottom: 17 }} source={require('../../assets/settings-cog.png')} />
          <Select 
            label='Alertas:'
            current={this.state.alerts}
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
            onSelect={ opt => this.setState({ alerts: opt }) } />
  
          <Select 
            label='Contagem regressiva:'
            current={this.state.countdown}
            options={[{ id: 1, label: 'sim'},{ id: 0, label:'não'}]}
            onSelect={ opt => this.setState({ countdown: opt }) } />
          <Text style={styles.label}>Quantos minutos:</Text>
          <TextInput style={styles.input} keyboardType='numeric' value={this.state.time} onChangeText={ text => this.setState({ time: text }) } />
          <Text style={styles.label}>minutos</Text>
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.setState({ isRunning: true })}>
            <Image  source={require('../../assets/btn-play.png')} />
          </TouchableOpacity>
          <Text>Testar</Text>
          <Text>{JSON.stringify(this.state)}</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

EMOMScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6304A',
    paddingTop: 10
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