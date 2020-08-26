import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  wrapperTrip: {
    backgroundColor: 'white',
    paddingTop: 16,
    paddingLeft: 16
  },
  image: {
    backgroundColor: 'green',
    height: 144
  },
  price: {
    position: 'absolute',
    top: 144-16,
    right: 32,
    textAlign: 'right',
    backgroundColor: '#24C6DC',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 4,
    paddingLeft: 4,
    color: 'white'
  }
})

export default styles