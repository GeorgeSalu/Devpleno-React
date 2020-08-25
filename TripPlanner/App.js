import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import TripsScreen from './src/screens/TripsScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripsScreen
}, { initialRouteName: 'Home' })

export default createAppContainer(AppNavigator)