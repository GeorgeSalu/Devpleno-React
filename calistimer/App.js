import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen
}, {initialRouteName: 'Home'})

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
