import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen';
import EMOMScreen from './src/screens/EMOMScreen';
import IsometriaScreen from './src/screens/IsometriaScreen';
import AMRAPScreen from './src/screens/AMRAPScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  EMOM: EMOMScreen,
  Isometria: IsometriaScreen,
  AMRAP: AMRAPScreen
}, {initialRouteName: 'AMRAP'})

export default createAppContainer(AppNavigator)