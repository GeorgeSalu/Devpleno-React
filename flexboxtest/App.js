import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  box1: {
    //padding: 30,
    flex: 1,
    backgroundColor: 'steelblue',
    margin: 4
  },
  box2: {
    flex: 2,
    //padding: 30,
    backgroundColor: 'steelblue',
    margin: 4
  },
  box3: {
    flex: 3,
    //padding: 30,
    backgroundColor: 'steelblue',
    margin: 4
  }
});
