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
  }
})

export default styles