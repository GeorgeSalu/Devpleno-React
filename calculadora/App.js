import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {

    const col1Buttons = [
      ['7','8','9'],
      ['4','5','6'],
      ['1','2','3'],
      [',','0','=']
    ]

    return (
      <View style={styles.container}>
        <Text style={styles.display}>Display</Text>
        <Text style={styles.result}>Result</Text>
        <View style={styles.buttons} >
          <View style={styles.col1}>
            { col1Buttons.map( line => 
            <View style={styles.line}>
              <Text>Col1</Text>
              <Text>Col1</Text>
              <Text>Col1</Text>
            </View>
             ) }
            <Text>Col1</Text>
          </View>
          <View style={styles.col2}>
            <Text>Col2</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  display: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    fontSize: 80,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  },
  result: {
    flex: 0.4,
    backgroundColor: '#EFEFEF',
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 10,
    paddingBottom: 10
  },
  buttons: {
    flex: 5,
    flexDirection: 'row'
  },
  col1: {
    flex: 3,
    backgroundColor: 'grey'
  },
  col2: {
    flex: 1,
    backgroundColor: 'red'
  }
});
