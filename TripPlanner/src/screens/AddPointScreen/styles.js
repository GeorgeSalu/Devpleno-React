import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 16
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18
  },
  wrapperItemPice: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16
  },
  itemPrice: { 
    textAlign: 'right',
    color: '#24C6DC', 
    fontWeight: 'bold' 
  },
  wrapperInfo: { 
    flex: 1 
  },
  wrapper: {
    flex: 1
  },
  header: {
    height: 192,
    backgroundColor: 'grey'
  },
  backButton: {
    position: 'absolute',
    top: 36,
    left: 16,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  tripName: {
    position: 'absolute',
    left: 16,
    bottom: 16
  },
  tripPrice: {
    position: 'absolute',
    bottom: 16,
    right: 32,
    textAlign: 'right',
    backgroundColor: '#24C6DC',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 4,
    paddingLeft: 4,
    color: 'white'
  },
  input: {
    backgroundColor: '#E5E5E5',
    padding: 20,
    marginBottom: 16
  },
  btn: {
    backgroundColor: '#E5E5E5',
    padding: 20,
    marginBottom: 16
  }
})

export default styles