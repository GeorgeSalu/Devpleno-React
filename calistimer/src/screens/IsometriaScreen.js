import React,{Component} from 'react'
import { Keyboard, ScrollView, StyleSheet, Image, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import Select from '../components/Select'
import Title from '../components/Title'
import Time from '../components/Time'
import ProgressBar from '../components/ProgressBar'
import BackgroundProgress from '../components/BackgroundProgress'
import Sound from 'react-native-sound'

const alert = require('../../assets/sounds/alert.wav')

class IsometriaScreen extends Component {

  state = {
    keyboardIsVisible: false,
    alerts: [0, 15],
    countdown: 1,
    time: '2',
    isRunning: false,
    countdownValue: 0,
    count: 0
  }

  componentDidMount() {
    Sound.setCategory('Playback', true)
    this.alert = new Sound(alert)
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

  playAlert = () => {
    const resto = this.state.count % 60
    if(this.state.alerts.indexOf(resto) >= 0) {
      this.alert.play();
    }
    if(this.state.countdown === 1){
      if(resto>= 55 && resto < 60) {
        this.alert.play()
      } 
    }
  }

  stop = () => {
    clearInterval(this.countdownTimer)
    clearInterval(this.countTimer)
    this.setState({
      isRunning: false
    })
  }

  play = () => {
    this.setState({
      count: 0,
      countdownValue: this.state.countdown === 1 ? 5 : 0
    })
    this.setState({ isRunning: true })
    const count = () => {
      this.setState({ count: this.state.count + 1 }, () => {
        this.playAlert()
        if(this.state.count === parseInt(this.state.time)*60) {
          clearInterval(this.countTimer)
        }
      })
    }
    // checar o countdown
    if(this.state.countdown === 1) {
      this.alert.play()
      this.countdownTimer = setInterval(() => {
        this.alert.play()
        this.setState({ countdownValue: this.state.countdownValue - 1 }, () => {
          if(this.state.countdownValue === 0) {
            clearInterval(this.countdownTimer)
            this.countTimer = setInterval(count, 1000)
          }
        })
      }, 1000)
    } else {
      this.countTimer = setInterval(count, 1000)
    }
    // comecar contar
    // checar terminou
  }

  render() {
    if(this.state.isRunning) {
      const percMinute = parseInt(((this.state.count % 60)/60)*100)
      const percTime = parseInt(((this.state.count/60) / parseInt(this.state.time)) * 100)
      return (
        <BackgroundProgress percentage={percMinute}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flex: 1 }}>
              <Title title="EMOM" subTitle="Every Minute On The Minute" style={{ paddingTop: this.state.keyboardIsVisible ? 20: 200 }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Time time={this.state.count} />
              <ProgressBar percentage={percTime} />
              <Time time={parseInt(this.state.time)*60 - this.state.count} type='text2' appendedText={' restantes'} />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              {
                this.state.countdownValue > 0 ?
                  <Text style={styles.countdown}>{this.state.countdownValue}</Text>
                  : null
              }
              <TouchableOpacity style={{ alignSelf: 'center', marginBottom: 20 }} onPress={this.stop}>
                <Image  source={require('../../assets/btn-stop.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </BackgroundProgress>
      )
    }
    return (
      <KeyboardAvoidingView style={{ flex:1 }} behavior='padding'>
        <ScrollView style={styles.container}>
          <Title title="EMOM" subTitle="Every Minute On The Minute" style={{ paddingTop: this.state.keyboardIsVisible ? 20: 200 }} />
          <Image style={{ alignSelf: 'center', marginBottom: 17 }} source={require('../../assets/settings-cog.png')} />
          <Select 
            label='Alertas:'
            current={this.state.alerts}
            options={
            [ 
              {
                id: 0,
                label: '0s'
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
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={this.play}>
            <Image  source={require('../../assets/btn-play.png')} />
          </TouchableOpacity>
          <Text>Testar</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

IsometriaScreen.navigationOptions = {
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
  },
  countdown: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 144,
    color: 'white',
    textAlign: 'center'
  }
})

export default IsometriaScreen;