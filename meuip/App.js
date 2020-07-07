import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import logo from './assets/logo.png'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.findMyIp = this.findMyIp.bind(this)

    this.state = {
      data: ''
    }
  }

  async findMyIp() {
    this.setState({
      data: 'descobrindo ip...'
    })
    const ip = await fetch('http://gttpbin.org/ip')
    const data = await ip.json()
    this.setState({
      data: data.origin
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Image source={logo} />
          <Text style={styles.ip}>{this.state.data}</Text>
          <Button title="Descobrir meu ip" onPress={this.findMyIp}></Button>
        </View>
        <View style={styles.footer}>
          <Text style={styles.made}>Feito com amor</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2336',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ip: {
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10
  },  
  made: {
    color: 'white',
    textAlign: 'center',

  }
});
