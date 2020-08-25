import React from 'react';
import HomeScreen from './src/screens/HomeScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
  Home: HomeScreen
}, { initialRouteName: 'Home' })

export default createAppContainer(AppNavigator)